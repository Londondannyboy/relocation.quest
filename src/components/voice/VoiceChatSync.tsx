'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  ReactNode,
} from 'react';
import { VoiceProvider, useVoice } from '@humeai/voice-react';
import { useCopilotChat } from '@copilotkit/react-core';
import { TextMessage, MessageRole } from '@copilotkit/runtime-client-gql';
import { motion, AnimatePresence } from 'framer-motion';

const CONFIG_ID = process.env.NEXT_PUBLIC_HUME_CONFIG_ID || '';

interface VoiceChatContextType {
  isVoiceConnected: boolean;
  isVoiceLoading: boolean;
  voiceError: string | null;
  toggleVoice: () => void;
  lastTranscript: string | null;
  isSpeaking: boolean;
}

const VoiceChatContext = createContext<VoiceChatContextType>({
  isVoiceConnected: false,
  isVoiceLoading: false,
  voiceError: null,
  toggleVoice: () => {},
  lastTranscript: null,
  isSpeaking: false,
});

export const useVoiceChat = () => useContext(VoiceChatContext);

// Inner component that has access to both Hume and CopilotKit
function VoiceChatSyncInner({
  accessToken,
  children,
}: {
  accessToken: string;
  children: ReactNode;
}) {
  const { connect, disconnect, status, messages } = useVoice();
  // Note: appendMessage is deprecated but still functional for now
  const { appendMessage } = useCopilotChat();
  const [isPending, setIsPending] = useState(false);
  const [lastTranscript, setLastTranscript] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const processedMessagesRef = useRef<Set<string>>(new Set());

  const isConnected = status.value === 'connected';

  // Sync Hume messages to CopilotKit
  useEffect(() => {
    if (!messages || messages.length === 0) return;

    messages.forEach((msg: any, index: number) => {
      const messageId = `${msg.type}-${index}-${msg.message?.content?.slice(0, 20) || ''}`;

      // Skip if already processed
      if (processedMessagesRef.current.has(messageId)) return;
      processedMessagesRef.current.add(messageId);

      // Handle user transcript (what the user said)
      if (msg.type === 'user_message' && msg.message?.content) {
        setLastTranscript(msg.message.content);

        // Append user message to CopilotKit chat
        try {
          appendMessage(
            new TextMessage({
              role: MessageRole.User,
              content: `🎤 ${msg.message.content}`,
            })
          );
        } catch (e) {
          console.error('[VoiceChat] Failed to append user message:', e);
        }
      }

      // Handle assistant response (what ATLAS said back)
      if (msg.type === 'assistant_message' && msg.message?.content) {
        setIsSpeaking(true);

        // Append assistant message to CopilotKit chat
        try {
          appendMessage(
            new TextMessage({
              role: MessageRole.Assistant,
              content: msg.message.content,
            })
          );
        } catch (e) {
          console.error('[VoiceChat] Failed to append assistant message:', e);
        }
      }

      // Handle audio end (assistant stopped speaking)
      if (msg.type === 'audio_output' && msg.end) {
        setIsSpeaking(false);
      }
    });
  }, [messages, appendMessage]);

  const toggleVoice = useCallback(async () => {
    if (isConnected) {
      disconnect();
      setIsSpeaking(false);
      return;
    }

    setIsPending(true);
    try {
      await connect({
        auth: { type: 'accessToken', value: accessToken },
        configId: CONFIG_ID,
      });
    } catch (e) {
      console.error('[VoiceChat] Connect error:', e);
    }
    setIsPending(false);
  }, [connect, disconnect, isConnected, accessToken]);

  const contextValue: VoiceChatContextType = {
    isVoiceConnected: isConnected,
    isVoiceLoading: isPending,
    voiceError: null,
    toggleVoice,
    lastTranscript,
    isSpeaking,
  };

  return (
    <VoiceChatContext.Provider value={contextValue}>
      {children}
    </VoiceChatContext.Provider>
  );
}

// Provider that wraps both VoiceProvider and children
export function VoiceChatProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/hume-token')
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          setAccessToken(data.accessToken);
        } else {
          setError(data.error || 'No token');
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  // If no token yet or error, provide a fallback context
  if (!accessToken) {
    return (
      <VoiceChatContext.Provider
        value={{
          isVoiceConnected: false,
          isVoiceLoading: !error,
          voiceError: error,
          toggleVoice: () => {},
          lastTranscript: null,
          isSpeaking: false,
        }}
      >
        {children}
      </VoiceChatContext.Provider>
    );
  }

  return (
    <VoiceProvider>
      <VoiceChatSyncInner accessToken={accessToken}>
        {children}
      </VoiceChatSyncInner>
    </VoiceProvider>
  );
}

// Synced Voice Button Component
export function SyncedVoiceButton() {
  const {
    isVoiceConnected,
    isVoiceLoading,
    voiceError,
    toggleVoice,
    isSpeaking,
  } = useVoiceChat();

  if (voiceError) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-200 text-sm">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Voice unavailable
      </div>
    );
  }

  if (isVoiceLoading && !isVoiceConnected) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/60 text-sm">
        <div className="w-4 h-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
        Loading voice...
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleVoice}
      disabled={isVoiceLoading}
      className={`relative group flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md transition-all shadow-lg ${
        isVoiceConnected
          ? isSpeaking
            ? 'bg-blue-500/90 hover:bg-blue-600/90'
            : 'bg-emerald-500/90 hover:bg-emerald-600/90'
          : 'bg-white/10 hover:bg-white/20 border border-white/20'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Pulse ring when connected */}
      {isVoiceConnected && (
        <motion.span
          className={`absolute inset-0 rounded-full ${
            isSpeaking ? 'bg-blue-500/50' : 'bg-emerald-500/50'
          }`}
          animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}

      {/* Mic icon */}
      <span className="relative z-10">
        {isVoiceLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        )}
      </span>

      {/* Label */}
      <span className="relative z-10 text-white text-sm font-medium whitespace-nowrap">
        {isVoiceLoading
          ? 'Connecting...'
          : isVoiceConnected
          ? isSpeaking
            ? 'ATLAS speaking...'
            : 'Listening...'
          : 'Talk to ATLAS'}
      </span>

      {/* Sound wave animation when connected */}
      <AnimatePresence>
        {isVoiceConnected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-0.5 ml-1"
          >
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                className="w-1 bg-white rounded-full"
                animate={{
                  height: isSpeaking ? ['12px', '20px', '12px'] : ['8px', '16px', '8px'],
                }}
                transition={{
                  duration: isSpeaking ? 0.4 : 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

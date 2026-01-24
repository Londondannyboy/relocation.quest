'use client';

import { useState, useEffect } from 'react';
import { CopilotSidebar, CopilotPopup } from '@copilotkit/react-ui';

interface ResponsiveCopilotProps {
  children: React.ReactNode;
  instructions: string;
  labels: {
    title: string;
    initial: string;
  };
  className?: string;
}

/**
 * Responsive CopilotKit wrapper:
 * - Desktop (>=768px): CopilotSidebar with defaultOpen={false}
 * - Mobile (<768px): CopilotPopup (floating widget button)
 */
export function ResponsiveCopilot({ children, instructions, labels, className }: ResponsiveCopilotProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // SSR: render sidebar by default, switch on mount
  if (!mounted) {
    return (
      <CopilotSidebar
        defaultOpen={false}
        instructions={instructions}
        labels={labels}
        className={className}
      >
        {children}
      </CopilotSidebar>
    );
  }

  if (isMobile) {
    return (
      <>
        {children}
        <CopilotPopup
          instructions={instructions}
          labels={labels}
          className="[&_.copilotKitPopup]:bg-stone-900/95 [&_.copilotKitPopup]:backdrop-blur-md [&_.copilotKitPopup]:border-white/10 [&_.copilotKitPopup]:max-h-[70vh]"
        />
      </>
    );
  }

  return (
    <CopilotSidebar
      defaultOpen={false}
      instructions={instructions}
      labels={labels}
      className={className}
    >
      {children}
    </CopilotSidebar>
  );
}

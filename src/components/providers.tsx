'use client';

import { CopilotKit } from '@copilotkit/react-core';

// CopilotKit runtime uses Google Gemini adapter directly
// Frontend actions (useCopilotAction) handle all UI updates
const RUNTIME_URL = '/api/copilotkit';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CopilotKit runtimeUrl={RUNTIME_URL}>
      {children}
    </CopilotKit>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { CopilotSidebar } from '@copilotkit/react-ui';

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
 * - Desktop (>=768px): CopilotSidebar (collapsed by default, user clicks to expand)
 * - Mobile (<768px): No sidebar/popup - users use the main ChatInput bar on the page
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

  // SSR: render children only, switch on mount
  if (!mounted) {
    return <>{children}</>;
  }

  // Mobile: no sidebar, just children (users use the main ChatInput on the page)
  if (isMobile) {
    return <>{children}</>;
  }

  // Desktop: sidebar collapsed by default
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

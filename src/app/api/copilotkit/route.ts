import {
  CopilotRuntime,
  GoogleGenerativeAIAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { NextRequest } from "next/server";

// Use Google Gemini as the LLM adapter
// This allows the CopilotKit runtime to directly interpret user messages
// and call frontend actions (update_destination_view, generate_custom_view, etc.)
const serviceAdapter = new GoogleGenerativeAIAdapter({
  model: "gemini-2.0-flash",
});

// Create CopilotRuntime - frontend actions are defined client-side via useCopilotAction
const runtime = new CopilotRuntime();

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};


import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "OpenRouter API key is not configured." },
        { status: 500 }
      );
    }

    const body = (await req.json()) as {
      messages?: UIMessage[];
    };

    if (!Array.isArray(body.messages)) {
      return Response.json(
        { error: "Invalid chat messages." },
        { status: 400 }
      );
    }

    const openrouter = createOpenRouter({ apiKey });

    const result = streamText({
      model: openrouter("openrouter/free"),
      system:
        "You are DayAI, a friendly AI study assistant. " +
        "Explain difficult topics step by step, use clear examples, " +
        "and help students understand what they are learning.",
      messages: await convertToModelMessages(body.messages),
    });

    return result.toUIMessageStreamResponse({
      onError: (error) => {
        console.error("DayAI OpenRouter stream error:", error);
        return "DayAI could not generate a response. Please try again.";
      },
    });
  } catch (error) {
    console.error("DayAI OpenRouter API error:", error);

    return Response.json(
      { error: "Unable to process the chat request." },
      { status: 500 }
    );
  }
}

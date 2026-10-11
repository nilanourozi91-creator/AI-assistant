
"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import {
  ArrowUp,
  Bot,
  LoaderCircle,
  Sparkles,
  User,
} from "lucide-react";

export default function AIStudyChatPage() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const question = input.trim();

    if (!question || isLoading) return;

    sendMessage({ text: question });
    setInput("");
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 dark:bg-slate-950 dark:text-white sm:px-8">
      <div className="mx-auto flex min-h-[85vh] max-w-4xl flex-col">
        <header className="mb-8 flex items-center gap-3">
          <div className="rounded-2xl bg-violet-600 p-3 text-white">
            <Sparkles size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold">AI Study Chat</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Your personal AI learning assistant
            </p>
          </div>
        </header>

        <section className="flex-1 space-y-5">
          {messages.length === 0 && (
            <div className="flex min-h-[45vh] flex-col items-center justify-center text-center">
              <Bot size={48} className="mb-4 text-violet-500" />
              <h2 className="text-xl font-semibold">
                What would you like to learn?
              </h2>
              <p className="mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">
                Ask a question about English, science, programming,
                or any subject you are studying.
              </p>
            </div>
          )}

          {messages.map((message) => (
            <div key={message.id} className="flex gap-3">
              <div className="mt-1 h-fit rounded-xl bg-violet-100 p-2 text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                {message.role === "user" ? (
                  <User size={18} />
                ) : (
                  <Bot size={18} />
                )}
              </div>

              <div className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {message.role === "user" ? "You" : "DayAI"}
                </p>

                {message.parts.map((part, index) =>
                  part.type === "text" ? (
                    <p
                      key={`${message.id}-${index}`}
                      className="whitespace-pre-wrap break-words text-sm leading-7"
                    >
                      {part.text}
                    </p>
                  ) : null
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-sm text-violet-500">
              <LoaderCircle size={18} className="animate-spin" />
              DayAI is thinking...
            </div>
          )}

          {error && (
            <p className="rounded-xl bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
              Something went wrong. Please check your API setup and try again.
            </p>
          )}
        </section>

        <form
          onSubmit={handleSubmit}
          className="sticky bottom-4 mt-8 flex items-end gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-800 dark:bg-slate-900"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                e.currentTarget.form?.requestSubmit();
              }
            }}
            placeholder="Ask DayAI anything..."
            rows={2}
            className="max-h-40 min-h-12 flex-1 resize-y bg-transparent px-2 py-3 text-sm outline-none"
          />

          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
            className="rounded-xl bg-violet-600 p-3 text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowUp size={20} />
          </button>
        </form>

        <p className="mt-3 text-center text-xs text-slate-500">
          AI responses can contain mistakes. Verify important information.
        </p>
      </div>
    </main>
  );
}

"use client";

import { motion } from "motion/react";
import { ArrowLeft, Check, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function GetStartedPage() {
 

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-10 text-slate-900 dark:bg-[#0B1020] dark:text-white">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-600/20" />

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/20" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
      </div>

      {/* Back to home */}
      <Link
        href="/"
        className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur transition hover:border-purple-200 hover:text-purple-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-purple-800 dark:hover:text-purple-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 shadow-lg shadow-purple-500/20">
              <Sparkles className="h-5 w-5 text-white" />
            </div>

            <span className="text-2xl font-bold tracking-tight">
              Day<span className="text-purple-600 dark:text-purple-400">AI</span>
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-200/50 dark:border-slate-800 dark:bg-[#111827] dark:shadow-black/20 sm:p-9">
          {/* Heading */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-950/50"
            >
              <Sparkles className="h-7 w-7 text-purple-600 dark:text-purple-400" />
            </motion.div>

            <h1 className="text-3xl font-bold tracking-tight">
              Welcome to DayAI
            </h1>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
              Your intelligent everyday AI assistant. Sign in with Google and
              start making your day smarter.
            </p>
          </div>

          {/* Google button */}
          <motion.button
            type="button"
           onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-600 dark:hover:bg-slate-800"
          >
            {/* Google Logo */}
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M21.35 12.23c0-.79-.07-1.55-.23-2.27H12v4.3h5.23a4.47 4.47 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.92-4.18 2.92-7.42Z"
              />
              <path
                fill="#34A853"
                d="M12 21.99c2.63 0 4.84-.87 6.45-2.34l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.99Z"
              />
              <path
                fill="#FBBC05"
                d="M6.54 14.09A5.85 5.85 0 0 1 6.23 12c0-.73.12-1.44.31-2.09V7.38H3.3A10 10 0 0 0 2 12c0 1.67.4 3.24 1.3 4.62l3.24-2.53Z"
              />
              <path
                fill="#EA4335"
                d="M12 5.88c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 2.97 14.63 2 12 2a9.74 9.74 0 0 0-8.7 5.38l3.24 2.53C7.31 7.6 9.46 5.88 12 5.88Z"
              />
            </svg>

            Continue with Google
          </motion.button>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />

            <span className="text-xs font-medium text-slate-400">
              SIMPLE & SECURE
            </span>

            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>

          {/* Benefits */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/50">
                <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              </div>

              <span className="text-sm text-slate-600 dark:text-slate-300">
                No password to remember
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/50">
                <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              </div>

              <span className="text-sm text-slate-600 dark:text-slate-300">
                Fast and secure sign-in
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/50">
                <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              </div>

              <span className="text-sm text-slate-600 dark:text-slate-300">
                Your DayAI account stays synced
              </span>
            </div>
          </div>

          {/* Security */}
          <div className="mt-7 flex items-start gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-900/70">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-purple-600 dark:text-purple-400" />

            <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
              Your Google account is used only to securely authenticate you.
              We never need to know or store your Google password.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs leading-5 text-slate-400">
          By continuing, you agree to DayAI&apos;s{" "}
          <Link
            href="/terms"
            className="font-medium text-slate-500 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="font-medium text-slate-500 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </motion.div>
    </main>
  );
}
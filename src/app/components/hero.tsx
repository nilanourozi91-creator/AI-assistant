"use client";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Command,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Moon,
  MoveUp,
  Play,
  Sparkles,
  Sun,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
// import ThemeButton
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

/* =========================================================
   ANIMATION SYSTEM
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const viewport = {
  once: true,
  amount: 0.2,
};

/* =========================================================
   DATA
========================================================= */

const features = [
  {
    icon: MessageCircle,
    title: "AI Assistant",
    description:
      "Ask questions, brainstorm ideas and get intelligent answers whenever you need them.",
  },
  {
    icon: CalendarDays,
    title: "Smart Planner",
    description:
      "Turn your goals into a realistic daily schedule automatically.",
  },
  {
    icon: Target,
    title: "Smart Goals",
    description:
      "Break big goals into small, actionable steps that you can actually finish.",
  },
  {
    icon: Brain,
    title: "Study Assistant",
    description:
      "Learn faster with explanations, summaries, quizzes and personalized study plans.",
  },
  {
    icon: Clock3,
    title: "Smart Reminders",
    description:
      "Never forget important tasks with intelligent reminders built around your day.",
  },
  {
    icon: TrendingUp,
    title: "Productivity",
    description:
      "Understand your progress and discover patterns that help you improve.",
  },
];

const testimonials = [
  {
    name: "Mia Chen",
    role: "University Student",
    text: "DayAI helped me turn a messy list of tasks into a clear plan for my entire week.",
    initials: "MC",
  },
  {
    name: "Alex Morgan",
    role: "Product Designer",
    text: "It feels like having a personal assistant that actually understands what I am trying to accomplish.",
    initials: "AM",
  },
  {
    name: "Sofia Lee",
    role: "Developer",
    text: "The AI planning workflow is incredibly simple. I spend less time organizing and more time doing.",
    initials: "SL",
  },
];

/* =========================================================
   COMPONENTS
========================================================= */

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="mx-auto max-w-3xl text-center"
    >
      <div className="mb-4 inline-flex items-center  gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 dark:border-violet-900/60 dark:bg-violet-950/40 dark:text-violet-300">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
      aria-label="Toggle light and dark mode"
    >
      <Sun className="hidden dark:block" size={20} />
      <Moon className="block dark:hidden" size={20} />
    </button>
  );
}
    <ThemeToggle/> 
/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/60 bg-white/75 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/75">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}

        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/20">
            <Sparkles className="h-5 w-5" />
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Day<span className="text-violet-600">AI</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">
          {["Features", "How it works", "AI Assistant", "Pricing"].map(
            (item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                whileHover={{ y: -1 }}
                className="text-sm font-medium text-slate-600 transition hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
              >
                {item}
              </motion.a>
            ),
          )}
        </nav>

        {/* Actions */}

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
     {/* register */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 dark:bg-white dark:text-slate-900"
          >
            <Link href='/register'>Get started</Link>
          </motion.div>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden dark:border-slate-800 dark:bg-slate-950"
        >
          <div className="flex flex-col gap-4">
            {["Features", "How it works", "AI Assistant", "Pricing"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                  className="text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ),
            )}

            <div className="flex items-center justify-between pt-3">
              

              <motion.a
                whileTap={{ scale: 0.96 }}
                href="#"
                className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Get started
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

/* =========================================================
   HERO AI WINDOW
========================================================= */

function AIWorkspace() {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.35 }}
      className="relative"
    >
      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-8 rounded-[40px] bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-cyan-400/20 blur-3xl"
      />

      {/* Window */}

      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl shadow-violet-500/10 dark:border-slate-700 dark:bg-[#111827]"
      >
        {/* Window header */}

        <div
        
         className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">
              <Sparkles className="h-4 w-4"  />
            </div>

            <div>
              <p  className="text-sm font-semibold">DayAI Assistant</p>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-xs text-slate-500">Online</span>
              </div>
            </div>
          </div>

          <Command className="h-4 w-4 text-slate-400" />
        </div>

        {/* Chat */}

        <div className="space-y-5 p-5">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="ml-auto max-w-[75%] rounded-2xl rounded-tr-md bg-violet-600 px-4 py-3 text-sm leading-6 text-white"
          >
            Help me plan my day. I have 3 hours to study and a project to
            finish.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="max-w-[85%] rounded-2xl rounded-tl-md bg-slate-100 px-4 py-4 text-sm leading-6 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            <div className="mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
              <Sparkles className="h-4 w-4 text-violet-500" />
              Here&apos;s your plan
            </div>

            <div className="space-y-2">
              {[
                ["09:00", "Deep work", "90 min"],
                ["11:00", "Study session", "60 min"],
                ["14:00", "Project work", "60 min"],
              ].map(([time, title, duration], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.45 + index * 0.15 }}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="text-xs font-semibold text-violet-600">
                    {time}
                  </div>

                  <div className="flex-1">
                    <p className="font-medium text-slate-800 dark:text-slate-200">
                      {title}
                    </p>
                    <p className="text-xs text-slate-400">{duration}</p>
                  </div>

                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Input */}

        <div className="border-t border-slate-200 p-4 dark:border-slate-800">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
            <span className="flex-1 text-sm text-slate-400">
              Ask DayAI anything...
            </span>

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[5%] top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
        />

        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.08]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        {/* Left */}

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-medium text-violet-700 shadow-sm backdrop-blur dark:border-violet-900/60 dark:bg-slate-900/70 dark:text-violet-300"
          >
            <Sparkles className="h-4 w-4" />
            Your AI-powered everyday assistant
            <ChevronRight className="h-4 w-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl text-5xl font-bold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white"
          >
            Make every day
            <span  id="bannernew" className="block bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              smarter with AI.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-400"
          >
            DayAI brings your tasks, goals, learning and everyday decisions
            together in one intelligent workspace designed around you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="#get-started"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 20px 40px rgba(124,58,237,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 font-semibold text-white"
            >
              Start for free
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            >
              <Play className="h-4 w-4 fill-current" />
              See how it works
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400"
          >
            {["Free to start", "No credit card", "AI-powered"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right */}

        <AIWorkspace />
      </div>
    </section>
  );
}

/* =========================================================
   INTRO
========================================================= */

function Intro() {
  const items = [
    {
      icon: Brain,
      number: "01",
      title: "Think",
      description:
        "Ask DayAI anything and get clear, useful answers instantly.",
    },
    {
      icon: CalendarDays,
      number: "02",
      title: "Plan",
      description:
        "Turn your ideas and goals into a realistic plan for your day.",
    },
    {
      icon: Zap,
      number: "03",
      title: "Do",
      description:
        "Stay focused and turn your plan into meaningful progress.",
    },
  ];

  return (
    <section className="border-y border-slate-200/70 bg-slate-50/70 py-24 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="One intelligent workspace"
          title="One AI. Everything you need."
          description="Stop switching between dozens of apps. DayAI helps you think, organize and get things done from one simple place."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div
              key={item.number}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-violet-500/10 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="absolute right-6 top-5 text-6xl font-bold text-slate-100 dark:text-slate-900">
                {item.number}
              </div>

              <div className="relative">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES
========================================================= */

function Features() {
  return (
    <section id="features" className="py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Everything in one place"
          title="Built for the way you actually live."
          description="DayAI combines powerful AI with practical productivity tools so you can spend less time organizing and more time moving forward."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              whileHover={{
                y: -7,
                scale: 1.01,
              }}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-violet-500/10 dark:border-slate-800 dark:bg-[#111827]"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.08 }}
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400"
              >
                <feature.icon className="h-5 w-5" />
              </motion.div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-violet-600 opacity-0 transition group-hover:opacity-100 dark:text-violet-400">
                Explore feature
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   AI SHOWCASE
========================================================= */

function AIShowcase() {
  return (
    <section
      id="ai-assistant"
      className="overflow-hidden bg-slate-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles className="h-4 w-4" />
              AI that understands context
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              More than a chatbot.
              <span className="block text-violet-400">
                Your personal AI workspace.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              DayAI can understand your goals, schedule and priorities to
              provide useful answers and turn conversations into action.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Turn conversations into tasks",
                "Create personalized schedules",
                "Break goals into actionable steps",
                "Get help whenever you need it",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  </div>

                  <span className="text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-full bg-violet-600/20 blur-3xl" />

            <div className="relative rounded-[30px] border border-slate-800 bg-[#111827] p-5 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="font-semibold">Today&apos;s focus</p>
                  <p className="text-sm text-slate-500">Tuesday, October 3</p>
                </div>

                <div className="rounded-xl bg-violet-500/10 px-3 py-2 text-xs font-semibold text-violet-400">
                  78% complete
                </div>
              </div>

              <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                 transition={{
            duration: 6,
            repeat: Infinity,
          }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "78%" }}
                  viewport={viewport}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                />
              </div>

              <div className="space-y-3">
                {[
                  ["Finish project proposal", "09:00", true],
                  ["Study Korean", "11:30", true],
                  ["Build DayAI landing page", "14:00", false],
                  ["Read 20 pages", "18:00", false],
                ].map(([task, time, done], index) => (
                  <motion.div
                    key={String(task)}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-4"
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                        done
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-violet-500/10 text-violet-400"
                      }`}
                    >
                      {done ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Target className="h-4 w-4" />
                      )}
                    </div>

                    <div className="flex-1">
                      <p
                        className={`text-sm font-medium ${
                          done
                            ? "text-slate-500 line-through"
                            : "text-slate-200"
                        }`}
                      >
                        {String(task)}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {String(time)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 text-violet-400" />
                  <div>
                    <p className="text-sm font-semibold text-violet-300">
                      DayAI suggestion
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      You have a free 30-minute window at 16:30. Would you like
                      to use it for your project?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HOW IT WORKS
========================================================= */

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Tell DayAI",
      text: "Describe what you want to accomplish in natural language.",
    },
    {
      number: "02",
      icon: Brain,
      title: "DayAI understands",
      text: "AI analyzes your request and turns it into something useful.",
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Get things done",
      text: "Follow your personalized plan and keep moving forward.",
    },
  ];

  return (
    <section id="how-it-works" className="py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Simple by design"
          title="From idea to action in seconds."
          description="No complicated setup. No productivity system to learn. Just tell DayAI what you need."
        />

        <motion.div
         transition={{
            duration: 6,
            repeat: Infinity,
          }}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative mt-20 grid gap-10 md:grid-cols-3"
        >
          <div className="absolute left-[18%] right-[18%] top-14 hidden h-px bg-gradient-to-r from-violet-300 via-indigo-300 to-blue-300 md:block dark:from-violet-900 dark:via-indigo-900 dark:to-blue-900" />

          {steps.map((step) => (
            <motion.div
             transition={{
            duration: 6,
            repeat: Infinity,
          }}
              key={step.number}
              variants={fadeUp}
              className="relative text-center"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-violet-200 bg-white shadow-xl shadow-violet-500/10 dark:border-slate-700 dark:bg-slate-950"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-white">
                  <step.icon className="h-7 w-7" />
                </div>

                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white dark:bg-white dark:text-slate-900">
                  {step.number}
                </span>
              </motion.div>

              <h3 className="mt-7 text-xl font-bold text-slate-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mx-auto mt-3 max-w-xs leading-7 text-slate-600 dark:text-slate-400">
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS
========================================================= */

function Stats() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/50">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
         transition={{
            duration: 6,
            repeat: Infinity,
          }}
        className="mx-auto grid max-w-5xl gap-8 px-5 sm:grid-cols-3"
      >
        {[
          ["10k+", "Tasks organized"],
          ["98%", "User satisfaction"],
          ["24/7", "AI assistance"],
        ].map(([number, label]) => (
          <motion.div
           transition={{
            duration: 6,
            repeat: Infinity,
          }}
            key={label}
            variants={fadeUp}
            className="text-center"
          >
            <p className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {number}
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* =========================================================
   TESTIMONIALS
========================================================= */

function Testimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Made for real life"
          title="A calmer way to get things done."
          description="People use DayAI to organize their days, learn new things and turn ideas into action."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
             transition={{
            duration: 6,
            repeat: Infinity,
          }}
              key={testimonial.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#111827]"
            >
              <div className="flex gap-1 text-violet-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>★</span>
                ))}
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
                “{testimonial.text}”
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-bold text-white">
                  {testimonial.initials}
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function CTA() {
  return (
    <section id="get-started" className="px-5 pb-28 lg:px-8">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 px-7 py-16 text-center text-white shadow-2xl shadow-violet-500/20 sm:px-12 lg:py-20"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"
        />

        <div className="relative">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <Sparkles className="h-7 w-7" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your day. Your goals.
            <span className="block text-violet-200">Your AI.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-violet-100">
            Start organizing your life with an AI assistant designed to help
            you think clearly, plan better and accomplish more.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-violet-700 shadow-xl"
          >
            Get started for free
            <ArrowRight className="h-4 w-4" />
          </motion.a>

          <p className="mt-4 text-sm text-violet-200">
            No credit card required
          </p>
        </div>
      </motion.div>
      <motion.button
      className="bg-violet-700 text-white rounded-full p-4"
       transition={{
            duration: 6,
            repeat: Infinity,
          }}
      >
        <Link href='#bannernew'><MoveUp/></Link>
      </motion.button>
    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white">
                <Sparkles className="h-5 w-5" />
              </div>

              <span className="text-xl font-bold">
                Day<span className="text-violet-600">AI</span>
              </span>
            </div>

            <p className="mt-5 max-w-sm leading-7 text-slate-500 dark:text-slate-400">
              An intelligent workspace for your everyday life. Think smarter.
              Plan better. Do more.
            </p>
          </div>

          {[
            {
              title: "Product",
              links: ["Features", "AI Assistant", "Planner", "Tasks"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Blog", "Contact"],
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "Security", "Cookies"],
            },
          ].map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-slate-900 dark:text-white">
                {group.title}
              </h4>

              <div className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-sm text-slate-500 transition hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-200 pt-7 text-sm text-slate-500 sm:flex-row dark:border-slate-800">
          <p>© 2026 DayAI. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <span>Made for better days.</span>
            <Users className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900 dark:bg-[#0B1020] dark:text-white">
      <Navbar />
      <Hero />
      <Intro />
      <Features />
      <AIShowcase />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}


"use client";

import { useState } from "react";
import {
  BookOpen,
  Brain,
  CalendarDays,
  CheckSquare,
  ChevronRight,
  FileText,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Moon,
  Plus,
  Settings,
  Sparkles,
  Sun,
  Target,
  X,
} from "lucide-react";
import UserProfile from "../components/UserProfile";
import SignOutButton from "../components/SignOutButton";

const tools = [
  {
    title: "AI Study Chat",
    description: "Ask questions and understand difficult topics.",
    icon: MessageCircle,
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Summarize Notes",
    description: "Turn long notes into clear summaries.",
    icon: FileText,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Flashcards",
    description: "Remember important concepts with flashcards.",
    icon: Brain,
    color: "bg-pink-100 text-pink-700",
  },
  {
    title: "Practice Quiz",
    description: "Test your knowledge with practice questions.",
    icon: CheckSquare,
    color: "bg-amber-100 text-amber-700",
  },
];

export default function DashboardPage() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review today's English vocabulary", done: false },
    { id: 2, title: "Study for 30 minutes", done: false },
    { id: 3, title: "Practice a short quiz", done: true },
  ]);

  const completed = tasks.filter((task) => task.done).length;

  return (
    <main
      className={`min-h-screen transition-colors ${
        dark ? "bg-slate-950 text-white" : "bg-[#f8f7fc] text-slate-900"
      }`}
    >
      <div className="flex min-h-screen">
        <aside
          className={`${
            menuOpen ? "flex" : "hidden"
          } fixed inset-y-0 left-0 z-20 w-64 flex-col border-r p-5 md:static md:flex ${
            dark
              ? "border-slate-800 bg-slate-900"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-violet-600 p-2 text-white">
                <Sparkles size={22} />
              </div>
              <span className="text-xl font-bold">DayAI</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="md:hidden"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Workspace
          </p>

          <nav className="space-y-2">
            {[
              { label: "Dashboard", icon: LayoutDashboard, active: true },
              { label: "AI Study Chat", icon: MessageCircle },
              { label: "My Notes", icon: BookOpen },
              { label: "Flashcards", icon: Brain },
              { label: "Quizzes", icon: CheckSquare },
              { label: "Study Planner", icon: CalendarDays },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  if (item.label !== "Dashboard") {
                    alert(`${item.label} page is coming next!`);
                  }
                  setMenuOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${
                  item.active
                    ? "bg-violet-600 text-white"
                    : dark
                    ? "text-slate-300 hover:bg-slate-800"
                    : "text-slate-600 hover:bg-violet-50"
                }`}
              >
                <item.icon size={19} />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto">
            <button
              onClick={() => alert("Settings page is coming next!")}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm"
            >
              <Settings size={19} />
              Settings
            </button>
            <div
              className={`mt-4 rounded-2xl p-4 ${
                dark ? "bg-slate-800" : "bg-violet-50"
              }`}
            >
              <Sparkles className="mb-2 text-violet-600" size={22} />
              <p className="font-semibold">Keep learning!</p>
              <p className="mt-1 text-xs text-slate-500">
                Small steps lead to big results.
              </p>
            </div>
          </div>
        </aside>

        <section className="min-w-0 flex-1 p-4 sm:p-6 lg:p-10">
          <header className="mb-8 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                className="rounded-xl border p-2 md:hidden"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={21} />
              </button>
              <div>
                <p className="text-sm text-slate-500">Your learning space</p>
                <h1 className="text-2xl font-bold sm:text-3xl">
                  My Dashboard
                </h1>
              </div>
            </div>

            <button
              onClick={() => setDark(!dark)}
              className={`rounded-xl border p-3 ${
                dark ? "border-slate-700" : "border-slate-200 bg-white"
              }`}
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </header>
         <div className="flex items-center gap-3">
  <UserProfile />
  <SignOutButton />
</div>
          <section className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-500 p-6 text-white sm:p-9">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm">
                <Sparkles size={15} />
                Your AI learning companion
              </div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Learn smarter.
                <br />
                Achieve more.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-violet-100 sm:text-base">
                Organize your studies, practice new skills, and make every
                learning session count.
              </p>
              <button
                onClick={() =>
                  alert("Your AI study assistant will be connected next!")
                }
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-violet-700 hover:bg-violet-50"
              >
                Start studying <ChevronRight size={18} />
              </button>
            </div>
          </section>

          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">Your progress</h2>
            <span className="text-sm text-slate-500">Demo statistics</span>
          </div>

          <div className="mb-9 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Study sessions",
                value: "12",
                icon: BookOpen,
                color: "text-violet-600 bg-violet-100",
              },
              {
                label: "Tasks completed",
                value: `${completed}/${tasks.length}`,
                icon: CheckSquare,
                color: "text-emerald-600 bg-emerald-100",
              },
              {
                label: "Learning goal",
                value: `${Math.round((completed / tasks.length) * 100)}%`,
                icon: Target,
                color: "text-blue-600 bg-blue-100",
              },
              {
                label: "Study streak",
                value: "3 days",
                icon: Sparkles,
                color: "text-amber-600 bg-amber-100",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-2xl border p-5 ${
                  dark
                    ? "border-slate-800 bg-slate-900"
                    : "border-slate-100 bg-white"
                }`}
              >
                <div
                  className={`mb-4 inline-flex rounded-xl p-3 ${stat.color}`}
                >
                  <stat.icon size={21} />
                </div>
                <p className="text-sm text-slate-500">{stat.label}</p>
                <p className="mt-1 text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mb-9">
            <h2 className="mb-4 text-lg font-bold">AI study tools</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {tools.map((tool) => (
                <button
                  key={tool.title}
                  onClick={() => alert(`${tool.title} will be built next!`)}
                  className={`group rounded-2xl border p-5 text-left transition hover:-translate-y-1 hover:border-violet-300 ${
                    dark
                      ? "border-slate-800 bg-slate-900"
                      : "border-slate-100 bg-white"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className={`rounded-xl p-3 ${tool.color}`}>
                      <tool.icon size={22} />
                    </span>
                    <ChevronRight
                      size={20}
                      className="text-slate-400 transition group-hover:translate-x-1"
                    />
                  </div>
                  <h3 className="font-bold">{tool.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {tool.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <section
            className={`rounded-2xl border p-5 sm:p-6 ${
              dark
                ? "border-slate-800 bg-slate-900"
                : "border-slate-100 bg-white"
            }`}
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold">Today's study plan</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Check off tasks as you complete them.
                </p>
              </div>
              <CalendarDays className="text-violet-600" size={22} />
            </div>

            <div className="space-y-3">
              {tasks.map((task) => (
                <label
                  key={task.id}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl p-3 ${
                    dark ? "bg-slate-800" : "bg-slate-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() =>
                      setTasks((current) =>
                        current.map((item) =>
                          item.id === task.id
                            ? { ...item, done: !item.done }
                            : item
                        )
                      )
                    }
                    className="h-4 w-4 accent-violet-600"
                  />
                  <span
                    className={`flex-1 text-sm ${
                      task.done ? "text-slate-400 line-through" : ""
                    }`}
                  >
                    {task.title}
                  </span>
                  {task.done && (
                    <CheckSquare className="text-emerald-500" size={18} />
                  )}
                </label>
              ))}
            </div>

            <button
              onClick={() =>
                setTasks((current) => [
                  ...current,
                  {
                    id: Math.max(0, ...current.map((task) => task.id)) + 1,
                    title: "New study task",
                    done: false,
                  },
                ])
              }
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-800"
            >
              <Plus size={17} /> Add a task
            </button>
          </section>

          <footer className="py-8 text-center text-xs text-slate-500">
            DayAI · Your journey, your pace.
          </footer>
        </section>
      </div>
    </main>
  );
}

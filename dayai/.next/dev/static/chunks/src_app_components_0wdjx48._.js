(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// import { Moon, Sun } from "lucide-react";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeToggle() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "0fde5745105439260643bdf0aa04fb0d9071550f51227680f35432661904b04e") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0fde5745105439260643bdf0aa04fb0d9071550f51227680f35432661904b04e";
    }
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    let t0;
    if ($[1] !== setTheme || $[2] !== theme) {
        t0 = ({
            "ThemeToggle[<button>.onClick]": ()=>setTheme(theme === "dark" ? "light" : "dark")
        })["ThemeToggle[<button>.onClick]"];
        $[1] = setTheme;
        $[2] = theme;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    let t1;
    if ($[4] !== theme) {
        t1 = theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "light"
        }, void 0, false, {
            fileName: "[project]/src/app/components/ThemeToggle.tsx",
            lineNumber: 31,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "dark"
        }, void 0, false, {
            fileName: "[project]/src/app/components/ThemeToggle.tsx",
            lineNumber: 31,
            columnNumber: 50
        }, this);
        $[4] = theme;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== t0 || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t0,
            className: "flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-[#161E2E] dark:text-slate-200 dark:hover:bg-slate-800",
            "aria-label": "Toggle dark mode",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/app/components/ThemeToggle.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[6] = t0;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_s(ThemeToggle, "MbA2o1CO/DKngiuIiOejDSplw10=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ThemeToggle.tsx [app-client] (ecmascript)");
// "use client";
// import { motion } from "motion/react";
// import Link from 'next/link'
// import React from 'react'
// function Hero() {
//   return (
//     <div className='h-full relative w-full flex dark:bg-[#0B1020] justify-center items-center'>
//             <div className='h-[20vh] w-[20vw] rounded-full bg-indigo-500/30 right-0 top-2 blur-3xl absolute'/>
//             <div className='h-[20vh] w-[20vw] rounded-full bg-indigo-500/30 left-0 bottom-2 blur-3xl absolute'/>
//       <div className='h-full w-[90vw]'>
//         <div className='flex gap-y-9  h-full w-full flex-col justify-center items-center'>
//             <div className='h-[50vh] w-[30vw] rounded-full bg-indigo-500/30 blur-3xl absolute left-96 top-40'/>
//            <motion.h1
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{
//     duration: 0.8,
//     ease: "easeOut",
//   }}
//   className="text-5xl z-50 font-bold tracking-tight text-gray-900 dark:text-white md:text-7xl"
// >
//   Make every day
//   <span className="block bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
//     smarter with AI.
//   </span>
// </motion.h1>
//           <p className='w-[40vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
//              omnis quod! Porro debitis beatae tempore.
//               In quos veniam non quis debitis hic. Praesentium
//                ipsa adipisci corporis
//                 consectetur est quibusdam earum?
//                 Lorem ipsum, dolor sit amet consectetur
//                  adipisicing elit. Tempora placeat earum,
//                   sequi officia autem porro voluptate, odio,
//                    inventore ratione necessitatibus alias ducimus
//                     mollitia aperiam id dolore omnis molestias
//                      dignissimos atque.
//                 </p>
//                 <div className='flex gap-x-4'>
//                 <button className='py-3 px-10 rounded-full z-50 bg-indigo-500 text-white hover:cursor-pointer'><Link href='/register'>Get started for free</Link></button>
//                 <button className='py-3 px-10 rounded-full z-50 text-indigo-500 bg-white border hover:cursor-pointer border-indigo-300'>Watch demo</button>
//                 </div>
//                 <div className='flex gap-x-4 text-mist-700'>
//                     <span>no credit card required</span>
//                     <span>free forever plan</span>
//                     <span>build for students</span>
//                 </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Hero
// import {
// ArrowRight,
// Brain,
// CalendarDays,
// Check,
// CheckCircle2,
// ChevronRight,
// Clock3,
// Command,
// ListTodo,
// MessageCircle,
// Moon,
// Play,
// Sparkles,
// Sun,
// Target,
// TrendingUp,
// Zap,
// } from "lucide-react";
"use client";
;
;
;
;
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};
const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12
        }
    }
};
function Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(52);
    if ($[0] !== "167bae32732524eb8cdedc6dc87727986a387785e45713ae9a8284c632f6d91f") {
        for(let $i = 0; $i < 52; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "167bae32732524eb8cdedc6dc87727986a387785e45713ae9a8284c632f6d91f";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lg shadow-purple-600/20"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "flex items-center gap-2",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl font-bold tracking-tight",
                    children: [
                        "Day",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-purple-600 dark:text-purple-400",
                            children: "AI"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 124,
                            columnNumber: 116
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 124,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex dark:text-slate-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#features",
                    className: "transition hover:text-purple-600",
                    children: "Features"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 131,
                    columnNumber: 116
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#how-it-works",
                    className: "transition hover:text-purple-600",
                    children: "How it works"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 131,
                    columnNumber: 193
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#assistant",
                    className: "transition hover:text-purple-600",
                    children: "AI Assistant"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 131,
                    columnNumber: 278
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#pricing",
                    className: "transition hover:text-purple-600",
                    children: "Pricing"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 131,
                    columnNumber: 360
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden text-sm font-medium text-slate-600 sm:block dark:text-slate-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/components/hero.tsx",
                lineNumber: 138,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
            whileHover: {
                scale: 1.04
            },
            whileTap: {
                scale: 0.97
            },
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 20
            },
            className: "rounded-xl bg-gray-600 px-3 py-3 font-semibold text-white shadow-lg shadow-violet-500/20",
            children: "Sign In"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#0B1020]/80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
                children: [
                    t1,
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            t3,
                            t4,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
                                whileHover: {
                                    scale: 1.04
                                },
                                whileTap: {
                                    scale: 0.97
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 20
                                },
                                className: "rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20",
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/hero.tsx",
                                lineNumber: 160,
                                columnNumber: 281
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/hero.tsx",
                        lineNumber: 160,
                        columnNumber: 232
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/hero.tsx",
                lineNumber: 160,
                columnNumber: 145
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 160,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 175,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-300",
            children: "Your intelligent everyday assistant"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 182,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t10;
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            opacity: 0,
            y: 30
        };
        t9 = {
            opacity: 1,
            y: 0
        };
        t10 = {
            duration: 0.8,
            ease: "easeOut"
        };
        $[9] = t10;
        $[10] = t8;
        $[11] = t9;
    } else {
        t10 = $[9];
        t8 = $[10];
        t9 = $[11];
    }
    let t11;
    let t12;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].h1, {
            initial: t8,
            animate: t9,
            transition: t10,
            className: "text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-7xl",
            children: [
                "Make every day",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent",
                    children: "smarter with AI."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 214,
                    columnNumber: 167
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-7 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400",
            children: "DayAI helps you plan your day, organize your tasks, learn new things, and get more done — all from one intelligent assistant."
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[12] = t11;
        $[13] = t12;
    } else {
        t11 = $[12];
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-9 flex flex-col gap-3 sm:flex-row",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "group flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 font-semibold text-white shadow-xl shadow-purple-600/20 transition hover:bg-purple-700",
                    children: "Start for free"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 224,
                    columnNumber: 65
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-[#161E2E] dark:text-slate-200 dark:hover:bg-slate-800",
                    children: "See how it works"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 224,
                    columnNumber: 277
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                t11,
                t12,
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2",
                            children: "Free to start"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 231,
                            columnNumber: 124
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2",
                            children: "No credit card"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 231,
                            columnNumber: 186
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 231,
                    columnNumber: 35
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    let t16;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            y: [
                0,
                -8,
                0
            ]
        };
        t16 = {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        };
        $[16] = t15;
        $[17] = t16;
    } else {
        t15 = $[16];
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -inset-5 rounded-[2rem] bg-purple-500/10 blur-2xl"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 262,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold",
                            children: "DayAI Assistant"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 262,
                            columnNumber: 201
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500 dark:text-slate-400",
                            children: "Online"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 262,
                            columnNumber: 257
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 262,
                    columnNumber: 196
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-700",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 269,
                            columnNumber: 155
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 269,
                            columnNumber: 231
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 269,
                            columnNumber: 307
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 269,
                    columnNumber: 125
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[80%] rounded-2xl rounded-br-md bg-purple-600 px-4 py-3 text-sm text-white",
                children: "Help me plan my day."
            }, void 0, false, {
                fileName: "[project]/src/app/components/hero.tsx",
                lineNumber: 276,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm leading-6 text-slate-700 dark:text-slate-300",
            children: "Good morning! 👋 Here's a balanced plan for your day."
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg bg-blue-100 p-2 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-[#161E2E]",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold",
                            children: "Study English"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 304,
                            columnNumber: 172
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-slate-500",
                            children: "09:00 — 10:00"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 304,
                            columnNumber: 226
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 304,
                    columnNumber: 148
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    let t25;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg bg-purple-100 p-2 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[26] = t25;
    } else {
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-[#161E2E]",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold",
                            children: "Work on DayAI"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 318,
                            columnNumber: 172
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-slate-500",
                            children: "10:30 — 12:00"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 318,
                            columnNumber: 226
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 318,
                    columnNumber: 148
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg bg-indigo-100 p-2 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[28] = t27;
    } else {
        t27 = $[28];
    }
    let t28;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t22,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                t24,
                                t26,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-[#161E2E]",
                                    children: [
                                        t27,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-semibold",
                                                    children: "Learn Korean"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/hero.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 274
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500",
                                                    children: "14:00 — 15:00"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/hero.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 327
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/hero.tsx",
                                            lineNumber: 332,
                                            columnNumber: 250
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/hero.tsx",
                                    lineNumber: 332,
                                    columnNumber: 113
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 332,
                            columnNumber: 76
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 332,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 332,
            columnNumber: 11
        }, this);
        $[29] = t28;
    } else {
        t28 = $[29];
    }
    let t29;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative overflow-hidden",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-2 lg:pt-28",
                    children: [
                        t14,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            animate: t15,
                            transition: t16,
                            className: "rounded-3xl relative border border-gray-200 bg-white p-6 shadow-2xl dark:border-gray-800 dark:bg-[#161E2E]",
                            children: [
                                t17,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-700 dark:bg-[#111827] dark:shadow-black/30",
                                    children: [
                                        t19,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6 p-6",
                                            children: [
                                                t20,
                                                t28,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-[#161E2E]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex-1 text-sm text-slate-400",
                                                            children: "Ask DayAI anything..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/hero.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 691
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/hero.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 767
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/hero.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 559
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/hero.tsx",
                                            lineNumber: 339,
                                            columnNumber: 518
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/hero.tsx",
                                    lineNumber: 339,
                                    columnNumber: 334
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 339,
                            columnNumber: 167
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 339,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[30] = t29;
    } else {
        t29 = $[30];
    }
    let t30;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "border-y border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-[#0F172A]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-2xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold uppercase tracking-widest text-purple-600",
                                children: "One AI. Everything you need."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/hero.tsx",
                                lineNumber: 346,
                                columnNumber: 200
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-3 text-3xl font-bold tracking-tight sm:text-4xl",
                                children: "Your everyday life, organized."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/hero.tsx",
                                lineNumber: 346,
                                columnNumber: 311
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-slate-600 dark:text-slate-400",
                                children: "DayAI brings planning, learning, productivity and intelligent assistance together in one simple workspace."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/hero.tsx",
                                lineNumber: 346,
                                columnNumber: 413
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/hero.tsx",
                        lineNumber: 346,
                        columnNumber: 153
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 grid gap-6 md:grid-cols-3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/hero.tsx",
                        lineNumber: 346,
                        columnNumber: 584
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/hero.tsx",
                lineNumber: 346,
                columnNumber: 113
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[31] = t30;
    } else {
        t30 = $[31];
    }
    let t31;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold uppercase tracking-widest text-purple-400",
            children: "Your AI assistant"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[32] = t31;
    } else {
        t31 = $[32];
    }
    let t32;
    let t33;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl",
            children: [
                "Just tell DayAI",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-purple-400",
                    children: " what you need."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 361,
                    columnNumber: 93
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-6 max-w-xl text-lg leading-8 text-slate-400",
            children: "You don't need to learn complicated tools. Simply tell DayAI what you want to accomplish and let your assistant help you organize the next step."
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[33] = t32;
        $[34] = t33;
    } else {
        t32 = $[33];
        t33 = $[34];
    }
    let t34;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 371,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold",
                            children: "Personalized"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 371,
                            columnNumber: 159
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-slate-400",
                            children: "Get suggestions based on your goals and priorities."
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 371,
                            columnNumber: 206
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 371,
                    columnNumber: 154
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[35] = t34;
    } else {
        t34 = $[35];
    }
    let t35;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t31,
                t32,
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 space-y-4",
                    children: [
                        t34,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/hero.tsx",
                                    lineNumber: 378,
                                    columnNumber: 96
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold",
                                            children: "Fast"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/hero.tsx",
                                            lineNumber: 378,
                                            columnNumber: 216
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-slate-400",
                                            children: "Get answers and plans without jumping between apps."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/hero.tsx",
                                            lineNumber: 378,
                                            columnNumber: 255
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/hero.tsx",
                                    lineNumber: 378,
                                    columnNumber: 211
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 378,
                            columnNumber: 68
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 378,
                    columnNumber: 31
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[36] = t35;
    } else {
        t35 = $[36];
    }
    let t36;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 385,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold",
                            children: "DayAI"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 385,
                            columnNumber: 168
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500",
                            children: "Your personal assistant"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 385,
                            columnNumber: 206
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 385,
                    columnNumber: 163
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, this);
        $[37] = t36;
    } else {
        t36 = $[37];
    }
    let t37;
    let t38;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-auto max-w-[75%] rounded-2xl rounded-br-md bg-purple-600 p-4 text-sm",
            children: "I have 4 hours today. Help me study English and work on my project."
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[85%] rounded-2xl rounded-bl-md bg-[#1E293B] p-4 text-sm leading-6 text-slate-300",
            children: "Absolutely! I'll divide your time between English and your project while keeping a short break in between."
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 394,
            columnNumber: 11
        }, this);
        $[38] = t37;
        $[39] = t38;
    } else {
        t37 = $[38];
        t38 = $[39];
    }
    let t39;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "assistant",
            className: "overflow-hidden bg-[#0B1020] py-24 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2",
                children: [
                    t35,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl bg-[#111827] p-6",
                            children: [
                                t36,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        t37,
                                        t38,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-white/10 bg-[#161E2E] p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold",
                                                            children: "Today's plan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/hero.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 474
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-400",
                                                            children: "4 hours"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/hero.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 533
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/hero.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 418
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/hero.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 637
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/hero.tsx",
                                            lineNumber: 403,
                                            columnNumber: 349
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/hero.tsx",
                                    lineNumber: 403,
                                    columnNumber: 312
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 403,
                            columnNumber: 261
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/hero.tsx",
                        lineNumber: 403,
                        columnNumber: 178
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/hero.tsx",
                lineNumber: 403,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 403,
            columnNumber: 11
        }, this);
        $[40] = t39;
    } else {
        t39 = $[40];
    }
    let t40;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-2xl text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold uppercase tracking-widest text-purple-600",
                    children: "Simple by design"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 410,
                    columnNumber: 58
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-3 text-4xl font-bold",
                    children: "Three steps. Zero complexity."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 410,
                    columnNumber: 157
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, this);
        $[41] = t40;
    } else {
        t40 = $[41];
    }
    let t41;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "how-it-works",
            className: "border-b border-slate-200 bg-white py-24 dark:border-slate-800 dark:bg-[#0F172A]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-6",
                children: [
                    t40,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 grid gap-10 md:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                                number: "01",
                                title: "Tell DayAI",
                                text: "Tell your assistant what you want to accomplish."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/hero.tsx",
                                lineNumber: 417,
                                columnNumber: 226
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                                number: "02",
                                title: "DayAI understands",
                                text: "AI organizes your information and creates a personalized plan."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/hero.tsx",
                                lineNumber: 417,
                                columnNumber: 321
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                                number: "03",
                                title: "Get things done",
                                text: "Follow your plan, complete your tasks and track your progress."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/hero.tsx",
                                lineNumber: 417,
                                columnNumber: 437
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/hero.tsx",
                        lineNumber: 417,
                        columnNumber: 176
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/hero.tsx",
                lineNumber: 417,
                columnNumber: 131
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, this);
        $[42] = t41;
    } else {
        t41 = $[42];
    }
    let t42;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[43] = t42;
    } else {
        t42 = $[43];
    }
    let t43;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "pricing",
            className: "px-6 py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 px-8 py-16 text-center text-white shadow-2xl shadow-purple-600/20 sm:px-16",
                children: [
                    t42,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold tracking-tight sm:text-5xl",
                                children: "Your day. Your goals. Your AI."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/hero.tsx",
                                lineNumber: 431,
                                columnNumber: 298
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-5 max-w-2xl text-lg text-purple-100",
                                children: "Start building a smarter, more organized day with DayAI."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/hero.tsx",
                                lineNumber: 431,
                                columnNumber: 395
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-purple-700 shadow-xl transition hover:bg-purple-50",
                                children: "Start for free"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/hero.tsx",
                                lineNumber: 431,
                                columnNumber: 517
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm text-purple-200",
                                children: "No credit card required."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/hero.tsx",
                                lineNumber: 431,
                                columnNumber: 698
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/hero.tsx",
                        lineNumber: 431,
                        columnNumber: 272
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/hero.tsx",
                lineNumber: 431,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, this);
        $[44] = t43;
    } else {
        t43 = $[44];
    }
    let t44;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[45] = t44;
    } else {
        t44 = $[45];
    }
    let t45;
    let t46;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        t44,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl font-bold",
                            children: [
                                "Day",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-purple-600",
                                    children: "AI"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/hero.tsx",
                                    lineNumber: 446,
                                    columnNumber: 127
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 446,
                            columnNumber: 88
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 446,
                    columnNumber: 42
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-5 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400",
                    children: "Your intelligent everyday assistant for planning, learning, productivity and getting things done."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 446,
                    columnNumber: 183
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold",
            children: "Product"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[46] = t45;
        $[47] = t46;
    } else {
        t45 = $[46];
        t46 = $[47];
    }
    let t47;
    let t48;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t46,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 space-y-3 text-sm text-slate-500 dark:text-slate-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#features",
                            className: "block hover:text-purple-600",
                            children: "Features"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 457,
                            columnNumber: 96
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#assistant",
                            className: "block hover:text-purple-600",
                            children: "AI Assistant"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 457,
                            columnNumber: 168
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#how-it-works",
                            className: "block hover:text-purple-600",
                            children: "How it works"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 457,
                            columnNumber: 245
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#pricing",
                            className: "block hover:text-purple-600",
                            children: "Pricing"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 457,
                            columnNumber: 325
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 457,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold",
            children: "Company"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 458,
            columnNumber: 11
        }, this);
        $[48] = t47;
        $[49] = t48;
    } else {
        t47 = $[48];
        t48 = $[49];
    }
    let t49;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-4",
            children: [
                t45,
                t47,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t48,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 space-y-3 text-sm text-slate-500 dark:text-slate-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "block hover:text-purple-600",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/hero.tsx",
                                    lineNumber: 467,
                                    columnNumber: 179
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "block hover:text-purple-600",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/hero.tsx",
                                    lineNumber: 467,
                                    columnNumber: 240
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "block hover:text-purple-600",
                                    children: "Privacy"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/hero.tsx",
                                    lineNumber: 467,
                                    columnNumber: 303
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "block hover:text-purple-600",
                                    children: "Terms"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/hero.tsx",
                                    lineNumber: 467,
                                    columnNumber: 366
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 467,
                            columnNumber: 104
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 467,
                    columnNumber: 94
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 467,
            columnNumber: 11
        }, this);
        $[50] = t49;
    } else {
        t49 = $[50];
    }
    let t50;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B1020] dark:text-white",
            children: [
                t5,
                t29,
                t30,
                t39,
                t41,
                t43,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0B1020]",
                    children: [
                        t49,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-slate-200 px-6 py-6 dark:border-slate-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "© 2026 DayAI. All rights reserved."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/hero.tsx",
                                        lineNumber: 474,
                                        columnNumber: 413
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: "Built for smarter days."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/hero.tsx",
                                        lineNumber: 474,
                                        columnNumber: 454
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/hero.tsx",
                                lineNumber: 474,
                                columnNumber: 307
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hero.tsx",
                            lineNumber: 474,
                            columnNumber: 232
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hero.tsx",
                    lineNumber: 474,
                    columnNumber: 132
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 474,
            columnNumber: 11
        }, this);
        $[51] = t50;
    } else {
        t50 = $[51];
    }
    return t50;
}
_c = Home;
/* =========================================================
   COMPONENTS
========================================================= */ function SimpleCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "167bae32732524eb8cdedc6dc87727986a387785e45713ae9a8284c632f6d91f") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "167bae32732524eb8cdedc6dc87727986a387785e45713ae9a8284c632f6d91f";
    }
    const { icon, title, text } = t0;
    let t1;
    if ($[1] !== icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400",
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 501,
            columnNumber: 10
        }, this);
        $[1] = icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 509,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== text) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400",
            children: text
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 517,
            columnNumber: 10
        }, this);
        $[5] = text;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-[#111827] dark:hover:shadow-black/20",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 525,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
}
_c1 = SimpleCard;
function FeatureCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "167bae32732524eb8cdedc6dc87727986a387785e45713ae9a8284c632f6d91f") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "167bae32732524eb8cdedc6dc87727986a387785e45713ae9a8284c632f6d91f";
    }
    const { icon, title, text } = t0;
    let t1;
    if ($[1] !== icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white dark:bg-purple-500/10 dark:text-purple-400",
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 550,
            columnNumber: 10
        }, this);
        $[1] = icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mt-6 text-lg font-semibold",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 558,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== text) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400",
            children: text
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 566,
            columnNumber: 10
        }, this);
        $[5] = text;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 flex items-center gap-1 text-sm font-medium text-purple-600 opacity-0 transition group-hover:opacity-100",
            children: "Learn more"
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 574,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t1 || $[9] !== t2 || $[10] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5 dark:border-slate-800 dark:bg-[#111827] dark:hover:border-purple-500/30",
            children: [
                t1,
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 581,
            columnNumber: 10
        }, this);
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
}
_c2 = FeatureCard;
function PlanItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "167bae32732524eb8cdedc6dc87727986a387785e45713ae9a8284c632f6d91f") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "167bae32732524eb8cdedc6dc87727986a387785e45713ae9a8284c632f6d91f";
    }
    const { time, title, icon } = t0;
    let t1;
    if ($[1] !== time) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-12 text-xs text-slate-500",
            children: time
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 606,
            columnNumber: 10
        }, this);
        $[1] = time;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== icon) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400",
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 614,
            columnNumber: 10
        }, this);
        $[3] = icon;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-slate-300",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 622,
            columnNumber: 10
        }, this);
        $[5] = title;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 630,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
}
_c3 = PlanItem;
function Step(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "167bae32732524eb8cdedc6dc87727986a387785e45713ae9a8284c632f6d91f") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "167bae32732524eb8cdedc6dc87727986a387785e45713ae9a8284c632f6d91f";
    }
    const { number, title, text } = t0;
    let t1;
    if ($[1] !== number) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-lg font-bold text-purple-600 dark:bg-purple-500/10 dark:text-purple-400",
            children: number
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 655,
            columnNumber: 10
        }, this);
        $[1] = number;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mt-6 text-xl font-semibold",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 663,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== text) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400",
            children: text
        }, void 0, false, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 671,
            columnNumber: 10
        }, this);
        $[5] = text;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative text-center",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/hero.tsx",
            lineNumber: 679,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
}
_c4 = Step;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Home");
__turbopack_context__.k.register(_c1, "SimpleCard");
__turbopack_context__.k.register(_c2, "FeatureCard");
__turbopack_context__.k.register(_c3, "PlanItem");
__turbopack_context__.k.register(_c4, "Step");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_components_0wdjx48._.js.map
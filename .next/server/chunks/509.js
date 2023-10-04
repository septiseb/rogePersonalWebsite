exports.id = 509;
exports.ids = [509];
exports.modules = {

/***/ 3767:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 6863:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 6276:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8545));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2746));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 8545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppContext: () => (/* binding */ AppContext),
/* harmony export */   Providers: () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1072);
/* __next_internal_client_entry_do_not_use__ AppContext,Providers auto */ 



function usePrevious(value) {
    let ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref.current;
}
function ThemeWatcher() {
    let { resolvedTheme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .F)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let media = window.matchMedia("(prefers-color-scheme: dark)");
        function onMediaChange() {
            let systemTheme = media.matches ? "dark" : "light";
            if (resolvedTheme === systemTheme) {
                setTheme("system");
            }
        }
        onMediaChange();
        media.addEventListener("change", onMediaChange);
        return ()=>{
            media.removeEventListener("change", onMediaChange);
        };
    }, [
        resolvedTheme,
        setTheme
    ]);
    return null;
}
const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function Providers({ children }) {
    let pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    let previousPathname = usePrevious(pathname);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: {
            previousPathname
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_themes__WEBPACK_IMPORTED_MODULE_3__/* .ThemeProvider */ .f, {
            attribute: "class",
            disableTransitionOnChange: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeWatcher, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 6664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W2: () => (/* binding */ Container)
/* harmony export */ });
/* unused harmony exports ContainerOuter, ContainerInner */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(391);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const ContainerOuter = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function OuterContainer({ className, children, ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("sm:px-8", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto w-full max-w-7xl lg:px-8",
            children: children
        })
    });
});
const ContainerInner = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function InnerContainer({ className, children, ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("relative px-4 sm:px-8 lg:px-12", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto max-w-2xl lg:max-w-5xl",
            children: children
        })
    });
});
const Container = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Container({ children, ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContainerOuter, {
        ref: ref,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContainerInner, {
            children: children
        })
    });
});


/***/ }),

/***/ 2746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Header: () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(1072);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/popover/popover.js + 17 modules
var popover = __webpack_require__(3602);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 7 modules
var transition = __webpack_require__(8469);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(391);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(6664);
;// CONCATENATED MODULE: ./src/images/avatar.jpg
/* harmony default export */ const avatar = ({"src":"/_next/static/media/avatar.51a13c67.jpg","height":512,"width":512,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAfEAABBAICAwAAAAAAAAAAAAABAAIDBAUREkETIXH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAQADAQAAAAAAAAAAAAAAAAEAAjES/9oADAMBAAIRAxEAPwCNxmXozOtZCpk7EEbOdeIg+NnFoGy3rZ7Pv4iIngtslumT/9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/Header.jsx
/* __next_internal_client_entry_do_not_use__ Header auto */ 









function CloseIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function ChevronDownIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 8 6",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M1.75 1.75 4 4.25l2.25-2.5",
            fill: "none",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function SunIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061",
                fill: "none"
            })
        ]
    });
}
function MoonIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function MobileNavItem({ href, children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J.Button, {
            as: (link_default()),
            href: href,
            className: "block py-2",
            children: children
        })
    });
}
function MobileNavigation(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover */.J, {
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover */.J.Button, {
                className: "group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20",
                children: [
                    "Menu",
                    /*#__PURE__*/ jsx_runtime_.jsx(ChevronDownIcon, {
                        className: "ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(transition/* Transition */.u.Root, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                        as: react_.Fragment,
                        enter: "duration-150 ease-out",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "duration-150 ease-in",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J.Overlay, {
                            className: "fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                        as: react_.Fragment,
                        enter: "duration-150 ease-out",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "duration-150 ease-in",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover */.J.Panel, {
                            focus: true,
                            className: "fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-row-reverse items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J.Button, {
                                            "aria-label": "Close menu",
                                            className: "-m-1 p-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(CloseIcon, {
                                                className: "h-6 w-6 text-zinc-500 dark:text-zinc-400"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-sm font-medium text-zinc-600 dark:text-zinc-400",
                                            children: "Navigation"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                    className: "mt-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(MobileNavItem, {
                                                href: "/about",
                                                children: "About"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MobileNavItem, {
                                                href: "/articles",
                                                children: "Articles"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MobileNavItem, {
                                                href: "/projects",
                                                children: "Projects"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MobileNavItem, {
                                                href: "/speaking",
                                                children: "Speaking"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MobileNavItem, {
                                                href: "/uses",
                                                children: "Uses"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function NavItem({ href, children }) {
    let isActive = (0,navigation.usePathname)() === href;
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: href,
            className: clsx_default()("relative block px-3 py-2 transition", isActive ? "text-teal-500 dark:text-teal-400" : "hover:text-teal-500 dark:hover:text-teal-400"),
            children: [
                children,
                isActive && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
                })
            ]
        })
    });
}
function DesktopNavigation(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                    href: "/about",
                    children: "About"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                    href: "/articles",
                    children: "Articles"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                    href: "/projects",
                    children: "Projects"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                    href: "/speaking",
                    children: "Speaking"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                    href: "/uses",
                    children: "Uses"
                })
            ]
        })
    });
}
function ThemeToggle() {
    let { resolvedTheme, setTheme } = (0,dist/* useTheme */.F)();
    let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
    let [mounted, setMounted] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        "aria-label": mounted ? `Switch to ${otherTheme} theme` : "Toggle theme",
        className: "group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20",
        onClick: ()=>setTheme(otherTheme),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SunIcon, {
                className: "h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MoonIcon, {
                className: "hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
            })
        ]
    });
}
function clamp(number, a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    return Math.min(Math.max(number, min), max);
}
function AvatarContainer({ className, ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: clsx_default()(className, "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"),
        ...props
    });
}
function Avatar({ large = false, className, ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        "aria-label": "Home",
        className: clsx_default()(className, "pointer-events-auto"),
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: avatar,
            alt: "",
            sizes: large ? "4rem" : "2.25rem",
            className: clsx_default()("rounded-full bg-zinc-100 object-cover dark:bg-zinc-800", large ? "h-16 w-16" : "h-9 w-9"),
            priority: true
        })
    });
}
function Header() {
    let isHomePage = (0,navigation.usePathname)() === "/";
    let headerRef = (0,react_.useRef)(null);
    let avatarRef = (0,react_.useRef)(null);
    let isInitial = (0,react_.useRef)(true);
    (0,react_.useEffect)(()=>{
        let downDelay = avatarRef.current?.offsetTop ?? 0;
        let upDelay = 64;
        function setProperty(property, value) {
            document.documentElement.style.setProperty(property, value);
        }
        function removeProperty(property) {
            document.documentElement.style.removeProperty(property);
        }
        function updateHeaderStyles() {
            if (!headerRef.current) {
                return;
            }
            let { top, height } = headerRef.current.getBoundingClientRect();
            let scrollY = clamp(window.scrollY, 0, document.body.scrollHeight - window.innerHeight);
            if (isInitial.current) {
                setProperty("--header-position", "sticky");
            }
            setProperty("--content-offset", `${downDelay}px`);
            if (isInitial.current || scrollY < downDelay) {
                setProperty("--header-height", `${downDelay + height}px`);
                setProperty("--header-mb", `${-downDelay}px`);
            } else if (top + height < -upDelay) {
                let offset = Math.max(height, scrollY - upDelay);
                setProperty("--header-height", `${offset}px`);
                setProperty("--header-mb", `${height - offset}px`);
            } else if (top === 0) {
                setProperty("--header-height", `${scrollY + height}px`);
                setProperty("--header-mb", `${-scrollY}px`);
            }
            if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
                setProperty("--header-inner-position", "fixed");
                removeProperty("--header-top");
                removeProperty("--avatar-top");
            } else {
                removeProperty("--header-inner-position");
                setProperty("--header-top", "0px");
                setProperty("--avatar-top", "0px");
            }
        }
        function updateAvatarStyles() {
            if (!isHomePage) {
                return;
            }
            let fromScale = 1;
            let toScale = 36 / 64;
            let fromX = 0;
            let toX = 2 / 16;
            let scrollY = downDelay - window.scrollY;
            let scale = scrollY * (fromScale - toScale) / downDelay + toScale;
            scale = clamp(scale, fromScale, toScale);
            let x = scrollY * (fromX - toX) / downDelay + toX;
            x = clamp(x, fromX, toX);
            setProperty("--avatar-image-transform", `translate3d(${x}rem, 0, 0) scale(${scale})`);
            let borderScale = 1 / (toScale / scale);
            let borderX = (-toX + x) * borderScale;
            let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;
            setProperty("--avatar-border-transform", borderTransform);
            setProperty("--avatar-border-opacity", scale === toScale ? "1" : "0");
        }
        function updateStyles() {
            updateHeaderStyles();
            updateAvatarStyles();
            isInitial.current = false;
        }
        updateStyles();
        window.addEventListener("scroll", updateStyles, {
            passive: true
        });
        window.addEventListener("resize", updateStyles);
        return ()=>{
            window.removeEventListener("scroll", updateStyles);
            window.removeEventListener("resize", updateStyles);
        };
    }, [
        isHomePage
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "pointer-events-none relative z-50 flex flex-none flex-col",
                style: {
                    height: "var(--header-height)",
                    marginBottom: "var(--header-mb)"
                },
                children: [
                    isHomePage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                ref: avatarRef,
                                className: "order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W2, {
                                className: "top-0 order-last -mb-3 pt-3",
                                style: {
                                    position: "var(--header-position)"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "top-[var(--avatar-top,theme(spacing.3))] w-full",
                                    style: {
                                        position: "var(--header-inner-position)"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(AvatarContainer, {
                                                className: "absolute left-0 top-3 origin-left transition-opacity",
                                                style: {
                                                    opacity: "var(--avatar-border-opacity, 0)",
                                                    transform: "var(--avatar-border-transform)"
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
                                                large: true,
                                                className: "block h-16 w-16 origin-left",
                                                style: {
                                                    transform: "var(--avatar-image-transform)"
                                                }
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: headerRef,
                        className: "top-0 z-10 h-16 pt-6",
                        style: {
                            position: "var(--header-position)"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W2, {
                            className: "top-[var(--header-top,theme(spacing.6))] w-full",
                            style: {
                                position: "var(--header-inner-position)"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative flex gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-1",
                                        children: !isHomePage && /*#__PURE__*/ jsx_runtime_.jsx(AvatarContainer, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {})
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-1 justify-end md:justify-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(MobileNavigation, {
                                                className: "pointer-events-auto md:hidden"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(DesktopNavigation, {
                                                className: "pointer-events-auto hidden md:block"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex justify-end md:flex-1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "pointer-events-auto",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ThemeToggle, {})
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            isHomePage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex-none",
                style: {
                    height: "var(--content-offset)"
                }
            })
        ]
    });
}


/***/ }),

/***/ 4963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/app/providers.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/alejandraruizmeza/Documents/fluxsales/rogePersonalWebsite/src/app/providers.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["AppContext"];

const e1 = proxy["Providers"];

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(1392);
;// CONCATENATED MODULE: ./src/components/Footer.jsx



function NavLink({ href, children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        className: "transition hover:text-teal-500 dark:hover:text-teal-400",
        children: children
    });
}
function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "mt-32 flex-none",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* ContainerOuter */.Zb, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* ContainerInner */.le, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center justify-between gap-6 sm:flex-row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                        href: "/about",
                                        children: "About"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                        href: "/projects",
                                        children: "Projects"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                        href: "/speaking",
                                        children: "Speaking"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                        href: "/uses",
                                        children: "Uses"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-sm text-zinc-400 dark:text-zinc-500",
                                children: [
                                    "\xa9 ",
                                    new Date().getFullYear(),
                                    " Spencer Sharp. All rights reserved."
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Header.jsx

const Header_proxy = (0,module_proxy.createProxy)(String.raw`/Users/alejandraruizmeza/Documents/fluxsales/rogePersonalWebsite/src/components/Header.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Header_esModule, $$typeof: Header_$$typeof } = Header_proxy;
const Header_default_ = Header_proxy.default;

const Header_e0 = Header_proxy["Header"];

;// CONCATENATED MODULE: ./src/components/Layout.jsx



function Layout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed inset-0 flex justify-center sm:px-8",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex w-full max-w-7xl lg:px-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative flex w-full flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header_e0, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "flex-auto",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/styles/tailwind.css
var tailwind = __webpack_require__(6092);
;// CONCATENATED MODULE: ./src/app/layout.jsx




const metadata = {
    title: {
        template: "%s - Spencer Sharp",
        default: "Spencer Sharp - Software designer, founder, and amateur astronaut"
    },
    description: "I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: "h-full antialiased",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "flex h-full bg-zinc-50 dark:bg-black",
            children: /*#__PURE__*/ jsx_runtime_.jsx(e1, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex w-full",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                        children: children
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 9653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(732);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1392);



function NotFound() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
        className: "flex h-full items-center pt-16 sm:pt-32",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-base font-semibold text-zinc-400 dark:text-zinc-500",
                    children: "404"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mt-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                    children: "Page not found"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-4 text-base text-zinc-600 dark:text-zinc-400",
                    children: "Sorry, we couldn’t find the page you’re looking for."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                    href: "/",
                    variant: "secondary",
                    className: "mt-4",
                    children: "Go back home"
                })
            ]
        })
    });
}


/***/ }),

/***/ 732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7369);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const variantStyles = {
    primary: "bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70",
    secondary: "bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
};
function Button({ variant = "primary", className, ...props }) {
    className = clsx__WEBPACK_IMPORTED_MODULE_2___default()("inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none", variantStyles[variant], className);
    return typeof props.href === "undefined" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: className,
        ...props
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: className,
        ...props
    });
}


/***/ }),

/***/ 1392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W2: () => (/* binding */ Container),
/* harmony export */   Zb: () => (/* binding */ ContainerOuter),
/* harmony export */   le: () => (/* binding */ ContainerInner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7369);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const ContainerOuter = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function OuterContainer({ className, children, ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("sm:px-8", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto w-full max-w-7xl lg:px-8",
            children: children
        })
    });
});
const ContainerInner = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function InnerContainer({ className, children, ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("relative px-4 sm:px-8 lg:px-12", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto max-w-2xl lg:max-w-5xl",
            children: children
        })
    });
});
const Container = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Container({ children, ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContainerOuter, {
        ref: ref,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContainerInner, {
            children: children
        })
    });
});


/***/ }),

/***/ 9873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 6092:
/***/ (() => {



/***/ })

};
;
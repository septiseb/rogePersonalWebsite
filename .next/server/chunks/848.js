"use strict";
exports.id = 848;
exports.ids = [848];
exports.modules = {

/***/ 6848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ArticleLayout: () => (/* binding */ ArticleLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./src/app/providers.jsx
var providers = __webpack_require__(8545);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(6664);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(391);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
;// CONCATENATED MODULE: ./src/components/Prose.jsx


function Prose({ className, ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: clsx_default()(className, "prose dark:prose-invert"),
        ...props
    });
}

;// CONCATENATED MODULE: ./src/lib/formatDate.js
function formatDate(dateString) {
    return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    });
}

;// CONCATENATED MODULE: ./src/components/ArticleLayout.jsx
/* __next_internal_client_entry_do_not_use__ ArticleLayout auto */ 






function ArrowLeftIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function ArticleLayout({ article, children }) {
    let router = (0,navigation.useRouter)();
    let { previousPathname } = (0,react_.useContext)(providers.AppContext);
    return /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W2, {
        className: "mt-16 lg:mt-32",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "xl:relative",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mx-auto max-w-2xl",
                children: [
                    previousPathname && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        onClick: ()=>router.back(),
                        "aria-label": "Go back to articles",
                        className: "group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowLeftIcon, {
                            className: "h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                                        children: article.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("time", {
                                        dateTime: article.date,
                                        className: "order-first flex items-center text-base text-zinc-400 dark:text-zinc-500",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "ml-3",
                                                children: formatDate(article.date)
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Prose, {
                                className: "mt-8",
                                "data-mdx-content": true,
                                children: children
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ })

};
;
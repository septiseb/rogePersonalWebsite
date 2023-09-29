"use strict";
exports.id = 89;
exports.ids = [89];
exports.modules = {

/***/ 8089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArticlesIndex),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(158);
/* harmony import */ var _components_SimpleLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9173);
/* harmony import */ var _lib_articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1510);
/* harmony import */ var _lib_formatDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6297);





function Article({ article }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "md:grid md:grid-cols-4 md:items-baseline",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Z, {
                className: "md:col-span-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Z.Title, {
                        href: `/articles/${article.slug}`,
                        children: article.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Z.Eyebrow, {
                        as: "time",
                        dateTime: article.date,
                        className: "md:hidden",
                        decorate: true,
                        children: (0,_lib_formatDate__WEBPACK_IMPORTED_MODULE_4__/* .formatDate */ .p)(article.date)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Z.Description, {
                        children: article.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Z.Cta, {
                        children: "Read article"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Z.Eyebrow, {
                as: "time",
                dateTime: article.date,
                className: "mt-1 hidden md:block",
                children: (0,_lib_formatDate__WEBPACK_IMPORTED_MODULE_4__/* .formatDate */ .p)(article.date)
            })
        ]
    });
}
const metadata = {
    title: "Articles",
    description: "All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
};
async function ArticlesIndex() {
    let articles = await (0,_lib_articles__WEBPACK_IMPORTED_MODULE_3__/* .getAllArticles */ .z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SimpleLayout__WEBPACK_IMPORTED_MODULE_2__/* .SimpleLayout */ .X, {
        title: "Writing on software design, company building, and the aerospace industry.",
        intro: "All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex max-w-3xl flex-col space-y-16",
                children: articles.map((article)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Article, {
                        article: article
                    }, article.slug))
            })
        })
    });
}


/***/ })

};
;
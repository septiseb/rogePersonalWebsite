exports.id = 709;
exports.ids = [709];
exports.modules = {

/***/ 3347:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./crafting-a-design-system-for-a-multiplanetary-future/page.mdx": [
		3659,
		178,
		659
	],
	"./crafting-a-design-system-for-a-multiplanetary-future/planetaria-design-system.png": [
		7821,
		821
	],
	"./introducing-animaginary/page.mdx": [
		1125,
		125
	],
	"./page": [
		8089,
		521,
		89
	],
	"./page.jsx": [
		8089,
		521,
		89
	],
	"./rewriting-the-cosmos-kernel-in-rust/page.mdx": [
		5173,
		173
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 3347;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 1510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ getAllArticles)
/* harmony export */ });
/* harmony import */ var fast_glob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7161);
/* harmony import */ var fast_glob__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_glob__WEBPACK_IMPORTED_MODULE_0__);

async function importArticle(articleFilename) {
    let { article } = await __webpack_require__(3347)(`./${articleFilename}`);
    return {
        slug: articleFilename.replace(/(\/page)?\.mdx$/, ""),
        ...article
    };
}
async function getAllArticles() {
    let articleFilenames = await fast_glob__WEBPACK_IMPORTED_MODULE_0___default()("*/page.mdx", {
        cwd: "./src/app/articles"
    });
    let articles = await Promise.all(articleFilenames.map(importArticle));
    return articles.sort((a, z)=>+new Date(z.date) - +new Date(a.date));
}


/***/ }),

/***/ 6297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(dateString) {
    return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    });
}


/***/ }),

/***/ 621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/planetaria-design-system.d4cfce90.png","height":872,"width":1310,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAOVBMVEUbIzIyO00+RlpCKoxNLJwpIGolMEEHFR8tJ2wpHlc7LnRLNW8eGyR2YkdwQFVdL6BVdmQVGhkoVVqvKT3eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nAXBiQGAIAwEwQUSLlF5pP9imcEiItydBny/hOXzzrEPRu+l1sICZUoXF+gBDXxPIj4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ })

};
;
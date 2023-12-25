"use strict";
exports.__esModule = true;
var react_1 = require("react");
var theme_1 = require("../constants/theme");
var SearchForm = function () {
    var _a = react_1.useState(false), isDropdownOpen = _a[0], setIsDropdownOpen = _a[1];
    var toggleDropdown = function () {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (react_1["default"].createElement("form", null,
        react_1["default"].createElement("div", { className: "flex" },
            react_1["default"].createElement("label", { htmlFor: "search-dropdown", className: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" }, "Your Email"),
            react_1["default"].createElement("button", { id: "dropdown-button", "data-dropdown-toggle": "dropdown", className: "flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600", type: "button", onClick: toggleDropdown },
                "All categories",
                react_1["default"].createElement("svg", { className: "w-2.5 h-2.5 ms-2.5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 10 6" },
                    react_1["default"].createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m1 1 4 4 4-4" }))),
            react_1["default"].createElement("div", { className: "relative w-full" },
                react_1["default"].createElement("input", { type: "search", id: "search-dropdown", className: "block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500", placeholder: "Search Mockups, Logos, Design Templates...", required: true }),
                react_1["default"].createElement("button", { type: "submit", className: "absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white   rounded-e-lg border  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", style: { backgroundColor: theme_1["default"].PRIMARY } },
                    react_1["default"].createElement("svg", { className: "w-4 h-4", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20" },
                        react_1["default"].createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" })),
                    react_1["default"].createElement("span", { className: "sr-only" }, "Search")))),
        react_1["default"].createElement("div", { id: "dropdown", className: "z-10 " + (isDropdownOpen ? '' : 'hidden') + " bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" },
            react_1["default"].createElement("ul", { className: "py-2 text-sm text-gray-700 dark:text-gray-200", "aria-labelledby": "dropdown-button" },
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("button", { type: "button", className: "inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" }, "Mockups")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("button", { type: "button", className: "inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" }, "Templates")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("button", { type: "button", className: "inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" }, "Design")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("button", { type: "button", className: "inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" }, "Logos"))))));
};
exports["default"] = SearchForm;

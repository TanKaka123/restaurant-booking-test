"use strict";
exports.__esModule = true;
var icon_png_1 = require("../assets/icon.png");
var theme_1 = require("../constants/theme");
var Header = function () {
    return (React.createElement("header", null,
        React.createElement("nav", { className: "bg-white border-gray-200 px-4 lg:px-6 py-2.5  mb-10", style: { backgroundColor: theme_1["default"].PRIMARY } },
            React.createElement("div", { className: "flex flex-wrap justify-between items-center mx-auto max-w-screen-xl" },
                React.createElement("a", { href: "https://flowbite.com", className: "flex items-center" },
                    React.createElement("img", { src: icon_png_1["default"], className: "mr-3 h-4 sm:h-8 bg-white", alt: "Logo" })),
                React.createElement("div", { className: "flex items-center lg:order-2" },
                    React.createElement("a", { href: "/", className: "text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" }, "Login as Admin"),
                    React.createElement("button", { "data-collapse-toggle": "mobile-menu-2", type: "button", className: "inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600", "aria-controls": "mobile-menu-2", "aria-expanded": "false" },
                        React.createElement("span", { className: "sr-only" }, "Open main menu"),
                        React.createElement("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("path", { "fill-rule": "evenodd", d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z", "clip-rule": "evenodd" })),
                        React.createElement("svg", { className: "hidden w-6 h-6", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("path", { "fill-rule": "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule": "evenodd" })))),
                React.createElement("div", { className: "hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1", id: "mobile-menu-2" },
                    React.createElement("ul", { className: "flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0" },
                        React.createElement("li", null,
                            React.createElement("a", { href: "/", className: "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white", "aria-current": "page" }, "\u0102n u\u1ED1ng")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "/", className: "block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" }, "Nh\u00E0 h\u00E0ng uy t\u00EDn")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "/", className: "block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" }, "\u01AFu \u0111\u00E3i hot")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "/", className: "block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" }, "M\u1EDBi nh\u1EA5t")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "/", className: "block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" }, "Tin t\u1EE9c & Blog")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "/", className: "block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" }, "Video PasGo"))))))));
};
exports["default"] = Header;

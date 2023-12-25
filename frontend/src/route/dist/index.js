"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var pages_1 = require("../pages");
var MainRoute = function () {
    return (react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: react_1["default"].createElement(pages_1.ErrorPage, null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(pages_1.DetailRestaurant, null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/transaction-information", element: react_1["default"].createElement(pages_1.Transaction, null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/admin", element: react_1["default"].createElement(pages_1.Admin, null) })));
};
exports["default"] = MainRoute;

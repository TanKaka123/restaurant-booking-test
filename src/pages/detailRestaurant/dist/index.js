"use strict";
exports.__esModule = true;
var search_1 = require("../../features/search");
require("./index.css");
var style_1 = require("../../constants/style");
var carouselBody_1 = require("./carouselBody");
var contentBody1_1 = require("./contentBody1");
var contentBody2_1 = require("./contentBody2");
var contentBody3_1 = require("./contentBody3");
var DetailRestaurant = function () {
    return (React.createElement("div", null,
        React.createElement(search_1["default"], null),
        React.createElement("div", { className: "grid grid-cols-5 gap-2 " },
            React.createElement("div", { className: "col-start-2 col-end-4  " },
                React.createElement(carouselBody_1["default"], null)),
            React.createElement("div", { className: "col-start-4 col-end-5  grid grid-cols-2    h-56 sm:h-64 xl:h-80 2xl:h-96 gap-2 bg-slate-200" }),
            React.createElement("div", { className: "body ", style: { borderRadius: style_1.corner.corner_016, padding: style_1.spacing.U5 } },
                React.createElement(contentBody1_1["default"], null)),
            React.createElement("div", { className: "body", style: { padding: style_1.spacing.U7 } },
                React.createElement(contentBody2_1["default"], null)),
            React.createElement("div", { className: "body", style: { padding: style_1.spacing.U7 } },
                React.createElement(contentBody3_1["default"], null)),
            React.createElement("div", { className: "body", style: { padding: style_1.spacing.U7 } },
                React.createElement(ContentBody4, null)))));
};
exports["default"] = DetailRestaurant;

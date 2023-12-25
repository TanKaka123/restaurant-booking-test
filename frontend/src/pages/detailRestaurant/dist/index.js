"use strict";
exports.__esModule = true;
var search_1 = require("../../features/search");
require("./index.css");
var style_1 = require("../../constants/style");
var carouselBody_1 = require("./carouselBody");
var contentBody1_1 = require("./contentBody1");
var contentBody2_1 = require("./contentBody2");
var contentBody3_1 = require("./contentBody3");
var contentBody4_1 = require("./contentBody4");
var contentBody5_1 = require("./contentBody5");
var contentBody6_1 = require("./contentBody6");
var contentBodyOrder_1 = require("./contentBodyOrder");
var bannerList_1 = require("./bannerList");
var react_router_dom_1 = require("react-router-dom");
var DetailRestaurant = function () {
    var navigate = react_router_dom_1.useNavigate();
    return (React.createElement("div", null,
        React.createElement("div", { className: "grid grid-cols-5 gap-2 " },
            React.createElement("div", { className: "col-start-2 col-end-5 my-5" },
                React.createElement(search_1["default"], null)),
            React.createElement("div", { className: "col-start-2 col-end-4  " },
                React.createElement(carouselBody_1["default"], null)),
            React.createElement("div", { className: "col-start-4 col-end-5  grid grid-cols-2  gap-2 " },
                React.createElement(bannerList_1["default"], null)),
            React.createElement("div", { className: "body ", style: { borderRadius: style_1.corner.corner_08, padding: style_1.spacing.U5 } },
                React.createElement(contentBody1_1["default"], null)),
            React.createElement("div", { className: "body-order-container", style: { borderRadius: style_1.corner.corner_08, padding: style_1.spacing.U4 } },
                React.createElement(contentBodyOrder_1["default"], null)),
            React.createElement("div", { className: "body", style: { borderRadius: style_1.corner.corner_08, padding: style_1.spacing.U5 } },
                React.createElement(contentBody2_1["default"], null)),
            React.createElement("div", { className: "body", style: { padding: style_1.spacing.U5 } },
                React.createElement(contentBody3_1["default"], null)),
            React.createElement("div", { className: "body", style: { padding: style_1.spacing.U5 } },
                React.createElement(contentBody4_1["default"], null)),
            React.createElement("div", { className: "body", style: { padding: style_1.spacing.U5 } },
                React.createElement(contentBody5_1["default"], null)),
            React.createElement("div", { className: "body", style: { padding: style_1.spacing.U5 } },
                React.createElement(contentBody6_1["default"], null)))));
};
exports["default"] = DetailRestaurant;

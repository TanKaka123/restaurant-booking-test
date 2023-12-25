"use strict";
exports.__esModule = true;
var text_1 = require("../../components/text");
var style_1 = require("../../constants/style");
var formContact_1 = require("./formContact");
var components_1 = require("../../components");
var orderView_1 = require("./orderView");
var Transaction = function () {
    return (React.createElement("div", { className: "grid grid-cols-10   " },
        React.createElement("div", { className: "col-start-2 col-span-8 bg-white p-6 " },
            React.createElement("form", null,
                React.createElement(text_1["default"], { size: style_1.fontsize.XLARGE }, "th\u00F4ng tin giao d\u1ECBch"),
                React.createElement("div", { className: "grid grid-cols-10 gap-5" },
                    React.createElement("div", { className: "col-start-1 col-span-7" },
                        React.createElement(formContact_1["default"], null)),
                    React.createElement("div", { className: "col-span-3" },
                        React.createElement(orderView_1["default"], null))),
                React.createElement(components_1.Button, { content: "X\u00E1c nh\u1EADn giao d\u1ECBch", paddings: style_1.spacing.U2, round: style_1.corner.corner_04, isGray: true, type: "submit" })))));
};
exports["default"] = Transaction;

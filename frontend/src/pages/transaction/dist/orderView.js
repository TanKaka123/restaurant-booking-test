"use strict";
exports.__esModule = true;
var components_1 = require("../../components");
var style_1 = require("../../constants/style");
var OrderView = function () {
    return (React.createElement("div", { className: "border ", style: { borderRadius: style_1.corner.corner_08 } },
        React.createElement("div", { className: "flex justify-between border-solid border-0  border-b-2 ", style: { padding: style_1.spacing.U5 } },
            React.createElement(components_1.Text, { size: style_1.fontsize.LARGE }, "\u0110\u1EB7t ch\u1ED7"),
            React.createElement(components_1.Button, { content: "Ch\u1EC9nh s\u1EEDa", round: style_1.corner.corner_04, paddings: style_1.spacing.U })),
        React.createElement("div", { style: { padding: style_1.spacing.U5 }, className: "flex flex-col gap-5" },
            React.createElement("div", { className: "border-solid border-0  border-b-2  pb-5" },
                React.createElement(components_1.Text, { size: style_1.fontsize.MEDIUM }, "MK Kichen & Bar - B\u1EBFn V\u00E2n \u0110\u1ED3n")),
            React.createElement("div", { className: "border-solid border-0  border-b-2  pb-5" },
                React.createElement(components_1.Text, { size: style_1.fontsize.MEDIUM }, "1 ng\u01B0\u1EDDi l\u1EDBn, 0 tr\u1EBB em")),
            React.createElement("div", { className: "border-solid border-0  border-b-2  pb-5" },
                React.createElement(components_1.Text, { size: style_1.fontsize.MEDIUM }, "Ch\u1EE7 nh\u1EADt, ng\u00E0y 24/12/2023 08:00")))));
};
exports["default"] = OrderView;

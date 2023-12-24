"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var style_1 = require("../../constants/style");
var text_1 = require("../../components/text");
var io5_1 = require("react-icons/io5");
var ContentBody1 = function () {
    return (React.createElement("div", { className: "flex flex-col gap-5" },
        React.createElement(text_1["default"], { bold: true, size: style_1.fontsize.XLARGE }, "MK Kitchen & Bar - B\u1EBFn V\u00E2n \u0110\u1ED3n"),
        React.createElement(text_1["default"], { size: style_1.fontsize.SMALL },
            React.createElement(io5_1.IoLocationOutline, { className: "inline" }),
            " S\u1ED1 320 B\u1EBFn V\u00E2n \u0110\u1ED3n, P. 2, Q. 4"),
        React.createElement(text_1["default"], { size: style_1.fontsize.SMALL },
            "Lo\u1EA1i h\u00ECnh: ",
            React.createElement("span", { className: "text-red-600" }, "G\u1ECDi m\u00F3n \u00C1 - \u00C2u"),
            " | Kho\u1EA3ng gi\u00E1 : 300.000 - 500.000 \u0111/ng\u01B0\u1EDDi"),
        React.createElement(text_1["default"], { size: style_1.fontsize.SMALL }, "Th\u1EBB tag:"),
        React.createElement(text_1["default"], { size: style_1.fontsize.SMALL },
            React.createElement("span", { className: "text-blue-600 mr-5" }, "\u0110ang m\u1EDF c\u1EEDa: "),
            " 07:00 - 23:00"),
        React.createElement("ul", { className: "flex justify-around" },
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: "/" }, "\u01AFu \u0111\u00E3i ")),
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: "/" }, "Gi\u1EDBi thi\u1EC7u")),
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: "/" }, "B\u1EA3ng gi\u00E1")),
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: "/" }, "\u0110\u1ECBa ch\u1EC9")),
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: "/" }, "B\u00ECnh lu\u1EADn")))));
};
exports["default"] = ContentBody1;

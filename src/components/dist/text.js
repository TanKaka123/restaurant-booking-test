"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Text = function (_a) {
    var text = _a.text, children = _a.children, bold = _a.bold, underline = _a.underline, _b = _a.color, color = _b === void 0 ? "black" : _b, _c = _a.size, size = _c === void 0 ? "14px" : _c;
    var textStyle = {
        color: color,
        fontSize: size
    };
    if (bold)
        textStyle.fontWeight = "bold";
    if (underline)
        textStyle.textDecoration = "underline";
    var content = text !== undefined ? text : children;
    return react_1["default"].createElement("p", { style: textStyle }, content);
};
exports["default"] = Text;

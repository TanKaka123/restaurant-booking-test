"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Input = function (_a) {
    var placeholder = _a.placeholder, _b = _a.type, type = _b === void 0 ? "text" : _b, name = _a.name, label = _a.label, onAction = _a.onAction;
    return (react_1["default"].createElement("div", { className: "mb-4" },
        label && (react_1["default"].createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "username" }, label)),
        react_1["default"].createElement("input", { className: "shadow appearance-none border border-black border-solid rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", id: "username", type: type, name: name, onChange: onAction, placeholder: placeholder })));
};
exports["default"] = Input;

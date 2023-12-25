"use strict";
exports.__esModule = true;
var react_1 = require("react");
var flowbite_react_1 = require("flowbite-react");
var data_1 = require("../constants/data");
var Input = function (_a) {
    var placeholder = _a.placeholder, _b = _a.type, type = _b === void 0 ? "text" : _b, name = _a.name, options = _a.options, label = _a.label, onAction = _a.onAction, icon = _a.icon;
    if (type === "text")
        return (react_1["default"].createElement("div", { className: "mb-4" },
            label && (react_1["default"].createElement("label", { className: "block text-gray-700 text-sm font-medium mb-2", htmlFor: "username" }, label)),
            react_1["default"].createElement("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline", id: "username", type: type, name: name, onChange: onAction, placeholder: placeholder })));
    else if (type === "select") {
        return (react_1["default"].createElement("div", { className: "max-w-md  w-full" },
            react_1["default"].createElement("div", { className: "mb-2 block" },
                react_1["default"].createElement(flowbite_react_1.Label, { htmlFor: "countries", value: label })),
            react_1["default"].createElement(flowbite_react_1.Select, { id: "countries", required: true, style: { width: "100%" } }, options &&
                options.map(function (option, index) {
                    return react_1["default"].createElement("option", { key: index }, option);
                }))));
    }
    else if (type === "email") {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: "mb-2 block" },
                react_1["default"].createElement(flowbite_react_1.Label, { htmlFor: "email1", value: label })),
            react_1["default"].createElement(flowbite_react_1.TextInput, { id: "email1", type: "email", placeholder: placeholder ? placeholder : "", required: true })));
    }
    else if (type === "date") {
        return (react_1["default"].createElement("div", { className: "max-w-md" },
            react_1["default"].createElement("div", { className: "mb-2 block" },
                react_1["default"].createElement(flowbite_react_1.Label, { htmlFor: "label", value: label })),
            react_1["default"].createElement(flowbite_react_1.Datepicker, { id: "label" })));
    }
    else if (type === "hour") {
        return (react_1["default"].createElement("div", { className: "max-w-md" },
            react_1["default"].createElement("div", { className: "mb-2 block" },
                react_1["default"].createElement(flowbite_react_1.Label, { htmlFor: "countries", value: label })),
            react_1["default"].createElement(flowbite_react_1.Select, { id: "countries", required: true }, data_1.hours_count_array &&
                data_1.hours_count_array.map(function (option, index) {
                    return react_1["default"].createElement("option", { key: index }, option);
                }))));
    }
    else if (type === "textarea") {
        return (react_1["default"].createElement("div", { className: "max-w-md" },
            react_1["default"].createElement("div", { className: "mb-2 block" },
                react_1["default"].createElement(flowbite_react_1.Label, { htmlFor: "countries", value: label })),
            react_1["default"].createElement("textarea", { className: "resize-y rounded-md w-full", placeholder: placeholder })));
    }
    else {
        return react_1["default"].createElement(react_1["default"].Fragment, null);
    }
};
exports["default"] = Input;

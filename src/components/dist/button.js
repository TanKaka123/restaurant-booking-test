"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var theme_1 = require("../constants/theme");
var Button = function (_a) {
    var round = _a.round, width = _a.width, icon = _a.icon, content = _a.content, isOutlet = _a.isOutlet, isPrimary = _a.isPrimary, isSecondary = _a.isSecondary, isGray = _a.isGray, paddings = _a.paddings, bgColor = _a.bgColor, textColor = _a.textColor, onAction = _a.onAction;
    var buttonClasses = "font-bold text-white rounded border-solid border-2";
    var currentColor = isPrimary
        ? theme_1["default"].PRIMARY
        : isSecondary
            ? theme_1["default"].SECONDARY
            : isGray
                ? theme_1["default"].GRAY
                : theme_1["default"].PRIMARY;
    var typeButton = {
        color: isOutlet ? currentColor : "white",
        backgroundColor: isOutlet ? "transparent" : currentColor,
        borderColor: isOutlet ? currentColor : "transparent"
    };
    var borderRadiusCss = {
        borderRadius: round || "0"
    };
    if (width) {
        borderRadiusCss.width = width;
    }
    if (paddings) {
        borderRadiusCss.padding = paddings;
    }
    if (bgColor) {
        borderRadiusCss.backgroundColor = bgColor;
    }
    if (textColor) {
        borderRadiusCss.color = textColor;
    }
    return (react_1["default"].createElement("button", { onClick: onAction, className: buttonClasses + " ", style: __assign(__assign({}, typeButton), borderRadiusCss) },
        icon,
        content));
};
exports["default"] = Button;

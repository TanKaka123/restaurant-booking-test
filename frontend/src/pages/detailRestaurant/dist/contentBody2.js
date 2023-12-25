"use strict";
exports.__esModule = true;
var style_1 = require("../../constants/style");
var text_1 = require("../../components/text");
var Table = function () {
    return (React.createElement("table", { className: "w-full border-collapse border" },
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", { className: "border border-black " }, "S\u1EA3n ph\u1EA9m"),
                React.createElement("th", { className: "border border-black " }, "\u01AFu \u0111\u00E3i"),
                React.createElement("th", { className: "border border-black " }, "\u00C1p d\u1EE5ng"))),
        React.createElement("tbody", null,
            React.createElement("tr", null,
                React.createElement("td", { className: "border border-black text-center" }, "Menu \u0111\u1ED3 \u0103n"),
                React.createElement("td", { className: "border border-black text-center" },
                    React.createElement("span", { className: "text-red-600" }, " -10%")),
                React.createElement("td", { className: "border border-black text-center" }, "C\u1EA3 tu\u1EA7n")))));
};
var ContentBody2 = function () {
    return (React.createElement("div", { className: "flex flex-col gap-3" },
        React.createElement(text_1["default"], { bold: true, size: style_1.fontsize.LARGE, underline: true }, "Th\u00F4ng tin \u0111\u1EB7t ch\u1ED7 nh\u00E0 h\u00E0ng MK Kitchen & Bar - B\u1EBFn V\u00E2n \u0110\u1ED3n"),
        React.createElement(text_1["default"], { bold: true, size: style_1.fontsize.SMALL },
            "I. \u0110\u1EB7t ch\u1ED7 PasGo: T\u01B0 v\u1EA5n - Gi\u1EEF ch\u1ED7",
            " "),
        React.createElement(text_1["default"], null, "- Qu\u00FD kh\u00E1ch vui l\u00F2ng \u0111\u1EB7t ch\u1ED7 tr\u01B0\u1EDBc \u00EDt nh\u1EA5t 30 ph\u00FAt \u0111\u1EC3 \u0111\u01B0\u1EE3c ph\u1EE5c v\u1EE5 t\u1ED1t nh\u1EA5t"),
        React.createElement(text_1["default"], null, "- B\u00E0n \u0111\u1EB7t c\u1EE7a Qu\u00FD kh\u00E1ch \u0111\u01B0\u1EE3c gi\u1EEF t\u1ED1i \u0111a 60 ph\u00FAt"),
        React.createElement(text_1["default"], { bold: true, size: style_1.fontsize.SMALL }, "II. \u01AFu \u0111\u00E3i t\u1EB7ng k\u00E8m:"),
        React.createElement(text_1["default"], null,
            "*\u01AFu \u0111\u00E3i: ",
            React.createElement("span", { className: "text-red-600" }, "V\u1EDBi m\u1ECDi kh\u00E1ch h\u00E0ng"),
            " - \u00C1p d\u1EE5ng h\u1EBFt 31/12/2023"),
        React.createElement(text_1["default"], { bold: true, size: style_1.fontsize.SMALL }, "III. L\u01B0u \u00FD:"),
        React.createElement(text_1["default"], null,
            React.createElement("span", { className: "text-red-600" },
                "- Gi\u00E1 menu ch\u01B0a bao g\u1ED3m VAT. Nh\u00E0 h\u00E0ng lu\u00F4n thu 10% VAT",
                " ")),
        React.createElement(Table, null),
        React.createElement(text_1["default"], null,
            "- \u01AFu \u0111\u00E3i kh\u00F4ng \u00E1p d\u1EE5ng v\u00E0o c\u00E1c ng\u00E0y:",
            React.createElement("span", { className: "text-red-600" }, "Th\u00E1ng 1"),
            " (Ng\u00E0y 1),",
            React.createElement("span", { className: "text-red-600" }, "Th\u00E1ng 2"),
            " (Ng\u00E0y 14),",
            React.createElement("span", { className: "text-red-600" }, "Th\u00E1ng 3"),
            " (Ng\u00E0y 8),",
            React.createElement("span", { className: "text-red-600" }, "Th\u00E1ng 4"),
            " (Ng\u00E0y 30),",
            React.createElement("span", { className: "text-red-600 font-bold" }, "Th\u00E1ng 5"),
            " (Ng\u00E0y 1),",
            React.createElement("span", { className: "text-red-600 font-bold" }, "Th\u00E1ng 6"),
            " (Ng\u00E0y 1),",
            React.createElement("span", { className: "text-red-600" }, "Th\u00E1ng 9"),
            " (Ng\u00E0y 2),",
            React.createElement("span", { className: "text-red-600" }, "Th\u00E1ng 10"),
            " (Ng\u00E0y 20),",
            React.createElement("span", { className: "text-red-600" }, "Th\u00E1ng 11"),
            " (Ng\u00E0y 20),",
            React.createElement("span", { className: "text-red-600" }, "Th\u00E1ng 12"),
            " (Ng\u00E0y 24, 31) &",
            React.createElement("span", { className: "text-red-600" }, "10/3 \u00C2m l\u1ECBch.")),
        React.createElement(text_1["default"], null, "- Nh\u00E0 h\u00E0ng t\u00EDnh ph\u00ED khi mang \u0111\u1ED3 \u0103n, th\u1EE9c u\u1ED1ng t\u1EEB ngo\u00E0i v\u00E0o ")));
};
exports["default"] = ContentBody2;
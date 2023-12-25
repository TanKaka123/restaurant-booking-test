"use strict";
exports.__esModule = true;
var components_1 = require("../../components");
var style_1 = require("../../constants/style");
var FormContact = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "border", style: { borderRadius: style_1.corner.corner_08, padding: style_1.spacing.U5 } },
            React.createElement(components_1.Text, null, "Chi ti\u1EBFt li\u00EAn h\u1EC7"),
            React.createElement(components_1.Input, { label: "T\u00EAn li\u00EAn l\u1EA1c", placeholder: "Nh\u1EADp t\u00EAn li\u00EAn h\u1EC7" }),
            React.createElement("div", null,
                React.createElement(components_1.Input, { label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", placeholder: "Nh\u1EADp t\u00EAn li\u00EAn h\u1EC7" }),
                React.createElement(components_1.Input, { label: "Email", placeholder: "Nh\u1EADp email" }))),
        React.createElement(components_1.Input, { label: "Ghi ch\u00FA", placeholder: "Nh\u1EADp ghi ch\u00FA", type: "textarea" })));
};
exports["default"] = FormContact;

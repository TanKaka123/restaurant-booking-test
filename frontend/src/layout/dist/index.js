"use strict";
exports.__esModule = true;
exports.NO_BOTTOM_NAVIGATION_PAGES = void 0;
var react_1 = require("react");
var header_1 = require("./header");
var footer_1 = require("./footer");
var react_router_dom_1 = require("react-router-dom");
exports.NO_BOTTOM_NAVIGATION_PAGES = ["/admin"];
var LayoutWrapper = function (_a) {
    var content = _a.content;
    var location = react_router_dom_1.useLocation();
    // const isCurrentUser = useSelector(selectCurrentUser);
    var notBottomNav = react_1.useMemo(function () {
        return exports.NO_BOTTOM_NAVIGATION_PAGES.some(function (page) {
            return location.pathname.startsWith(page);
        });
    }, [location]); // && !isCurrentUser
    if (notBottomNav) {
        return react_1["default"].createElement(react_1["default"].Fragment, null, content);
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(header_1["default"], null),
        content,
        react_1["default"].createElement(footer_1["default"], null)));
};
exports["default"] = LayoutWrapper;

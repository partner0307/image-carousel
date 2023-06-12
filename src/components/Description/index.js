"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledDescriptionComponent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    text-align: center;\n    color: rgba(255, 255, 255, .8);\n    display: -webkit-box;\n    max-width: 50%;\n    -webkit-line-clamp: 4;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n"], ["\n    text-align: center;\n    color: rgba(255, 255, 255, .8);\n    display: -webkit-box;\n    max-width: 50%;\n    -webkit-line-clamp: 4;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n"])));
var DescriptionComponent = function (_a) {
    var description = _a.description;
    return (react_1.default.createElement(StyledDescriptionComponent, null, description));
};
exports.default = DescriptionComponent;
var templateObject_1;

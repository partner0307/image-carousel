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
var TitleComponent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: 28px;\n    font-weight: 600;\n    color: white;\n"], ["\n    font-size: 28px;\n    font-weight: 600;\n    color: white;\n"])));
var Title = function (_a) {
    var title = _a.title;
    return react_1.default.createElement(TitleComponent, null, title);
};
exports.default = Title;
var templateObject_1;

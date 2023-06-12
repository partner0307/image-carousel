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
var TagComponent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 0.5rem 0;\n    $ span {\n        margin-right: 0.5rem;\n        font-size: 1rem;\n        font-weight: 500;\n        color: rgba(255, 255, 255, 0.6);\n    }\n"], ["\n    padding: 0.5rem 0;\n    $ span {\n        margin-right: 0.5rem;\n        font-size: 1rem;\n        font-weight: 500;\n        color: rgba(255, 255, 255, 0.6);\n    }\n"])));
var Tags = function (_a) {
    var tags = _a.tags;
    return (react_1.default.createElement(TagComponent, null, tags.map(function (tag, index) { return (react_1.default.createElement("span", { key: "tag-".concat(tag, "-index") }, tag)); })));
};
exports.default = Tags;
var templateObject_1;

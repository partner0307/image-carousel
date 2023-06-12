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
var Tags_1 = __importDefault(require("../Tags"));
var Title_1 = __importDefault(require("../Title"));
var Description_1 = __importDefault(require("../Description"));
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 60%, transparent), url(", ");\n    width: 100%;\n    height: 400px;\n    display: flex;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: right;\n\n    & > div {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: start;\n        padding-left: 10px;\n    }\n"], ["\n    background-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 60%, transparent), url(", ");\n    width: 100%;\n    height: 400px;\n    display: flex;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: right;\n\n    & > div {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: start;\n        padding-left: 10px;\n    }\n"])), function (props) { return props.image; });
var Banner = function (_a) {
    var image = _a.image, children = _a.children;
    return (react_1.default.createElement(Container, { image: image },
        react_1.default.createElement("div", null, children)));
};
Banner.Title = Title_1.default;
Banner.Tags = Tags_1.default;
Banner.Description = Description_1.default;
exports.default = Banner;
var templateObject_1;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Banner_1 = __importDefault(require("../Banner"));
var BannerTile = function (props) {
    var title = props.title, image = props.image, tags = props.tags, description = props.description;
    return (react_1.default.createElement(Banner_1.default, { image: image },
        react_1.default.createElement(Banner_1.default.Title, null)));
};

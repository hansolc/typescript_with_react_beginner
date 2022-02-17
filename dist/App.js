"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const legacy_js_1 = require("./legacy.js");
function App({ name, age }) {
    const value = (0, legacy_js_1.getValue)();
    console.log(value.toFixed(0));
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, name),
        react_1.default.createElement("p", null, age)));
}
exports.default = App;

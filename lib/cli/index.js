"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Babel = exports.Webpack = exports.Common = void 0;
require("reflect-metadata");
const decorator_1 = require("./decorator");
const Container_1 = require("./Container");
require("./Command");
__exportStar(require("./constants"), exports);
__exportStar(require("./decorator"), exports);
__exportStar(require("./Container"), exports);
class Common {
    asversion(value, cmd) {
        console.log("output version", cmd.instance.version);
    }
    ashelp(value, cmd) {
        console.log("cli");
        console.log("");
        console.log(`  ${cmd.command} \<command\> -- description`);
        console.log("");
        cmd.options.forEach((option) => {
            console.log(`    --${option.name} -${option.alias} \<option\> -- ${option.description}`);
        });
        console.log("");
    }
}
__decorate([
    decorator_1.Option({ name: "version", alias: "v", description: "version" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], Common.prototype, "asversion", null);
__decorate([
    decorator_1.Option({ name: "help", alias: "h", description: "help" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], Common.prototype, "ashelp", null);
exports.Common = Common;
let Webpack = class Webpack extends Common {
    constructor() {
        super(...arguments);
        this.version = "1.1.1";
    }
};
Webpack = __decorate([
    decorator_1.Command("webpack")
], Webpack);
exports.Webpack = Webpack;
let Babel = class Babel extends Common {
    constructor() {
        super(...arguments);
        this.version = "2.1.1";
    }
};
Babel = __decorate([
    decorator_1.Command("babel")
], Babel);
exports.Babel = Babel;
Container_1.Container.run([Webpack, Babel]);
//# sourceMappingURL=index.js.map
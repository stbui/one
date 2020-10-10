"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Babel = exports.Webpack = exports.Common = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const decorator_1 = require("./decorator");
const Container_1 = require("./Container");
require("./Command");
tslib_1.__exportStar(require("./constants"), exports);
tslib_1.__exportStar(require("./decorator"), exports);
tslib_1.__exportStar(require("./Container"), exports);
//
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
tslib_1.__decorate([
    decorator_1.Option({ name: "version", alias: "v", description: "version" }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], Common.prototype, "asversion", null);
tslib_1.__decorate([
    decorator_1.Option({ name: "help", alias: "h", description: "help" }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], Common.prototype, "ashelp", null);
exports.Common = Common;
let Webpack = class Webpack extends Common {
    constructor() {
        super(...arguments);
        this.version = "1.1.1";
    }
    // @Option({ name: "version", alias: "v", description: "version" })
    // version(value) {
    //   console.log("output version", "v1.0.0");
    // }
    // @Option({ name: "help", alias: "h", description: "help" })
    // help(value, cmd) {
    //   console.log("cli");
    //   console.log("");
    //   console.log(`  ${cmd.command} \<command\> -- description`);
    //   console.log("");
    //   cmd.options.forEach((option) => {
    //     console.log(
    //       `    --${option.name} -${option.alias} \<option\> -- ${option.description}`
    //     );
    //   });
    //   console.log("");
    // }
    run() {
        console.log(`demo command run`);
    }
};
tslib_1.__decorate([
    decorator_1.Action(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Webpack.prototype, "run", null);
Webpack = tslib_1.__decorate([
    decorator_1.Command("webpack")
], Webpack);
exports.Webpack = Webpack;
let Babel = class Babel extends Common {
    constructor() {
        super(...arguments);
        this.version = "2.1.1";
    }
};
Babel = tslib_1.__decorate([
    decorator_1.Command("babel")
], Babel);
exports.Babel = Babel;
Container_1.Container.run([Webpack, Babel]);

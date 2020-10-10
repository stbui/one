import { __decorate, __metadata } from "tslib";
import "reflect-metadata";
import { Command, Option, Action } from "./decorator";
import { Container } from "./Container";
import "./Command";
export * from "./constants";
export * from "./decorator";
export * from "./Container";
//
export class Common {
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
    Option({ name: "version", alias: "v", description: "version" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], Common.prototype, "asversion", null);
__decorate([
    Option({ name: "help", alias: "h", description: "help" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], Common.prototype, "ashelp", null);
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
__decorate([
    Action(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Webpack.prototype, "run", null);
Webpack = __decorate([
    Command("webpack")
], Webpack);
export { Webpack };
let Babel = class Babel extends Common {
    constructor() {
        super(...arguments);
        this.version = "2.1.1";
    }
};
Babel = __decorate([
    Command("babel")
], Babel);
export { Babel };
Container.run([Webpack, Babel]);

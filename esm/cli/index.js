var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import "reflect-metadata";
import { Command, Option, Action } from "./decorator";
import { Container } from "./Container";
import "./Command";
export * from "./constants";
export * from "./decorator";
export * from "./Container";
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
//# sourceMappingURL=index.js.map
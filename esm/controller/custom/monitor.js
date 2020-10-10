var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Controller, Get, Proxy } from "../../core";
let CustomMonitor = class CustomMonitor {
    constructor() { }
    index(req, res) {
        return { message: "CustomMonitor" };
    }
};
__decorate([
    Get(),
    Proxy({
        target: "http://www.example.org",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CustomMonitor.prototype, "index", null);
CustomMonitor = __decorate([
    Controller("/custom/monitor"),
    __metadata("design:paramtypes", [])
], CustomMonitor);
export { CustomMonitor };
//# sourceMappingURL=monitor.js.map
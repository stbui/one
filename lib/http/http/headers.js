"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headers = void 0;
class headers {
    constructor(headers) {
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === "string") {
        }
        else {
        }
    }
    has() { }
    get(name) {
        return;
    }
    set(name, value) { }
    keys() { }
    append(name, value) { }
    delete(name, value) { }
}
exports.headers = headers;
//# sourceMappingURL=headers.js.map
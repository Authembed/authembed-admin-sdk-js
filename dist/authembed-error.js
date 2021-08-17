"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthembedError = void 0;
class AuthembedError extends Error {
    constructor(message, code, response) {
        super(message);
        Object.setPrototypeOf(this, AuthembedError.prototype);
        this.code = code;
        this.response = response;
    }
}
exports.AuthembedError = AuthembedError;
//# sourceMappingURL=authembed-error.js.map
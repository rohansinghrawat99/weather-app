"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_exception_1 = require("../root/http.exception");
const forbidden_exception_1 = require("../root/forbidden.exception");
class WrongPasswordException extends forbidden_exception_1.ForbiddenException {
    constructor() {
        super("Wrong Password", http_exception_1.ApiErrorCode.WRONG_PASSWORD);
    }
}
exports.WrongPasswordException = WrongPasswordException;
//# sourceMappingURL=wrong-password.exception.js.map
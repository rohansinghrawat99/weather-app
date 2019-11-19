"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unauthorized_exception_1 = require("./root/unauthorized.exception");
const http_exception_1 = require("./root/http.exception");
class InvalidJwtTokenException extends unauthorized_exception_1.UnauthorizedException {
    constructor() {
        super("Invalid Token", http_exception_1.ApiErrorCode.JWT_INVALID);
    }
}
exports.InvalidJwtTokenException = InvalidJwtTokenException;
//# sourceMappingURL=invalid-jwt-token.exception.js.map
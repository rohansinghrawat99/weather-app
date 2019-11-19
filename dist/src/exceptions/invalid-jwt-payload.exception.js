"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unauthorized_exception_1 = require("./root/unauthorized.exception");
const http_exception_1 = require("./root/http.exception");
class InvalidJwtPayloadException extends unauthorized_exception_1.UnauthorizedException {
    constructor() {
        super("Invalid JWT Payload", http_exception_1.ApiErrorCode.JWT_INCORRECT_PAYLOAD_TYPE);
    }
}
exports.InvalidJwtPayloadException = InvalidJwtPayloadException;
//# sourceMappingURL=invalid-jwt-payload.exception.js.map
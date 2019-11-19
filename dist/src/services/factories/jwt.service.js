"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_service_node_1 = require("@devslane/jwt-service-node");
const secrets_util_1 = require("../../util/secrets.util");
const logger_util_1 = __importDefault(require("../../util/logger.util"));
class JwtFactory {
    static getInstance() {
        logger_util_1.default.silly("[N-GD] JwtFactory init");
        return jwt_service_node_1.JwtService.create({
            jwtIssuer: secrets_util_1.APP_IDENTIFIER,
            jwtSecret: secrets_util_1.ENV_JWT_SECRET,
            expiryTimeMS: 30 * 24 * 60 * 60 * 1000 // 30 Days in ms
        });
    }
}
exports.jwtService = JwtFactory.getInstance();
//# sourceMappingURL=jwt.service.js.map
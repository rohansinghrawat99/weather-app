"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypt_service_node_1 = require("@devslane/crypt-service-node");
const secrets_util_1 = require("../../util/secrets.util");
const logger_util_1 = __importDefault(require("../../util/logger.util"));
class CryptFactory {
    static getInstance() {
        logger_util_1.default.silly("[N-GD] CryptFactory getInstance()");
        return crypt_service_node_1.CryptService.create({
            saltRounds: 10,
            crypt: {
                alg: crypt_service_node_1.CryptAlg.AES_256_CBC,
                key: secrets_util_1.ENV_CRYPT_KEY,
                iv: secrets_util_1.ENV_CRYPT_IV
            }
        });
    }
}
exports.cryptService = CryptFactory.getInstance();
//# sourceMappingURL=crypt.service.js.map
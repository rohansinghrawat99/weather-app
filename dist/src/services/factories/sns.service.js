"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_util_1 = __importDefault(require("../../util/logger.util"));
const sns_service_node_1 = require("@devslane/sns-service-node");
class SnsFactory {
    static getInstance() {
        logger_util_1.default.silly("[GD] SnsFactory getInstance()");
        return sns_service_node_1.SnsService.init();
    }
}
exports.snsService = SnsFactory.getInstance();
//# sourceMappingURL=sns.service.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_service_node_1 = require("@devslane/validator-service-node");
const logger_util_1 = __importDefault(require("../../util/logger.util"));
class ValidatorFactory {
    static getInstance() {
        logger_util_1.default.silly("[N-GD] ValidatorFactory getInstance()");
        this._instance = validator_service_node_1.ValidatorService.init({
            baseSchemaPath: "schema"
        });
        // Add Custom Keywords here...
        this._instance.registerKeywords([]);
        return this._instance;
    }
}
exports.validatorService = ValidatorFactory.getInstance();
//# sourceMappingURL=validator.service.js.map
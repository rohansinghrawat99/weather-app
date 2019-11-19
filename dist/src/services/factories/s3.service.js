"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const secrets_util_1 = require("../../util/secrets.util");
const logger_util_1 = __importDefault(require("../../util/logger.util"));
const s3_service_node_1 = require("@devslane/s3-service-node");
class S3Factory {
    static getInstance() {
        logger_util_1.default.silly("[N-GD] S3Factory getInstance()");
        return s3_service_node_1.S3Service.init({
            credentials: {
                key: secrets_util_1.ENV_S3_KEY,
                secret: secrets_util_1.ENV_S3_SECRET
            },
            buckets: {
                audio: {
                    key: secrets_util_1.ENV_S3_BUCKET_AUDIO,
                    region: secrets_util_1.ENV_S3_REGION
                },
                video: {
                    key: undefined,
                    region: undefined
                }
            },
            internalBucket: {
                key: secrets_util_1.ENV_S3_BUCKET,
                region: secrets_util_1.ENV_S3_REGION
            }
        });
    }
}
exports.s3Service = S3Factory.getInstance();
//# sourceMappingURL=s3.service.js.map
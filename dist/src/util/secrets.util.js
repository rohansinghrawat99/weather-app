"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
exports.ENVIRONMENT = process.env.APP_ENV;
const prod = exports.ENVIRONMENT === "production"; // Anything else is treated as "dev"
exports.APP_IDENTIFIER = process.env.APP_IDENTIFIER;
exports.ENV_APP_PORT_REST = process.env.APP_PORT_REST;
exports.ENV = process.env.APP_ENV;
exports.ENV_BASE_URL = process.env.BASE_URL;
exports.ENV_DASHBOARD_URL = process.env.DASHBOARD_URL;
exports.ENV_API_KEY = process.env.API_KEY;
exports.ENV_DOMAIN = process.env.DOMAIN;
exports.ENV_FROM_WHO = process.env.FROM_WHO;
exports.ENV_MYSQL_HOSTNAME = process.env.MYSQL_HOSTNAME;
exports.ENV_MYSQL_USER = process.env.MYSQL_USER;
exports.ENV_MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
exports.ENV_MYSQL_DB = process.env.MYSQL_DB;
exports.ENV_S3_KEY = process.env.S3_KEY;
exports.ENV_S3_SECRET = process.env.S3_SECRET;
exports.ENV_S3_BUCKET = process.env.S3_BUCKET;
exports.ENV_S3_REGION = process.env.S3_REGION;
exports.ENV_S3_BUCKET_AUDIO = process.env.S3_BUCKET_AUDIO;
exports.ENV_JWT_SECRET = process.env.JWT_SECRET;
exports.ENV_ERROR_WEBHOOK = process.env.ERROR_WEBHOOK;
exports.ENV_CRYPT_KEY = process.env.CRYPT_KEY;
exports.ENV_CRYPT_IV = process.env.CRYPT_IV;
exports.ENV_AWS_ACCESS_TOKEN = process.env.AWS_ACCESS_TOKEN;
//# sourceMappingURL=secrets.util.js.map
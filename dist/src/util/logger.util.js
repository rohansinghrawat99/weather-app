"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston = __importStar(require("winston"));
const secrets_util_1 = require("./secrets.util");
const app_root_path_1 = __importDefault(require("app-root-path"));
const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.File({
            format: winston.format.json(),
            level: "info",
            filename: `${app_root_path_1.default}/logs/info.log`,
        }),
        new winston.transports.File({
            format: winston.format.json(),
            level: "error",
            filename: `${app_root_path_1.default}/logs/error.log`,
        })
    ]
});
if (secrets_util_1.ENVIRONMENT !== "production") {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
        level: "silly"
    }));
}
// https://github.com/winstonjs/winston/issues/1427
exports.default = logger;
//# sourceMappingURL=logger.util.js.map
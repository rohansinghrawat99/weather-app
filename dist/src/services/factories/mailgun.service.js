"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_util_1 = __importDefault(require("../../util/logger.util"));
const secrets_util_1 = require("../../util/secrets.util");
const ts_mailgun_1 = require("ts-mailgun/ts-mailgun");
class MailgunService {
    constructor() {
        logger_util_1.default.silly("[N_GD] MailgunService");
        this.mailer = new ts_mailgun_1.NodeMailgun();
        this.mailer.apiKey = secrets_util_1.ENV_API_KEY; // Set your API key
        this.mailer.domain = secrets_util_1.ENV_DOMAIN; // Set the domain you registered earlier
        this.mailer.fromEmail = secrets_util_1.ENV_FROM_WHO; // Set your from email
        this.mailer.fromTitle = "Reset Password"; // Set the name you would like to send from
        this.mailer.init();
    }
    static getInstance() {
        return new MailgunService();
    }
    resetPassword(sentTo, subject, html) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.mailer.send(sentTo, subject, html);
        });
    }
}
exports.mailgunService = MailgunService.getInstance();
//# sourceMappingURL=mailgun.service.js.map
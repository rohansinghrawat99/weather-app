"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpException extends Error {
    constructor(message, errorCode, statusCode, meta, errors) {
        super(message);
        this.message = message;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.meta = meta;
        this.errors = errors;
    }
}
exports.HttpException = HttpException;
var ApiErrorCode;
(function (ApiErrorCode) {
    // User Related
    ApiErrorCode[ApiErrorCode["USER_NOT_FOUND"] = 101] = "USER_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["USER_ALREADY_EXISTS"] = 102] = "USER_ALREADY_EXISTS";
    ApiErrorCode[ApiErrorCode["USER_DEACTIVATED"] = 103] = "USER_DEACTIVATED";
    ApiErrorCode[ApiErrorCode["WRONG_PASSWORD"] = 104] = "WRONG_PASSWORD";
    ApiErrorCode[ApiErrorCode["CANNOT_DELETE_SELF"] = 105] = "CANNOT_DELETE_SELF";
    ApiErrorCode[ApiErrorCode["ANNOUNCEMENT_NOT_FOUND"] = 201] = "ANNOUNCEMENT_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["CLIENT_NOT_FOUND"] = 301] = "CLIENT_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["MARKET_NOT_FOUND"] = 401] = "MARKET_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["NO_ACCESS_ERROR"] = 501] = "NO_ACCESS_ERROR";
    ApiErrorCode[ApiErrorCode["LEAD_NOT_FOUND"] = 601] = "LEAD_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["LEAD_DATE"] = 602] = "LEAD_DATE";
    ApiErrorCode[ApiErrorCode["ROLE_NOT_FOUND"] = 701] = "ROLE_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["CANNOT_UPDATE_SELF_ROLE"] = 702] = "CANNOT_UPDATE_SELF_ROLE";
    ApiErrorCode[ApiErrorCode["CANNOT_CHANGE_SELF_ROLE"] = 703] = "CANNOT_CHANGE_SELF_ROLE";
    ApiErrorCode[ApiErrorCode["PROJECT_NOT_FOUND"] = 801] = "PROJECT_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["TEMPLATE_NOT_FOUND"] = 901] = "TEMPLATE_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["QUESTION_CATEGORY_NOT_FOUND"] = 1101] = "QUESTION_CATEGORY_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["MAILING_LIST_NOT_FOUND"] = 1001] = "MAILING_LIST_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["SAFETY_OBSERVATION_CATEGORY_NOT_FOUND"] = 1201] = "SAFETY_OBSERVATION_CATEGORY_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["SAFETY_OBSERVATION_ISSUE_NOT_FOUND"] = 1301] = "SAFETY_OBSERVATION_ISSUE_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["TROUBLE_TICKET_CATEGORY_NOT_FOUND"] = 901] = "TROUBLE_TICKET_CATEGORY_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["TROUBLE_TICKET_URGENCY_NOT_FOUND"] = 1001] = "TROUBLE_TICKET_URGENCY_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["SITE_MAP_NOT_FOUND"] = 1401] = "SITE_MAP_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["DISTRIBUTION_LIST_NOT_FOUND"] = 1501] = "DISTRIBUTION_LIST_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["COMPLIANCE_REQUEST_NOT_FOUND"] = 1501] = "COMPLIANCE_REQUEST_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["COMPLIANCE_REQUEST_ALREADY_INSPECTED"] = 1502] = "COMPLIANCE_REQUEST_ALREADY_INSPECTED";
    ApiErrorCode[ApiErrorCode["PROJECT_STOP_REQUEST_NOT_FOUND"] = 1501] = "PROJECT_STOP_REQUEST_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["PROJECT_STOP_REQUEST_ALREADY_ACCEPTED"] = 1502] = "PROJECT_STOP_REQUEST_ALREADY_ACCEPTED";
    ApiErrorCode[ApiErrorCode["PROJECT_STOP_REQUEST_ALREADY_REJECTED"] = 1503] = "PROJECT_STOP_REQUEST_ALREADY_REJECTED";
    ApiErrorCode[ApiErrorCode["WEEKLY_ALERT_NOT_FOUND"] = 1501] = "WEEKLY_ALERT_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["PROJECT_REQUEST_NOT_FOUND"] = 1801] = "PROJECT_REQUEST_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["INSPECTION_FREQUENCY_NOT_FOUND"] = 2401] = "INSPECTION_FREQUENCY_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["PROJECT_PHASE_NOT_FOUND"] = 2501] = "PROJECT_PHASE_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["SAFETY_TRADE_NOT_FOUND"] = 2601] = "SAFETY_TRADE_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["WEATHER_CONDITION_NOT_FOUND"] = 2701] = "WEATHER_CONDITION_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["SAFETY_INSPECTION_NOT_FOUND"] = 2801] = "SAFETY_INSPECTION_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["SITE_INSPECTION_NOT_FOUND"] = 2901] = "SITE_INSPECTION_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["RESPONSIVE_ACTION_ITEM_NOT_FOUND"] = 3001] = "RESPONSIVE_ACTION_ITEM_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["UPLOADED_FILE_NOT_FOUND"] = 3001] = "UPLOADED_FILE_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["ATTACHMENT_NOT_FOUND"] = 3002] = "ATTACHMENT_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["UPLOADED_REPORT_NOT_FOUND"] = 3003] = "UPLOADED_REPORT_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["UPLOADED_REPORT_ATTACHMENT_NOT_FOUND"] = 3004] = "UPLOADED_REPORT_ATTACHMENT_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["TROUBLE_TICKET_NOT_FOUND"] = 3005] = "TROUBLE_TICKET_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["TROUBLE_TICKET_ATTACHMENT_NOT_FOUND"] = 3006] = "TROUBLE_TICKET_ATTACHMENT_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["GENERAL_THROTTLING"] = 8101] = "GENERAL_THROTTLING";
    ApiErrorCode[ApiErrorCode["GENERAL_NOT_FOUND"] = 8102] = "GENERAL_NOT_FOUND";
    ApiErrorCode[ApiErrorCode["START_DATE_MUST_BE_AFTER_END_DATE"] = 8103] = "START_DATE_MUST_BE_AFTER_END_DATE";
    // JWT
    ApiErrorCode[ApiErrorCode["JWT_INVALID"] = 9101] = "JWT_INVALID";
    ApiErrorCode[ApiErrorCode["JWT_INCORRECT_PAYLOAD_TYPE"] = 9102] = "JWT_INCORRECT_PAYLOAD_TYPE";
    ApiErrorCode[ApiErrorCode["VALIDATION_ERROR"] = 9998] = "VALIDATION_ERROR";
    ApiErrorCode[ApiErrorCode["UNKNOWN"] = 9999] = "UNKNOWN"; // Reserved...
})(ApiErrorCode = exports.ApiErrorCode || (exports.ApiErrorCode = {}));
//# sourceMappingURL=http.exception.js.map
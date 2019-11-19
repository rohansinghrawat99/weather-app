"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_not_found_exception_1 = require("./model-not-found.exception");
const http_exception_1 = require("./http.exception");
class StartDateMustBeBeforeEndDateException extends model_not_found_exception_1.ModelNotFoundException {
    constructor() {
        super("Start Date must be before End Date", http_exception_1.ApiErrorCode.START_DATE_MUST_BE_AFTER_END_DATE);
    }
}
exports.StartDateMustBeBeforeEndDateException = StartDateMustBeBeforeEndDateException;
//# sourceMappingURL=start-date-must-be-before-end-date.exception.js.map
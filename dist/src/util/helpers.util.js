"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = __importDefault(require("uuid"));
const util_1 = require("util");
const cheerio = require("cheerio");
class Helpers {
    static generateRandomString(length = 8, options) {
        let text = options.start || "";
        const startLength = text.length;
        const remainingLength = length - text.length;
        if (remainingLength <= 0) {
            // Original String is already
            // greater than required length
            return text;
        }
        let dictionary = "";
        if (options.includeLowerCase) {
            dictionary += "abcdefghijklmnopqrstuvwxyz";
        }
        if (options.includeUpperCase) {
            dictionary += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (options.includeNumbers) {
            dictionary += "1234567890";
        }
        if (options.includeSpecialCharacters) {
            dictionary += "!@#$%^&*()";
        }
        for (let i = 1; i < length; i++) {
            text += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
        }
        return text;
    }
    static generateRandomNumber(max, min) {
        const effectiveMin = min || 0;
        const _window = max - min;
        if (_window <= 0) {
            throw "PARAMS_ERROR";
        }
        return min + Math.floor(Math.random() * _window);
    }
    static generateUUIDV4() {
        return uuid_1.default();
    }
    static sanitizeString(subject) {
        const asciiPart = subject.replace(/[^\x00-\x7F]/g, "");
        const withoutSpaces = asciiPart.replace(" ", "_");
        return withoutSpaces.toLowerCase();
    }
    static sleep(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    /**
     * Ideally, the parameter type any should be replaced by typeof T but the compiler (TS 2.4) can"t understand this syntax.
     * @param enumRef
     * @returns {T[]}
     */
    static iterateEnum(enumRef) {
        return Object.keys(enumRef).map(key => enumRef[key]);
    }
    static checkInEnum(enumRef, value) {
        return Object.keys(enumRef)
            .filter(k => isNaN(Number(k))) // Removing reverse mapping in numeric enums.
            .filter(k => enumRef[k] === value).length > 0;
    }
    static inflate(object, params) {
        return Object.assign(object, params);
    }
    static removeUndefinedKeys(object) {
        Object.keys(object).forEach(key => {
            if (util_1.isUndefined(object[key])) {
                delete object[key];
            }
        });
    }
    static replaceUndefinedWithNull(object) {
        if (util_1.isUndefined(object)) {
            return null;
        }
        return object;
    }
    static handleError(res, exception) {
        res.statusCode = exception.statusCode;
        res.json({
            code: exception.errorCode,
            message: exception.message,
            errors: exception.errors
        });
        return;
    }
}
exports.Helpers = Helpers;
//# sourceMappingURL=helpers.util.js.map
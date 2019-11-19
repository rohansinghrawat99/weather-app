export class HttpException extends Error {

  /**
   * Message in english that explains the error
   *
   * It should be directly addressed to user
   * as in most cases this will be displayed to user.
   */
  message: string;

  /**
   * App Specific error code that uniquely identifies an error
   *
   * e.g. => When Requesting a specific entity with a specific id,
   * If it is not found, there should be a unique id associated with it
   * and using which frontend should redirect user back to the previous page
   */
  errorCode: number;

  /**
   * Http status code
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
   */
  statusCode: number;

  /**
   * Any additional data associated with a specific error.
   *
   * e.g. => Login API might want to send
   * number of attempts left on incorrect password
   */
  meta?: any;

  /**
   * Validation errors thrown by AJV
   * send as it is being thrown by the library...
   */
  errors?: any;

  constructor(message: string, errorCode: ApiErrorCode, statusCode: number, meta?: any, errors?: any) {
    super(message);

    this.message    = message;
    this.errorCode  = errorCode;
    this.statusCode = statusCode;

    this.meta   = meta;
    this.errors = errors;
  }
}


export enum ApiErrorCode {

  // User Related
  USER_NOT_FOUND                        = 101,
  USER_ALREADY_EXISTS                   = 102,
  USER_DEACTIVATED                      = 103,
  WRONG_PASSWORD                        = 104,
  CANNOT_DELETE_SELF                    = 105,

  ANNOUNCEMENT_NOT_FOUND                = 201,

  CLIENT_NOT_FOUND                      = 301,

  MARKET_NOT_FOUND                      = 401,

  NO_ACCESS_ERROR                       = 501,

  LEAD_NOT_FOUND                        = 601,
  LEAD_DATE                             = 602,


  ROLE_NOT_FOUND                        = 701,
  CANNOT_UPDATE_SELF_ROLE               = 702,
  CANNOT_CHANGE_SELF_ROLE               = 703,

  PROJECT_NOT_FOUND                     = 801,
  TEMPLATE_NOT_FOUND                    = 901,
  QUESTION_CATEGORY_NOT_FOUND           = 1101,

  MAILING_LIST_NOT_FOUND                = 1001,

  SAFETY_OBSERVATION_CATEGORY_NOT_FOUND = 1201,

  SAFETY_OBSERVATION_ISSUE_NOT_FOUND    = 1301,
  TROUBLE_TICKET_CATEGORY_NOT_FOUND     = 901,

  TROUBLE_TICKET_URGENCY_NOT_FOUND      = 1001,

  SITE_MAP_NOT_FOUND                    = 1401,

  DISTRIBUTION_LIST_NOT_FOUND           = 1501,

  COMPLIANCE_REQUEST_NOT_FOUND          = 1501,
  COMPLIANCE_REQUEST_ALREADY_INSPECTED  = 1502,

  PROJECT_STOP_REQUEST_NOT_FOUND        = 1501,
  PROJECT_STOP_REQUEST_ALREADY_ACCEPTED = 1502,
  PROJECT_STOP_REQUEST_ALREADY_REJECTED = 1503,

  WEEKLY_ALERT_NOT_FOUND                = 1501,

  PROJECT_REQUEST_NOT_FOUND             = 1801,

  INSPECTION_FREQUENCY_NOT_FOUND        = 2401,

  PROJECT_PHASE_NOT_FOUND               = 2501,

  SAFETY_TRADE_NOT_FOUND                = 2601,

  WEATHER_CONDITION_NOT_FOUND           = 2701,
  SAFETY_INSPECTION_NOT_FOUND           = 2801,
  SITE_INSPECTION_NOT_FOUND             = 2901,
  RESPONSIVE_ACTION_ITEM_NOT_FOUND      = 3001,

  UPLOADED_FILE_NOT_FOUND               = 3001,
  ATTACHMENT_NOT_FOUND                  = 3002,
  UPLOADED_REPORT_NOT_FOUND             = 3003,
  UPLOADED_REPORT_ATTACHMENT_NOT_FOUND  = 3004,
  TROUBLE_TICKET_NOT_FOUND              = 3005,
  TROUBLE_TICKET_ATTACHMENT_NOT_FOUND   = 3006,

  GENERAL_THROTTLING                    = 8101,
  GENERAL_NOT_FOUND                     = 8102,
  START_DATE_MUST_BE_AFTER_END_DATE     = 8103,

  // JWT
  JWT_INVALID                           = 9101,
  JWT_INCORRECT_PAYLOAD_TYPE            = 9102,
  VALIDATION_ERROR                      = 9998,

  UNKNOWN                               = 9999 // Reserved...
}

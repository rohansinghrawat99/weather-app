import { ApiErrorCode } from "../root/http.exception";
import { ForbiddenException } from "../root/forbidden.exception";

export class WrongPasswordException extends ForbiddenException {

  constructor() {
    super("Wrong Password", ApiErrorCode.WRONG_PASSWORD);
  }
}
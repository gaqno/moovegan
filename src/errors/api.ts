import HttpStatusCode from '../enums/http-status-code';

class APIError extends Error {
  statusCode: HttpStatusCode;

  constructor(statusCode: HttpStatusCode, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default APIError;

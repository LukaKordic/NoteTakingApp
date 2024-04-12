class HttpError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    super.name = "HttpError";
    this.statusCode = statusCode;
  }
}

export default HttpError;

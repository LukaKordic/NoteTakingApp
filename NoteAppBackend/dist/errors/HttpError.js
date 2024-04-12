"use strict";
class HttpError extends Error {
    constructor(statusCode, message) {
        super(message);
        super.name = "HttpError";
        this.statusCode = statusCode;
    }
}

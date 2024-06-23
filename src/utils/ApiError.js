// The primary purpose of the ApiError class is to standardize and improve error handling in your API. By creating a custom error class, you can:

// Provide Consistent Error Responses: Ensure that all errors returned by your API have a consistent format, making it easier for clients to understand and handle errors.

// Include Additional Error Information: Add custom properties (like statusCode, errors, and success) to the error object, providing more context about the error.

// Capture and Manage Stack Traces: Manage stack traces in a consistent manner, which can be useful for debugging.

class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message); // overwrite
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export {ApiError}

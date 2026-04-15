/**
 * Creates an Error object with an attached HTTP status code.
 */
export function createHttpError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

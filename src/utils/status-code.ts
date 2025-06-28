export enum StatusCode {
  // Success
  OK = 200,
  Created = 201,
  NoContent = 204,

  // Redirection
  MovedPermanently = 301,
  Found = 302,
  NotModified = 304,

  // Client Errors
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  Conflict = 409,
  UnprocessableEntity = 422,

  // Server Errors
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}

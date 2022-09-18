// Types
import { ServerErrorType } from "../types/server.errors.types";

export class ServerError extends Error implements ServerErrorType {
  originalName: string;

  constructor(message: string, originalName: string) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.originalName = originalName;
  }
}

export class DatabaseError extends ServerError {
  constructor(message: string, originalName: string) {
    super(message, originalName);
  }
}

export class IncorrectPasswordError extends ServerError {
  constructor(originalName: string) {
    super("Incorrect password", originalName);
  }
}

export class UnimplementedError extends ServerError {
  constructor(originalName: string) {
    super("Unimplemented error", originalName);
  }
}

export class UserNotFound extends ServerError {
  constructor(originalName: string) {
    super("User not found", originalName);
  }
}

export class UserExists extends ServerError {
  constructor(originalName: string) {
    super("User already exists", originalName);
  }
}

export class TokenNotFound extends ServerError {
  constructor(originalName: string) {
    super(
      "Token not found, please check logged devices for security purposes",
      originalName
    );
  }
}

export class UserNotVerified extends ServerError {
  constructor(originalName: string) {
    super("User not verified", originalName);
  }
}

export class Unauthorized extends ServerError {
  constructor(originalName: string) {
    super("User not authorized", originalName);
  }
}

export class TokenExpired extends ServerError {
  constructor(originalName: string) {
    super(
      "Token is expired, please check logged devices for security purposes",
      originalName
    );
  }
}

export class TokenDecodeError extends ServerError {
  constructor(originalName: string) {
    super("Could not decode token", originalName);
  }
}

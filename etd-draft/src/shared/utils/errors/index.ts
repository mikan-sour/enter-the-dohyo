import { TApiError, TErrorWithMessage } from "../../types";

export function isErrorWithMessage(error: unknown): error is TErrorWithMessage {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Record<string, unknown>).message === "string"
  );
}

export function toErrorWithMessage(maybeError: unknown): TErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message;
}

export function toError(maybeError: unknown):Error {
  if(maybeError instanceof Error) {
    return maybeError as Error
  }
  const errMsg = getErrorMessage(maybeError);
  return new Error(errMsg);
}
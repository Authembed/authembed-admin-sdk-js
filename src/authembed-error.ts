export class AuthembedError extends Error {
  code: string;
  response?: any;

  constructor(message: string, code: string, response?: any) {
    super(message);
    Object.setPrototypeOf(this, AuthembedError.prototype);

    this.code = code;
    this.response = response;
  }
}
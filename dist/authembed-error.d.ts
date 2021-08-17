export declare class AuthembedError extends Error {
    code: string;
    response?: any;
    constructor(message: string, code: string, response?: any);
}

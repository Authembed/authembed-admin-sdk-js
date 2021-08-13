"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthembedAdminSDK = void 0;
const axios_1 = __importDefault(require("axios"));
const authembed_user_interface_1 = require("./interfaces/authembed-user.interface");
class AuthembedAdminSDK {
    constructor(params) {
        this.axios = axios_1.default.create({
            baseURL: params.url,
            auth: {
                username: params.username,
                password: params.password,
            },
        });
    }
    async getUserByToken(token) {
        const result = await this.axios.get(`/api/users-by-token/${token}`);
        return new authembed_user_interface_1.AuthembedUser(Object.assign(Object.assign({}, result.data), { createdAt: result.data.createdAt ? new Date(result.data.createdAt) : null, deletedAt: result.data.deletedAt ? new Date(result.data.deletedAt) : null, updatedAt: result.data.updatedAt ? new Date(result.data.updatedAt) : null }));
    }
}
exports.AuthembedAdminSDK = AuthembedAdminSDK;
//# sourceMappingURL=admin-sdk.js.map
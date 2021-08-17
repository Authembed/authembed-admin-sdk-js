"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthembedAdminSDK = void 0;
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
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
        return Object.assign(Object.assign({}, result.data), { createdAt: result.data.createdAt ? new Date(result.data.createdAt) : null, deletedAt: result.data.deletedAt ? new Date(result.data.deletedAt) : null, updatedAt: result.data.updatedAt ? new Date(result.data.updatedAt) : null });
    }
    async getUsersByIds(userIds) {
        const result = await this.axios.post('/admin-api/users/get-batch', {
            ids: userIds,
        });
        const parsed = {};
        Object.keys(result.data).forEach((userId) => {
            parsed[userId] = Object.assign(Object.assign({}, result.data[userId]), { createdAt: result.data[userId].createdAt ? new Date(result.data[userId].createdAt) : null, deletedAt: result.data[userId].deletedAt ? new Date(result.data[userId].deletedAt) : null, updatedAt: result.data[userId].updatedAt ? new Date(result.data[userId].updatedAt) : null });
        });
        return parsed;
    }
    async getAllUsers(query) {
        const result = await this.axios.get('/admin-api/users', {
            params: query,
        });
        const parsed = [];
        result.data.forEach((user) => {
            parsed.push(Object.assign(Object.assign({}, user), { createdAt: user.createdAt ? new Date(user.createdAt) : null, deletedAt: user.deletedAt ? new Date(user.deletedAt) : null, updatedAt: user.updatedAt ? new Date(user.updatedAt) : null }));
        });
        return parsed;
    }
    async updateUser(params) {
        const result = await this.axios.patch(`/admin-api/users/${params._id}`, lodash_1.default.omit(params, ['_id']));
        return Object.assign(Object.assign({}, result.data), { createdAt: result.data.createdAt ? new Date(result.data.createdAt) : null, deletedAt: result.data.deletedAt ? new Date(result.data.deletedAt) : null, updatedAt: result.data.updatedAt ? new Date(result.data.updatedAt) : null });
    }
}
exports.AuthembedAdminSDK = AuthembedAdminSDK;
//# sourceMappingURL=admin-sdk.js.map
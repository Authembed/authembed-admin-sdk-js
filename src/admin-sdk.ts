import axios, { AxiosInstance } from 'axios';
import { AuthembedAdminSDKParams } from './interfaces/authembed-admin-sdk-params.interface';
import { AuthembedUser } from './interfaces/authembed-user.interface';
import { JSONObject } from './interfaces/json-object.interface';
import { UpdateUserParams } from './interfaces/update-user-params.interface';
import _ from 'lodash';

export class AuthembedAdminSDK<M extends JSONObject = JSONObject, P extends JSONObject = JSONObject> {
  protected axios: AxiosInstance;
  constructor(params: AuthembedAdminSDKParams) {
    this.axios = axios.create({
      baseURL: params.url,
      auth: {
        username: params.username,
        password: params.password,
      },
    });
  }

  async getUserByToken<M1 extends JSONObject = M, P1 extends JSONObject = P>(
    token: string,
  ): Promise<AuthembedUser<M1, P1>> {
    const result = await this.axios.get(`/api/users-by-token/${token}`);

    return {
      ...result.data,
      createdAt: result.data.createdAt ? new Date(result.data.createdAt) : null,
      deletedAt: result.data.deletedAt ? new Date(result.data.deletedAt) : null,
      updatedAt: result.data.updatedAt ? new Date(result.data.updatedAt) : null,
    };
  }

  async getUsersByIds<M1 extends JSONObject = M, P1 extends JSONObject = P>(
    userIds: string[],
  ): Promise<Record<string, AuthembedUser<M1, P1>>> {
    const result = await this.axios.post('/admin-api/users/get-batch', {
      ids: userIds,
    });

    const parsed: Record<string, AuthembedUser<M1, P1>> = {};

    Object.keys(result.data).forEach((userId) => {
      parsed[userId] = {
        ...result.data[userId],
        createdAt: result.data[userId].createdAt ? new Date(result.data[userId].createdAt) : null,
        deletedAt: result.data[userId].deletedAt ? new Date(result.data[userId].deletedAt) : null,
        updatedAt: result.data[userId].updatedAt ? new Date(result.data[userId].updatedAt) : null,
      };
    });

    return parsed;
  }

  async getAllUsers<M1 extends JSONObject = M, P1 extends JSONObject = P>(
    query?: any,
  ): Promise<AuthembedUser<M1, P1>[]> {
    const result = await this.axios.get('/admin-api/users', {
      params: query,
    });

    const parsed: AuthembedUser<M1, P1>[] = [];

    result.data.forEach((user) => {
      parsed.push({
        ...user,
        createdAt: user.createdAt ? new Date(user.createdAt) : null,
        deletedAt: user.deletedAt ? new Date(user.deletedAt) : null,
        updatedAt: user.updatedAt ? new Date(user.updatedAt) : null,
      });
    });

    return parsed;
  }

  async updateUser<M1 extends JSONObject = M, P1 extends JSONObject = P>(
    params: UpdateUserParams,
  ): Promise<AuthembedUser<M1, P1>> {
    const result = await this.axios.patch(`/admin-api/users/${params._id}`, _.omit(params, ['_id']));

    return {
      ...result.data,
      createdAt: result.data.createdAt ? new Date(result.data.createdAt) : null,
      deletedAt: result.data.deletedAt ? new Date(result.data.deletedAt) : null,
      updatedAt: result.data.updatedAt ? new Date(result.data.updatedAt) : null,
    };
  }
}

import axios, { AxiosInstance } from 'axios';
import { AuthembedAdminSDKParams } from './interfaces/authembed-admin-sdk-params.interface';
import { AuthembedUser } from './interfaces/authembed-user.interface';
import { JSONObject } from './interfaces/json-object.interface';

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

    return new AuthembedUser<M1, P1>({
      ...result.data,
      createdAt: result.data.createdAt ? new Date(result.data.createdAt) : null,
      deletedAt: result.data.deletedAt ? new Date(result.data.deletedAt) : null,
      updatedAt: result.data.updatedAt ? new Date(result.data.updatedAt) : null,
    });
  }
}

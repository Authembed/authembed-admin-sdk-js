import { AxiosInstance } from 'axios';
import { AuthembedAdminSDKParams } from './interfaces/authembed-admin-sdk-params.interface';
import { AuthembedUser } from './interfaces/authembed-user.interface';
import { JSONObject } from './interfaces/json-object.interface';
import { UpdateUserParams } from './interfaces/update-user-params.interface';
export declare class AuthembedAdminSDK<M extends JSONObject = JSONObject, P extends JSONObject = JSONObject> {
    protected axios: AxiosInstance;
    constructor(params: AuthembedAdminSDKParams);
    getUserByToken<M1 extends JSONObject = M, P1 extends JSONObject = P>(token: string): Promise<AuthembedUser<M1, P1>>;
    getUsersByIds<M1 extends JSONObject = M, P1 extends JSONObject = P>(userIds: string[]): Promise<Record<string, AuthembedUser<M1, P1>>>;
    getAllUsers<M1 extends JSONObject = M, P1 extends JSONObject = P>(query?: any): Promise<AuthembedUser<M1, P1>[]>;
    updateUser<M1 extends JSONObject = M, P1 extends JSONObject = P>(params: UpdateUserParams): Promise<AuthembedUser<M1, P1>>;
}

import { JSONObject } from "./json-object.interface";

export interface AuthembedUser<M extends JSONObject = JSONObject, P extends JSONObject = JSONObject> {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  name: string;
  email: string;
  emailVerified: boolean;
  metadata: M;
  privateMetadata: P;
}

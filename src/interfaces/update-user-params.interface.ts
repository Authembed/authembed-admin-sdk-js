export interface UpdateUserParams {
  _id: string
  name?: string;
  email?: string;
  metadata?: Record<string, unknown>;
  privateMetadata?: Record<string, unknown>;
}

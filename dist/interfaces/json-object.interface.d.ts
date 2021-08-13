declare type JSONValue = string | number | null | JSONObject | JSONValue[];
export interface JSONObject {
    [key: string]: JSONValue;
}
export {};

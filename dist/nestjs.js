"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthembedAdminSDKModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectAuthembedAdminSDK = exports.AuthembedAdminSDKModule = void 0;
const common_1 = require("@nestjs/common");
const admin_sdk_1 = require("./admin-sdk");
const AUTHEMBED_ADMIN_SDK_MODULE__SDK_INSTANCE = Symbol('AUTHEMBED_ADMIN_SDK_MODULE__SDK_INSTANCE');
const AUTHEMBED_ADMIN_SDK_MODULE__OPTIONS_PROVIDER = Symbol('AUTHEMBED_ADMIN_SDK_MODULE__OPTIONS_PROVIDER');
let AuthembedAdminSDKModule = AuthembedAdminSDKModule_1 = class AuthembedAdminSDKModule {
    static forRoot(options) {
        this.sdkInstance = new admin_sdk_1.AuthembedAdminSDK(options);
        return {
            module: AuthembedAdminSDKModule_1,
            providers: [
                {
                    provide: AUTHEMBED_ADMIN_SDK_MODULE__SDK_INSTANCE,
                    useValue: this.sdkInstance,
                },
            ],
            exports: [AUTHEMBED_ADMIN_SDK_MODULE__SDK_INSTANCE],
        };
    }
    static forRootAsync(asyncOptions) {
        return {
            module: AuthembedAdminSDKModule_1,
            providers: [
                {
                    provide: AUTHEMBED_ADMIN_SDK_MODULE__OPTIONS_PROVIDER,
                    useFactory: asyncOptions.useFactory,
                    inject: asyncOptions.inject || [],
                },
                {
                    provide: AUTHEMBED_ADMIN_SDK_MODULE__SDK_INSTANCE,
                    useFactory: (options) => {
                        this.sdkInstance = new admin_sdk_1.AuthembedAdminSDK(options);
                        return this.sdkInstance;
                    },
                    inject: [AUTHEMBED_ADMIN_SDK_MODULE__OPTIONS_PROVIDER],
                },
            ],
            exports: [AUTHEMBED_ADMIN_SDK_MODULE__SDK_INSTANCE],
        };
    }
};
AuthembedAdminSDKModule = AuthembedAdminSDKModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], AuthembedAdminSDKModule);
exports.AuthembedAdminSDKModule = AuthembedAdminSDKModule;
function InjectAuthembedAdminSDK() {
    return common_1.Inject(AUTHEMBED_ADMIN_SDK_MODULE__SDK_INSTANCE);
}
exports.InjectAuthembedAdminSDK = InjectAuthembedAdminSDK;
//# sourceMappingURL=nestjs.js.map
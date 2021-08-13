import { DynamicModule } from '@nestjs/common';
import { AuthembedAdminSDKParams } from './interfaces/authembed-admin-sdk-params.interface';
export declare class AuthembedAdminSDKModule {
    private static sdkInstance?;
    static forRoot(options: AuthembedAdminSDKParams): DynamicModule;
    static forRootAsync(asyncOptions: {
        useFactory: (...args: any[]) => AuthembedAdminSDKParams | Promise<AuthembedAdminSDKParams>;
        imports?: any[];
        inject?: any[];
    }): DynamicModule;
}
export declare function InjectAuthembedAdminSDK(): ParameterDecorator;

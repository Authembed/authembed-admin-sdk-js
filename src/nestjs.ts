import { DynamicModule, Global, Inject, Module } from '@nestjs/common';
import { AuthembedAdminSDK } from './admin-sdk';
import { AuthembedAdminSDKParams } from './interfaces/authembed-admin-sdk-params.interface';

const AUTHEMBED_ADMIN_SDK_MODULE__SDK_INSTANCE = Symbol(
  'AUTHEMBED_ADMIN_SDK_MODULE__SDK_INSTANCE',
);

const AUTHEMBED_ADMIN_SDK_MODULE__OPTIONS_PROVIDER = Symbol(
  'AUTHEMBED_ADMIN_SDK_MODULE__OPTIONS_PROVIDER',
);

@Global()
@Module({})
export class AuthembedAdminSDKModule {
  private static sdkInstance?: AuthembedAdminSDK;

  static forRoot(options: AuthembedAdminSDKParams): DynamicModule {
    this.sdkInstance = new AuthembedAdminSDK(options);

    return {
      module: AuthembedAdminSDKModule,
      providers: [
        {
          provide: AUTHEMBED_ADMIN_SDK_MODULE__SDK_INSTANCE,
          useValue: this.sdkInstance,
        },
      ],
      exports: [AUTHEMBED_ADMIN_SDK_MODULE__SDK_INSTANCE],
    };
  }

  static forRootAsync(asyncOptions: {
    useFactory: (
      ...args: any[]
    ) => AuthembedAdminSDKParams | Promise<AuthembedAdminSDKParams>;
    imports?: any[];
    inject?: any[];
  }): DynamicModule {
    return {
      module: AuthembedAdminSDKModule,
      providers: [
        {
          provide: AUTHEMBED_ADMIN_SDK_MODULE__OPTIONS_PROVIDER,
          useFactory: asyncOptions.useFactory,
          inject: asyncOptions.inject || [],
        },
        {
          provide: AUTHEMBED_ADMIN_SDK_MODULE__SDK_INSTANCE,
          useFactory: (options: AuthembedAdminSDKParams): AuthembedAdminSDK => {
            this.sdkInstance = new AuthembedAdminSDK(options);

            return this.sdkInstance;
          },
          inject: [AUTHEMBED_ADMIN_SDK_MODULE__OPTIONS_PROVIDER],
        },
      ],
      exports: [AUTHEMBED_ADMIN_SDK_MODULE__SDK_INSTANCE],
    };
  }

}

export function InjectAuthembedAdminSDK(): ParameterDecorator {
  return Inject(AUTHEMBED_ADMIN_SDK_MODULE__SDK_INSTANCE);
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.development.local', '.env.development'],
            isGlobal: true,
        }),
        AuthModule,
        UserModule,
    ],
})
export class AppModule {}

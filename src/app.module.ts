import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule , UsersModule],
  controllers:
      [AppController],
  providers: [AppService],
})
export class AppModule {}

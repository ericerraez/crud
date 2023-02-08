import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginsModule } from './logins/logins.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [LoginsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

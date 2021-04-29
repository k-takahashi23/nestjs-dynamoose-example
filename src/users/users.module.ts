import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersSchema } from './users.schema';
import { UsersService } from './users.service';

@Module({
  imports: [
    DynamooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
  ],
  controllers: [
    UsersController,
  ],
  providers: [
    UsersService,
    UsersRepository,
  ],
})
export class UsersModule {}
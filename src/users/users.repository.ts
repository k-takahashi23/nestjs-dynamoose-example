import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { v4 as uuidv4 } from 'uuid';
import { User, UserKey } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel('Users')
    private userModel: Model<User, UserKey>,
  ) {}

  findAll() {
    return this.userModel.scan().exec();
  }

  find(key: UserKey) {
    return this.userModel.get(key);
  }

  add(createUserDto: CreateUserDto) {
    const newUser = {
      id: uuidv4(),
      name: createUserDto.name,
      email: createUserDto.email,
    };
    return this.userModel.create(newUser);
  }

  update(key: UserKey, user: Partial<User>) {
    return this.userModel.update(key, user);
  }

  remove(key: UserKey) {
    return this.userModel.delete(key);
  }
}
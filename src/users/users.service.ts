import { Injectable } from '@nestjs/common';
import { User, UserKey } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  findAll() {
    return this.usersRepository.findAll();
  }

  find(key: UserKey) {
    return this.usersRepository.find(key);
  }

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.add(createUserDto);
  }

  update(key: UserKey, user: Partial<User>) {
    return this.usersRepository.update(key, user);
  }

  delete(key: UserKey) {
    return this.usersRepository.remove(key);
  }
}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly usersModel: typeof User) {}

  create(CreateUserDto: CreateUserDto): Promise<User> {
    return this.usersModel.create({
      firstName: CreateUserDto.firstName,
      lastName: CreateUserDto.lastName,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.usersModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.usersModel.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}

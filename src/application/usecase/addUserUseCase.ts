import { container } from "tsyringe";
import { IAddUserUseCase } from "../../domain/interfaces/IaddUserUseCase";
import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { User } from "../../domain/model/user";
import { UserRepository } from "../../infrastructure/Repositories/UserRepository";

export class AddUserUseCase implements IAddUserUseCase{
    userRepository:IUserRepository
    
    constructor() {
        this.userRepository=container.resolve<UserRepository>("IUserRepository")
    }
    async addUser(user: User): Promise<User> {
      return await this.userRepository.add(user);
    }

}
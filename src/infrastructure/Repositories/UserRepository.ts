
import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { User } from "../../domain/model/user";

export class  UserRepository implements IUserRepository{
   
    add(user: User): Promise<User> {
        return  new Promise((user) => {
            return user;
        });
    }

}
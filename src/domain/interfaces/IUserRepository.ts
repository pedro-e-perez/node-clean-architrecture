import { User } from "../model/user";

export interface IUserRepository{
    add(user:User):Promise<User>
}
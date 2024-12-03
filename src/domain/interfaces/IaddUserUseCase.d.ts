import { User } from "../model/user";

export interface IAddUserUseCase{
    addUser(user:User):Promise<User>;
}
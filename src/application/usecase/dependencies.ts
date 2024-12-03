import { container } from "tsyringe"
import { AddUserUseCase } from "./addUserUseCase"
import { UserRepository } from "../../infrastructure/Repositories/UserRepository"

container.register("IAddUserUseCase", {useClass: AddUserUseCase}) // associate the UserService with the token "UserService"
container.register("IUserRepository", {useClass: UserRepository}) // associate the UserAdapter with the token "UserAdapter"

export { container }
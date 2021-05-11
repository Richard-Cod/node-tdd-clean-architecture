import { User } from "../entities/User";

export interface UserRepository {
    create(userInstance : User) : User
    getAll() : User[]
}
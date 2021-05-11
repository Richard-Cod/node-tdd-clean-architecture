import { UserRepository } from "./UserRepository";

export interface DatabaseService  {
    userRepository : UserRepository
    initDatabase() : void
    seedDatabase() : void
}
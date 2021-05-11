import { DatabaseService } from "../../../domain/contracts/DatabaseService";
import { UserRepository } from "../../../domain/contracts/UserRepository";
import { InMemoryUserRepository } from "./InMemoryUserRepository";

export class InMemoryDatabaseService implements DatabaseService{
    userRepository: UserRepository;

    constructor(){
        this.userRepository = new InMemoryUserRepository()
    }
    
    initDatabase(): void {
        throw new Error("Method not implemented.");
    }
    seedDatabase(): void {
        throw new Error("Method not implemented.");
    }
    
}
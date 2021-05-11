import { UserRepository } from "../../../domain/contracts/UserRepository";
import { User } from "../../../domain/entities/User";

export class InMemoryUserRepository implements UserRepository{
    currentId : number = 0;
    DB : User[] = [];

    // public constructor(){
    //     this.DB = 
    // }


    create(userInstance: User): User {
        
        this.currentId += 1
        userInstance.id = this.currentId;
        this.DB.push(userInstance)

        return userInstance
    }
    getAll(): User[] {
        return this.DB;
    }
    
}
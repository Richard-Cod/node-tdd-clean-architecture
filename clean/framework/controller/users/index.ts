import { NextFunction, Request, Response } from "express"
import { IprojectDependencies } from "../../../domain/contracts/IprojectDependencies";
import { User } from "../../../domain/entities/User";
import CreateUserUseCase from '../../../domain/use_cases/CreateUser';

export default (dependencies : IprojectDependencies) => {
    const {userRepository} = dependencies.databaseService

    const createUser = async (req: Request , res: Response , next: NextFunction) => {
        const {username , email} = req.body

       try {
        const createUserCommand = CreateUserUseCase(userRepository);
        let user = new User(username , email)
        user = await createUserCommand(user)
        res.send(user)
       } catch (error) {
           console.warn(error)
           res.send(error)
       }
    }

    return {
        createUser
    }
}

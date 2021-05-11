import { NextFunction, Request, Response } from "express"
import Joi from "joi";
import { IprojectDependencies } from "../../../domain/contracts/IprojectDependencies";
import { User } from "../../../domain/entities/User";
import CreateUserUseCase from '../../../domain/use_cases/CreateUser';

export default (dependencies : IprojectDependencies) => {
    const {userRepository} = dependencies.databaseService

    const createUser = async (req: Request , res: Response , next: NextFunction) => {
        console.log(req.body)
        const {username , email} = req.body

        const schema = Joi.object({
            username : Joi.string().required().min(2).max(30),
            email: Joi.string().email({ tlds: { allow: false } }),
          });

          const test = schema.validate({ email , username });
          if (test.error) {
            const { details } = test.error;
            res.status(400).send({validationErrorMsg: details[0].message});
          }


       try {
        const createUserCommand = CreateUserUseCase(userRepository);
        let user = new User(null ,username , email)
        user = await createUserCommand(user)
        console.log(user)
        res.send(user)
       } catch (error) {
           return res.status(400).send(error)
       }
    }


    const getAllUsers = async (req: Request , res: Response , next: NextFunction) => {
        try {
            const users : User[]  = await userRepository.getAll()
            res.send(users)
        } catch (error) {
            res.send(error)
        }
    }


    return {
        createUser,
        getAllUsers
    }
}

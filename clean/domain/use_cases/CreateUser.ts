import { UserRepository } from "../contracts/UserRepository"
import { User } from "../entities/User"

const CreateUser =  (userRepository: UserRepository) => {
    const Execute = async (userInstance : User) : Promise<User> => {
       const user = await userRepository.create(userInstance)
       return user
    }

    return Execute
}


export default CreateUser;
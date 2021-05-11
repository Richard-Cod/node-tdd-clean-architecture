import ProjectDependencies from "../../clean/domain/config/projectdependencies";
import { UserRepository } from "../../clean/domain/contracts/UserRepository";
import { User } from "../../clean/domain/entities/User";

describe('A suite of test for users use cases', () => {
  var projectDependencies : ProjectDependencies;
  var userRepository : UserRepository

  beforeEach(function() {
   projectDependencies = new ProjectDependencies()
   userRepository = projectDependencies.databaseService.userRepository
  });

    it("should check if user is created", function() {
      const user = new User(null , "Richard07" , "rich@gmail.com")
      console.log("one user ",user)
      userRepository.create(user);
      expect(user.id).toEqual(1);
    });
  
    it("should return the list of users in the db ", function() {
      const user = new User(null , "Richard07" , "rich@gmail.com")
      userRepository.create(user);
      const listOfUsers : User[] = userRepository.getAll()
      console.warn(listOfUsers)
      expect(listOfUsers.length).toEqual(1)
      expect(listOfUsers[0].id).not.toEqual(null)
    })
})
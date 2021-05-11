import {IprojectDependencies} from '../contracts/IprojectDependencies';
import {DatabaseService} from '../contracts/DatabaseService';
import {InMemoryDatabaseService} from '../../framework/persistance/InMemory/InMemoryDatabaseService'
class ProjectDependencies implements IprojectDependencies{
    databaseService: DatabaseService;
    constructor(){
        this.databaseService = new InMemoryDatabaseService();
    }

}

export default ProjectDependencies
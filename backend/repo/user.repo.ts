import { BaseRepo } from "./base.repo";
import { IUser, users } from './data';

export class UserRepo extends BaseRepo<IUser> {

     constructor(){
          super(users);
     }
     
}
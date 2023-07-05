import { companies } from "repo/data";
import { CompanyRepo } from "../../../repo/company.repo";
import { RoomRepo } from "../../../repo/room.repo";
import { UserRepo } from "../../../repo/user.repo";

export class CompanyService {

  protected _companyRepo = new CompanyRepo();
  protected _roomRepo = new RoomRepo();
  protected _userRepo = new UserRepo();

  async getUsers(filter?: { username?: string}, page?: number, limit?: number): Promise<any> {
    return await this._userRepo.select(filter, undefined, page-1, limit);
  }

  getUsersLength(): number {
    return this._userRepo.getLength()
  }

  createUser(username: string): any {
    return this._userRepo.create(username)
  }

  async getUserCompanies(filter: { companyIds: number[]}): Promise<any> {
    return await this._companyRepo.select(undefined,[{ fieldName:'id', data: filter.companyIds }]);
  }

  async getCompanies(filter: { name?: string}): Promise<any> {
    return await this._companyRepo.select(filter);
  }

  async getCompanyRooms(filter: { name?: string, companyId?: number}): Promise<any> {    
    return await this._roomRepo.select(filter);
  }

}

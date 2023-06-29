import { CompanyRepo } from "../../../repo/company.repo";
import { RoomRepo } from "../../../repo/room.repo";
import { UserRepo } from "../../../repo/user.repo";
export declare class CompanyService {
    protected _companyRepo: CompanyRepo;
    protected _roomRepo: RoomRepo;
    protected _userRepo: UserRepo;
    getUsers(filter: {
        username?: string;
    }): Promise<any>;
    getUserCompanies(filter: {
        companyIds: number[];
    }): Promise<any>;
    getCompanies(filter: {
        name?: string;
    }): Promise<any>;
    getCompanyRooms(filter: {
        name?: string;
        companyId?: number;
    }): Promise<any>;
}

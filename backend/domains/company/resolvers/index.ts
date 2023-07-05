import { companies } from "repo/data";
import { CompanyService } from "../service";
export default {
  Query: {
    async Users(parent: any, args: any, context: any, info: any): Promise<any> {
      const { filter, page, limit } = args;  
      const _companyService = new CompanyService();
      const data = await _companyService.getUsers(filter, page, limit);
      const meta = {
        pagination: {
          page: page,
          pageSize: data.length,
          totalOfRecord: _companyService.getUsersLength(),
          totalOfPage: Math.ceil(_companyService.getUsersLength() / limit)
        }
      }
      return { data, meta };
    },    
    async Companies(parent: any, args: any, context: any, info: any): Promise<any> {
      const { filter } = args;      
      const _companyService = new CompanyService();
      const data = await _companyService.getCompanies(filter);
      return { data };
    },
    async Rooms(parent: any, args: any, context: any, info: any): Promise<any> {
      const { filter } = args;      
      const _companyService = new CompanyService();
      const data = await _companyService.getCompanyRooms(filter);
      return { data };
    },      
  },
  Mutation: {
    async addUser(parent:any, args:any): Promise<any>  {
      const { username, limit} = args;
      if limit=="undefined" {
        limit = 100
      }
      const _companyService = new CompanyService();
      const user = await _companyService.createUser(username);
      const meta = {
        pagination: {
          page: Math.ceil(_companyService.getUsersLength() / limit),
          pageSize: limit,
          totalOfRecord: _companyService.getUsersLength(),
          totalOfPage: Math.ceil(_companyService.getUsersLength() / limit)
        }
      }
      return { meta };
    }
  },
  CompanyType:{
    async rooms(parent: any, args: any, context: any, info: any): Promise<any> {
      const { id } = parent   
      const _companyService = new CompanyService();
      const data = await _companyService.getCompanyRooms({ companyId: id });
      return data;
    },          
  },
  UserType:{
    async companies(parent: any, args: any, context: any, info: any): Promise<any> {
      const { companyIds } = parent   
      const _companyService = new CompanyService();
      const data = await _companyService.getUserCompanies({ companyIds });
      return data;
    },          
  }  
};

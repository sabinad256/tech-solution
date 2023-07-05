export default `
  type CompaniesResponseType {
    data: [CompanyType]
  }

  type PaginationType{
    totalOfPage: Int
    page: Int
    totalOfRecord: Int
    pageSize: Int
  }

  type MetaResponse{
    pagination: PaginationType
  }

  type UsersResponseType {
    data: [UserType]
    meta: MetaResponse
  }

  type RoomType {
    id: Int
    name: String
  }

  type UserType {
    id: Int
    username: String
    companies: [CompanyType]
  }

  type CompanyType {
    id: Int
    name: String
    rooms: [RoomType]
  }
  
  type RoomsResponseType {
    data: [RoomType]
  }

  input RoomFilterInput {    
    name: String
  }

  input CompanyFilterInput {    
    name: String
  }

  type Query {
    Companies(filter: CompanyFilterInput): CompaniesResponseType
    Rooms(filter: RoomFilterInput): RoomsResponseType
    Users(page: Int, limit: Int): UsersResponseType
  }

  type Mutation {
    addUser(username: String, limit: Int): UsersResponseType
  }
`;

export default `
  type CompaniesResponseType {
    data: [CompanyType]
  }

  type UsersResponseType {
    data: [UserType]
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
    Users: UsersResponseType
  }
`;

declare const _default: {
    Query: {
        Users(parent: any, args: any, context: any, info: any): Promise<any>;
        Companies(parent: any, args: any, context: any, info: any): Promise<any>;
        Rooms(parent: any, args: any, context: any, info: any): Promise<any>;
    };
    CompanyType: {
        rooms(parent: any, args: any, context: any, info: any): Promise<any>;
    };
    UserType: {
        companies(parent: any, args: any, context: any, info: any): Promise<any>;
    };
};
export default _default;

export interface IUser {
    id: number;
    username: string;
    companyIds: number[];
}
export interface ICompany {
    id: number;
    name: string;
}
export interface IRoom {
    id: number;
    companyId: number;
    name: string;
}
export declare const companies: ICompany[];
export declare const rooms: IRoom[];
export declare const users: IUser[];

export declare const delay: (milliseconds: number) => Promise<void>;
export declare class BaseRepo<T> {
    protected _data: T[];
    constructor(data: T[]);
    select(where?: Partial<T>, whereIn?: {
        fieldName: string;
        data: any[];
    }[]): Promise<T[]>;
}

export const delay = (milliseconds: number): Promise<void> => {
     return new Promise((resolve) => {
       setTimeout(resolve, milliseconds);
     });
};

export interface User {
     id: number;
     username: string;
}
export class BaseRepo<T> {

     protected _data: T[];
     
     constructor(data: T[]){
          this._data = data;
     }

     public getLength(): number {
          return this._data.length
     }

     create(username: string): any{
          let data = {id:this._data.length+1,username: username, companyIds: []};
          this._data.push(data)
          return data;
     }

     async select(where?: Partial<T>, whereIn?: {fieldName: string, data: any[]}[], page?: number, limit?: number): Promise<T[]> {
          let rs = this._data
          if ((page || page==0) && limit) {
               rs = rs.slice((page*limit),(page*limit+limit)) 
          }

          if (where) {
               rs = Object.entries(where).reduce((acc, [key, value]) => {
                    return acc.filter(r => r[key as keyof T] === value);
               }, rs);
          }
          if (whereIn) {
               rs = whereIn.reduce((acc, {fieldName, data}) => {
                    return acc.filter(r => data.includes( r[fieldName as keyof T] ));
               }, rs);
          }          

          console.log('rs = ', rs)


          for(const _ of rs){
               await delay(1);
          }
          
          return Promise.resolve(rs);
     }     
}
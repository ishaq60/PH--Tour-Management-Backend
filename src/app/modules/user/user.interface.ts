import { Types } from "mongoose";

export enum Role{
    SUPER_Admin="Super_Admin",
Admin="ADMIN",
USER="USER",
GUIDE="gUIDE"
}
export interface IauthProvider{
provider:string;
providerId:string;
}
/**
 * 
 */
export enum Isactive{
    ACtive="ACTIVE",
    INACTIVE="INACTIVE",
    BLOCKED="BLOCKED"
    
}
export interface IUser{
    name:string;
    email:string;
    password ?: string;
   phonenumber ?: string;
   picture ?:string;
   address ?:string;
   isDeleter ?:string;
   isActive :Isactive;
   isvarified?:string;
   role:Role;


auths:IauthProvider[]

booking:Types.ObjectId[]
guides ?:Types.ObjectId[]
    
}
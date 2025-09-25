//edit only this file if you switch to any other platform like supabase, firebase etc 
import { Client,Account,ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService{
    client = new Client();
    account; 

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.account = new Account(this.client)
    }


    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email, password, name)
            return userAccount ? this.login({email, password}) : userAccount;
        }catch(err){
            throw err;
        }
    }

    //email-based session
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email, password);
        }catch(err){
            throw err;
        }
    }


    async getCurrentUser(){
        try{
           return await this.account.get()
        }catch(err){
            throw err;
        }
        
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSession("current");
        } catch (err) {
            throw err;
        }
    }
}


export const authService = new AuthService();

export default AuthService

//import appwrite sdk modules
import { Client,Account,ID } from "appwrite";
import conf from "../conf/conf"//configuration file


export class AuthService{
    //make instance of Client(), used to communicate with server of appwrite
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        //add client value into account 
        this.account = new Account(this.client)
        //this account will handle the account-related operations 
    }
//in future if you want to change the backend service then just make changes in the 
//conststructor above

    //this.account.create()=> create account
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
            await this.account.createEmailSession(email, password);
        }catch(err){
            console.error("Login failed",err)
            throw err;
        }
    }

    //to retrieve  the current logged-in user
    async getCurrentUser(){
        try{
           return await this.account.get()
        }catch(err){
            console.error("Failed to get current user:", err);
            return null;//no user information 
        }
  
    }

    async logout(){
        try {
            await this.account.deleteSessions();//sara user delete hojana
        } catch (err) {
            console.error("Logout failed:", err);
            throw err;
        }
    }
}
//in future if you change the database then you will only make changes in this file
//save this code snippet to use in future

//why not to create object here and export which will be easy
export const authService = new AuthService();

//how I will use these methods?
// like authService.login(), authService.logout() etc

export default AuthService

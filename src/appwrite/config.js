import conf from "../conf/conf";
import { Client, ID, Databases, Storage,Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client); 
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredimage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,//document id 
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId
                }
            )
        }catch(err){
            console.error("Appwrite create post error:", err.message);
            throw err;
        }
    }

    //identify the post to update
    async updatePost(slug, {title,content, featuredimage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                   title,
                   content,
                   featuredimage,
                   status
                }
            )
        }catch(err){
            console.error("Appwrite update post error:", err.message);
            throw err;        }
    }


    async deletePost(slug){
        try{
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        }catch(err){
            console.error("Appwrite delete post error:", err.message);
            throw err;            
            return false;
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }catch(err){
            console.error("Appwrite get post error:", err.message);
            throw err;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
      try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries,
            //pagaination 
        )
      } catch (err) {
            console.error("Appwrite get posts error:", err.message);
            throw err;
      }
    }

    //file upload services
    async uploadFile({file, fileName}){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }catch(err){
            console.error("Appwrite upload file error:", err.message);
            throw err;        
        }
    }

    async deleteFile(fileId){
        try{
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        }catch(err){
            console.error("Appwrite delete file error:", err.message);
            throw err;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

//instantiate and directly use there
const service = new Service();
export default service;
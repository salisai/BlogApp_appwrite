import conf from "../conf/conf";
import { Client, ID, Databases, Storage,Query } from "appwrite";

//Client=> manages connection to the appwrite server
//Databases=> manages database operations
//Storage=> file storage operations
//query=> queries for filtering documents

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);//instance of the client and we gave 
       this.databases = new Databases(this.client); 
       this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch(err){
            throw new Error("Failed to create post");
        }
    }

    //slug=> identify the post to update
    async updatePost(slug,{title,content, featuredImage, status, userId}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,{
                   title,
                   content,
                   featuredImage,
                   status
                }
            )
        }catch(err){
            throw new Error("Failed to update post");
        }
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
            throw new Error("Failed to delete post");
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
            throw new Error("Failed to get post");
        }
    }

    //get only those which are active 
    async getPosts(queries = [Query.equal("status","active")]){
      try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
        )
      } catch (error) {
        throw new Error("Failed to get posts");
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
            throw new Error("Failed to upload file");
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
            throw new Error("Failed to delete file");
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service();
export default service;
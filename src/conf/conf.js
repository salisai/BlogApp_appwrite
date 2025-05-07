const conf ={
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_BUCKET_ID),
}

export default conf 


//configuration
//thora tricky concept

//dependency lock nahi karna what if you change 
//your database in future\
//vendor locking


//services => classes
//yaha say hum methods export kartay hai
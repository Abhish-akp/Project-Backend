import { v2 as cloudinary} from "cloudinary";
import fs from "fs";
cloudinary.config({ 
    cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
    api_key: 'process.env.CLOUDINARY_API_KEY', 
    api_secret: 'process.env.CLOUDINARY_API_SECRET' ,
    secure: true,
});
 
const uploadCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const response= await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        }) 
        // file upload successfully
        console.log("File uploaded successfully", 
            response.url);
            fs.unlinkSync(localFilePath)
            return response;
    }
    catch(error){
        fs.unlinkSync(localFilePath); // remove the locally saved temporary saved file as the upload operation failed
        return null;
    }
}

export {uploadCloudinary}
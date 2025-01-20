import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";


dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const UploadMediaToCloudinary = async (req, res) => {
  try {
    console.log("UploadMedia function called!");

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const uploadedFiles = await Promise.all(
      req.files.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "Uploads", 
        });

        fs.unlinkSync(file.path);

        return {
          public_id: result.public_id,
          url: result.secure_url,
          format: result.format,
        };
      })
    );

    return res.status(200).json({
      message: "Files uploaded successfully",
      files: uploadedFiles,
    });
  } catch (error) {
    console.error("UploadMedia error:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};


export const UploadMedia = async (req, res) => {
    try {
      console.log("UploadMedia function called!");
  
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "No files uploaded" });
      }
  
      // Save file information
      const savedFiles = req.files.map((file) => ({
        filename: file.filename,
        path: file.path,
        mimeType: file.mimetype,
      }));
  
      return res.status(200).json({
        message: "Files uploaded successfully",
        files: savedFiles,
      });
    } catch (error) {
      console.error("UploadMedia error:", error);
      return res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };

  export const getmedia = async (req, res) => {
    try {
      const { resources } = await cloudinary.search
        .expression("folder:Uploads") 
        .sort_by("created_at", "desc")
        .max_results(20) 
        .execute();
  
      if (!resources || resources.length === 0) {
        return res.status(404).json({ message: "No media files found" });
      }
      const mediaFiles = resources.map((file) => ({
        public_id: file.public_id,
        url: file.secure_url,
        format: file.format,
        created_at: file.created_at,
      }));
  
      return res.status(200).json({
        message: "Media files retrieved successfully",
        files: mediaFiles,
      });
    } catch (error) {
      console.error("getmedia error:", error);
      return res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };
  

  //import Media from "../models/mediaModel.js"; 

// export const getmedia = async (req, res) => {
//   try {
//     console.log("Fetching uploaded media...");

//     // Fetch all media files from the database
//     const mediaFiles = await Media.find(); 

//     if (!mediaFiles || mediaFiles.length === 0) {
//       return res.status(404).json({ message: "No media files found" });
//     }

//     return res.status(200).json({
//       message: "Media files retrieved successfully",
//       files: mediaFiles,
//     });
//   } catch (error) {
//     console.error("getmedia error:", error);
//     return res.status(500).json({ message: "Internal server error", error: error.message });
//   }
// };

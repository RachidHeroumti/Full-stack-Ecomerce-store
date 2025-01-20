import express from "express";
import multer from "multer";
import { UploadMedia , getmedia,UploadMediaToCloudinary} from "../controllers/MediaController.js";


const route = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, `image-${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

route.post("/upload", upload.array("media", 10), UploadMediaToCloudinary);
route.get("/uploads",getmedia)
export default route;

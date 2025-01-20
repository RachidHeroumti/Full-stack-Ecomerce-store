import React, { useEffect, useState } from "react";
import { getMediaMediaRoute, uploadMediaRoute } from "../RoutersApi/ApiRoutes";
import { useNavigate } from "react-router-dom";
import { EcoState } from "../Context/EcoProvider";
import Cookies from 'js-cookie'
import axios from "axios";

function Media() {
  const [addedMediaList, setAddedMedia] = useState([]);
  const[mediaList,setMedia] = useState([]);
  const navigate = useNavigate();
  const{userToken}=EcoState()

    useEffect(() => {
      const token = Cookies.get('token')
      if (!userToken && !token) {
        navigate("/login");
        return ;
      }else{
        getMedia();
      }
    }, [])
    const handleFileChange = (e) => {
      const files = Array.from(e.target.files);
      if (files.length > 0) {
        const previews = [];
        files.forEach((file) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            previews.push({
              image: event.target.result, // Base64 preview
              file: file, // Actual file to upload
            });
            if (previews.length === files.length) {
              setAddedMedia((prevMedia) => [...prevMedia, ...previews]);
            }
          };
          reader.readAsDataURL(file);
        });
      }
    };
    
    const uploadImage = async () => {
      try {
        const formData = new FormData();
        addedMediaList.forEach((media) => {
          formData.append("media", media.file);
        });
    
        const config = {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data", // Set correct content type
          },
        };
    
        const res = await axios.post(uploadMediaRoute, formData, config);
        getMedia();
        setAddedMedia([])
        console.log("Media uploaded successfully:", res.data);
        return res.data;
      } catch (error) {
        console.error("Error uploading media:", error.response?.data || error.message);
        throw error;
      }
    };

    const getMedia=async()=>{
      try{
        const config = {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data", // Set correct content type
          },
        };
        const res = await axios.get(getMediaMediaRoute,config) 
        if(res.data.files){
          setMedia(res.data.files) ;
        }
        console.log("🚀 ~ getMedia ~ res:", res)
      }catch(error){
        console.log("🚀 ~ getMedia ~ error:", error)
        throw error
      }
    }
    
  return (
    <div>
      <div className="w-full p-6  bg-gray-100 rounded-lg shadow-md overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Media</h1>
          <label className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer">
            Add New
            <input
              type="file"
              multiple
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </label>
        </div>

        <div className="flex flex-wrap gap-5 bg-sky-100 mb-6">
          {addedMediaList.map((data, index) => (
            <img
              key={index}
              className="w-[150px] h-[150px] object-cover"
              src={data.image}
              alt={`image-${index}`}
            />
          ))}
        </div>
        {addedMediaList.length > 0 && (
          <div className=" flex justify-end mb-6">
            <button
              className=" bg-sky-700 text-white text-xl p-2 rounded hover:bg-sky-900"
              onClick={() => uploadImage()
              }
            >
              Upload
            </button>
          </div>
        )}
        <div className="flex flex-wrap gap-5 ">
          {
            mediaList&& mediaList.map((media,i)=>{
              return(
                <div key={i}>
                  <img
                className="w-[150px] h-[150px] object-cover"
                src={media.url}
                alt="image"
              />
                </div>
                
              )
            })
          }
        
          
        </div>
      </div>
    </div>
  );
}

export default Media;

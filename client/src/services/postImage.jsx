import axios from "axios";

const {REACT_APP_API_URL =  "http://localhost:3001"} = process.env


export function postImage(image) {
  const formData = new FormData();
  formData.append("image", image);
  return axios.post(
    REACT_APP_API_URL+"/image",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ).then((response)=> console.log("===========================",response.data.url))
}
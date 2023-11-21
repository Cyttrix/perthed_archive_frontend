import { Button, Hidden } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "../AddMovieToList/AddMovieToList.css";

const CreatePost = ({id, status, title, img}) => {
    const [user, token] = useAuth();
    
    if (status === 'Completed') {
        status = `completed`

    } else if (status === 'Plan To Watch') {
        status = 'is planning to watch'
    }
    const [postValues] = useState({
        UserId: "24d44028-23c7-4ec5-be54-c91fb083902f",
        userName: `${user.userName}`,
        MediaId: id,
        MediaTitle: title,
        CoverImg: img,
        text: status,
        



    })

    

    const handleCreatePost = () => {
        console.log(id, status)
        axios 
        .post(`https://localhost:5001/api/post`, postValues, {
            headers:{Authorization: "Bearer" + token}
        })
        .then((response) => {
            // Handle the response data
            console.log("Create Post request succesful", response);
        })
        .catch((error) => {
            // Handle the error
            console.error('Error making Create Post request', error);
        })
      }



    return (
<Button onClick={() => handleCreatePost()}>Post
</Button>
    );

};

export default CreatePost;
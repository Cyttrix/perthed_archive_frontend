import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "../HomePage/HomePage.css";
import LikeButton from "../../components/LikeButton/LikeButton";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains user information (id, userName, email) from the decoded token
  // The "token" value is the JWT token sent from the backend that you will send back in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [token]);

  const fetchPosts = async () => {
    try {
      let response = await axios.get("https://localhost:5001/api/post", {
        
      });
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div style={{marginLeft:40}}>
      {console.log(user)}
      <h1>Welcome {user.userName}!</h1>
      <h2 style={{marginTop:20, marginBottom:20}}>Activity Feed</h2>
      {posts.reverse().map((post) => (
          <div className="postborder" key={post.id}>
            <div>
             {post.userName} {post.text} {post.mediaTitle}
             </div>
             <LikeButton/>
          </div>
        ))}
    </div>
  );
};

export default HomePage;

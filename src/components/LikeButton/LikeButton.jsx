import React from "react";
import "./LikeButton.css";
import { useState } from "react";
import { ReactComponent as HeartIcon} from "../../assets/heart-svgrepo-com.svg";

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
  
    const handleClick = () => {
      setLiked(!liked);
    };
  
    const buttonStyle = {
      backgroundColor: liked ? 'pink' : 'lightblue',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    };
  
    return (
      <button style={buttonStyle} onClick={handleClick}>
        <HeartIcon color={liked ? 'pink' : 'lightblue'} style={{ marginRight: '5px' }} height={25} width={25}/>
        
      </button>
    );
  };

export default LikeButton;
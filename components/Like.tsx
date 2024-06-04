"use client";
import React, { useState } from 'react';
import { Heart } from 'lucide-react'; // Import Lucide Heart icon
import './Likestyle.css';
const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="like-button" onClick={handleLike}>
   
      <Heart className={`text-white heart-icon${liked ? ' liked' : ''}`} />
    </div>
  );
};

export default LikeButton;

import { useState } from "react";

export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);
    let [clicks, setClicks] = useState(0);

    let toggleLike = ()=>{
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    }
    let likedStyles={
        color:"red",
    }
    return(
        <>
            <p>No.of clicks : {clicks}</p>
            <p onClick={toggleLike}>
                {
                    isLiked ? (<i className="fa-solid fa-heart" style={likedStyles}></i>) : (<i className="fa-regular fa-heart"></i>)
                }
            </p>
        </>
    );
}
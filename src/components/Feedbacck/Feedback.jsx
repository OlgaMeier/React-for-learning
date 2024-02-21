import React, {useState} from "react";
import Button from "../Button/Button";
import "./styles.css";

function Feedback(){
    const [likes,setLikes]=useState(0);
    const [dislikes, setDislikes]=useState(0);

    const handleLike =() =>{
        setLikes(likes+1);
    };

    const handleDislike =() =>{
        setDislikes(dislikes+1);
    };

    const resetResults=() =>{
        setLikes(0);
        setDislikes(0);
    };
    return(
        <div className = "feedback-container">
            <div className="button-container">
             <Button name="👍 Like" onClick={handleLike}/>
             <span>{likes}</span>
            </div>
            <div className="button-container">
             <Button name="👎 Dislike" onClick={handleDislike}/>
             <span>{dislikes}</span>
            </div>
            <Button name="Reset Results" onClick={resetResults}/>
        </div>
    );     
}
export default Feedback;
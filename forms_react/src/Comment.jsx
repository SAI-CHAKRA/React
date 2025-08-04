import { useState } from 'react';
import './Comment.css';
import CommentsForm from "./CommentsForm";

export default function Comment(){
    let [comments, setComments] = useState([]);

    let addNewComment = (comment) =>{
        setComments((currData)=>[...currData,comment]);
        //console.log("added new comment");
    }

    return(
        <>
        <div>
            <h3>All Comments</h3>
            {comments.map((comment,idx)=>(
                <div className="comment" key={idx}>
                <span>{comment.remarks}</span>
                &nbsp;
                <span>(rating = {comment.rating})</span>
                <p>- {comment.username}</p>
            </div>
            ))}
        </div>
        <CommentsForm addNewComment={addNewComment} />
            {/* Above is the indirect way of passing props to the parent node, in general we can pass only props to child but not to parent in direct way, so this is the indirect way of passing props to the parent node  */}
        </> 
    );
    
}
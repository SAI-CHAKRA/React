import { useState } from "react";
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    // only for the username field we are checking for the error, we can check for other fields as well
    if (!values.username) {
      errors.username = 'username cannot be empty';
    } 
    return errors;
}


export default function CommentsForm({addNewComment}){

    const formik = useFormik({
        initialValues: {
          username: '',
          comment: '',
          rating: 5,
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        // addNewComment(formik.values);
        },

      });

     

    // formik will handle all this for us
    // let [formData, setFormData]=useState({
    //     username:"",
    //     comment:"",
    //     rating:0,
    // });
    // let handleInputChange=(event)=>{
    //     setFormData((currData) => {
    //         return{...currData,
    //             [event.target.name]:event.target.value}
    //     })
    // }
    // let handleSubmit=(event)=>{
    //     event.preventDefault();
    //     console.log(formData);
    //     addNewComment(formData);
    //     setFormData({
    //         username:"",
    //         comment:"",
    //         rating:0,
    //     });
    // }


    return(
        <div>
            <h4>Enter your comments</h4>
             <form onSubmit={formik.handleSubmit}>

                <label htmlFor="username" >Username: </label>
                <input type="text" placeholder="enter username" name="username"  onChange={formik.handleChange} value={formik.values.username} id="username"/>
                {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null}
                <br/><br/>

                <label htmlFor="comment" >Comment: </label>
                <textarea placeholder="enter your comments" name="comment"  onChange={formik.handleChange} value={formik.values.comment} id="comment"></textarea>
                <br/><br/>

                <label htmlFor="rating" >rating : </label>
                <input type="number" placeholder="rating" min={0} max={5} name="rating"  onChange={formik.handleChange}
                value={formik.values.rating} id="rating"/>
                <br/><br/>
                
                <button type="submit">Add Comment</button>
             </form>
        </div>
    );
}
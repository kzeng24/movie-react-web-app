import React from "react";
import Rating from "@mui/material/Rating"
import { useDispatch } from "react-redux";
import { deleteReviewThunk } from "../../services/reviews-thunks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = (
    { review }
/*     {
        review = {
            criticId: "user123",
            title: "Best Movie ever",
            rating: 5,
            description: "description"
        }
    } */
) => {
    const dispatch = useDispatch();
    const deleteReviewHandler = (id) => {
      dispatch(deleteReviewThunk(id));
    }   
    return (
        <li>
            <button className="bi bi-x-lg float-end" 
                    onClick={() => deleteReviewHandler(review._id)}><FontAwesomeIcon icon={faXmark} /></button>
            <a href="#"><h3>{review.criticId}</h3></a> 
            <h4>{review.title}</h4>
            <Rating name="read-only" value={review.rating} readOnly />
            <p>Description: {review.description}</p><br/>
            <hr />
        </li>
    )
}

export default ReviewItem;
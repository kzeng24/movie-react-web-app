import React from "react";
import MovieThumbnail from "../movieStockImg.jpg"
import "../../index.css"

function CriticReviewListItem({ title, rating, summary }) {
    return (
        <a
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start wd-movie-list-item"
        >
            <div className="row p-3 wd-movie-list-row">
                <div className="col-3 wd-movie-list-image">
                    <img src={MovieThumbnail}
                    className="float-left mr-3"
                    />
                </div>
                <div className="col-9 wd-movie-list-info">
                    <h3>Title</h3>
                    <div>
                        Review Rating:
                        <br />
                    </div>
                </div>
            </div>
        </a>
    )
};

export default CriticReviewListItem;
import React from "react";
import { FaBookmark } from "react-icons/fa";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

function SavedBtn({className}) {
  return (
    <button
      className={`square rounded-circle wd-purpleBackground wd-circleBtn wd-whiteText ${className}`}
    >
      <FaBookmark size={25} />
    </button>
  );
}

export default SavedBtn;
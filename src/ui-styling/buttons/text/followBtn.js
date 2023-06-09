import React from "react";
import "../../index.css";

function FollowBtn({text, isFollowed, fn}) {
  return (
    <button
    onClick={fn}
      className={`${
        isFollowed
          ? "wd-purpleBackground"
          : "wd-pinkBackground"
      } wd-whiteText rounded-pill p-2 m-1`}
    >
      {text}
    </button>
  );
}

export default FollowBtn;
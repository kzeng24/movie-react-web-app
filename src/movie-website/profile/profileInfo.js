import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import "./index.css"
import "../../ui-styling/index.css"
import TagBtn from "../../ui-styling/buttons/text/tagBtn";
import { FaUserCircle } from "react-icons/fa";
import { removeUserFromLocalStorage } from "../reducers/auth-reducer";
import { profileThunk, logoutThunk, updateUserThunk, fetchProfileByUsernameThunk }
  from "../services/auth-thunks";
import FollowBtn from "../../ui-styling/buttons/text/followBtn";
import BlackTextBtn from "../../ui-styling/buttons/text/blackTextBtn";

function ProfileInfo() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const [isLoading, setIsLoading] = useState(true);
  const [followedCritics, setFollowedCritics] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams(); // Get the username from the URL
  const isCurrentUserProfile = currentUser?.username === username; // Check if it's the currentUser's profile
  const isAnotherViewer = currentUser?.role === "VIEWER"; // Check if it's another viewer seeing this profile


  const save = () => {
    console.log(profile);
    dispatch(updateUserThunk(profile));
  };
  const handleLogout = async () => {
    try {
      const actionResult = await dispatch(logoutThunk());
      if (logoutThunk.fulfilled.match(actionResult)) {
        dispatch(removeUserFromLocalStorage());
        navigate("/login");
      } else {
        throw new Error(actionResult.error.message);
      }
    }
    catch (e) {
      alert(e);
    }
  };

  const handleFollow = async () => {
    try {
      if (isAnotherViewer) {
        console.log(followedCritics.filter((critic) => critic._id === profile._id));
        if (followedCritics.filter(critic => critic._id === profile._id).length === 0) {
          alert("Followed this critic");
          const newFollowingList = followedCritics.concat(profile);
          const updatedViewer = {
            ...currentUser,
            followedCritics: newFollowingList,
          };
          dispatch(updateUserThunk(updatedViewer));
        } else {
          throw new Error("Already following this critic");
        }
      }
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    const getProfile = async () => {
      // Fetch the profile based on the username in the URL
      const { payload } = await dispatch(fetchProfileByUsernameThunk(username));
      setProfile(payload);
      setIsLoading(false);
    };
    getProfile();

    // if the current user is a viewer, load the critics that they follow
    if (isAnotherViewer) {
      setFollowedCritics(currentUser.followedCritics);
    }

  }, [username, currentUser]); // Recompute when these variables change

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="wd-profile-info-background row wd-padding">
        <div className="wd-details-col col-6">
          <h2>
            {profile.firstName} {profile.lastName}
            {isCurrentUserProfile && " (You)"}
          </h2>
          <br />
          <h4>@{profile.username}</h4>
          {isCurrentUserProfile && (
            <>
              <label className="pe-2">First Name</label>
              <input
                type="text"
                value={profile.firstName}
                onChange={(e) =>
                  setProfile({ ...profile, firstName: e.target.value })
                } // Added this line
              />
              <br />
              <label className="pe-2 mb-2">Last Name</label>
              <input
                type="text"
                value={profile.lastName}
                onChange={(e) =>
                  setProfile({ ...profile, lastName: e.target.value })
                } // Added this line
              />
            </>
          )}

          <br />
          <br />
          <span>
            <TagBtn text={profile.role} />
            {!isCurrentUserProfile && isAnotherViewer && (
              <FollowBtn
                text={"FOLLOW"}
                followed={false}
                fn={() => handleFollow()}
              />
            )}
          </span>
          <br />
          <br />
          {isCurrentUserProfile && (
            <>
              <BlackTextBtn text={"Sign Out"} fn={handleLogout} />
              <BlackTextBtn text={"Save"} fn={save} />
              <br />
              <br />
            </>
          )}
        </div>
        <div className="wd-photo-col d-none d-md-block col-md-6">
          <FaUserCircle size={300} />
        </div>
      </div>
    );
  }
}

export default ProfileInfo;

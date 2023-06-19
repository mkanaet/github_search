import React from "react";
import RepositoryList from "./RepositoryList";
import "./UserDisplay.css";
import PropTypes from "prop-types";

function UserDisplay(props) {
  function onResetHandler(event) {
    props.newSearch();
  }

  const avatar = props.infoToDisplay.avatar_url;
  const name = props.infoToDisplay.name;
  const bio = props.infoToDisplay.bio;
  const location = props.infoToDisplay.location;
  const repos = props.repoToDisplay;
  return (
    <div className="form">
      <div className="header_info">
        <span id="avatar">
          <img id="img" src={avatar}></img>
        </span>
        <span id="name">{name}</span>
      </div>
      <p>BIO: {bio}</p>
      <p>LOCATION: {location}</p>
      <p>REPOSITORIES:</p>
      <RepositoryList className="list" repoData={repos}></RepositoryList>
      <div>
        <button onClick={onResetHandler}>New search</button>
      </div>
    </div>
  );
}

UserDisplay.propTypes = {
  infoToDisplay: PropTypes.object,
  repoToDisplay: PropTypes.array,
  newSearch: PropTypes.func,
};

export default UserDisplay;

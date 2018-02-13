import React, { Component } from 'react';

import './Profile.scss';

const Profile = function(props) {
  return (
    <div className="profile-container">
      <img className="profile-pic" src={props.profilePicture}/>
      <h3 className="user-name">Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
    </div>
  );
};

export default Profile;

import React, {Component} from 'react';
import axios from 'axios';

import './index.scss';

import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Reviews from './Components/Reviews/Reviews';

export default class App extends Component {
  constructor(props) {
    super(props);

    // temporarily hardcoding variables to test this out.
    this.state = {
      isLoggedIn: false,
      title: 'Profile Page',
      name: 'Plankton',
      profilePicture: 'http://www.mascotdesigngallery.com/wp/wp-content/uploads/2013/11/21897-cartoons-drawings-i-needed-to-use-a-picture-of-plankton-from-spongebob_1920x1080.jpg',
      email: 'plankton@plankton.org',
      reviews: [],
      journals: [],
    }
  }
  // this will call the user profile on page load.
  // componentDidMount() {
  //   this.showProfile()
  // };

  showProfile() {
    axios.get('https://localhost:3000/users/1')
      .then((user) => {
        const { name, email } = user;
        const profilePicture = user.profile_picture;
        this.setState({
          name: name,
          profilePicture: profilePicture,
          email: email,
        });
      })
      .catch(console.error);
  }

  getReviews() {
    axios.get('https://localhost:3000/users/1/reviews')
      .then((reviews) => {
        // write this function.
      })
  }

  render() {
      return (
        <div>
          <Navbar />
          <h1>{this.state.title}</h1>
          <Profile
          profilePicture={this.state.profilePicture}
          name={this.state.name}
          email={this.state.email}
          />
          <Reviews />
        </div>
      );
  };
};

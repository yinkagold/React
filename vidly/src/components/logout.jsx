import React, { Component } from "react";
import auth from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    auth.logout();
    window.location = "/"; // redirects user to the homepage
  }
  render() {
    return null;
  }
}

export default Logout;

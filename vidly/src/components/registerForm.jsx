import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email()
      .required()
      .label("Username"),

    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("name")
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginIwthJwt(response.headers["x-auth-token"]);
      window.location = "/";
      //this.props.history.push("/"); this takes users to the homepage
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderRegisterButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;

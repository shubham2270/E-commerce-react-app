import React, { useState } from "react";

import { SignInWrapper } from "./styles";
import FormInput from "../FormInput/index";
import CustomButton from "../CustomButton";

const SignIn = () => {
  const [credential, setCredential] = useState({ email: "", passowrd: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setCredential({ email: "", passowrd: "" });
  };

  const handleChange = (event) => {
    const { value, name } = event;
    setCredential({ [name]: value });
  };

  return (
    <SignInWrapper>
      <h2>I already have a account</h2>
      <span>Sign in with your email and passowrd</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={credential.email}
          required
          label="Email"
          handleChange={handleChange}
        />

        <FormInput
          name="password"
          type="password"
          value={credential.password}
          required
          label="Password"
          handleChange={handleChange}
        />
        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </SignInWrapper>
  );
};

export default SignIn;

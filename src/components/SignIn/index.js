import React, { useState } from "react";

import { SignInWrapper, Buttons } from "./styles";
import FormInput from "../FormInput/index";
import CustomButton from "../CustomButton";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [credential, setCredential] = useState({ email: "", password: "" });

  const { email, password } = credential;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredential({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredential({ ...credential, [name]: value });
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
        <Buttons>
          <CustomButton type="submit">Sign</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </Buttons>
      </form>
    </SignInWrapper>
  );
};

export default SignIn;

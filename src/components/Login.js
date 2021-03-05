import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg"
          alt=""
        />
        <h1>Iniciar Sesion </h1>
        <p>ijaz.slack.com</p>
        <Button onClick={signIn}>Iniciar con Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  padding: 48px 0 40px;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 0fr);
  height: 100vh;
  justify-content: center;
`;
const LoginInnerContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > Button {
    margin-top: 60px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: #fff;
  }
`;

import { connect } from "react-redux";
import React, { useState } from "react";
import styled from "styled-components";

import { Input, Button } from "../../widgets";

import { UserStore } from "../../store/controllers/User.store";
import history from "../../utils/history";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled.div`
  box-shadow: ${props => props.theme.boxShadow};
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.padding};
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.accent};
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

function LoginPageUI({ login, isLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = async () => {
    try {
      await login({ email, password });
      history.push("/admin");
    } catch (err) {
      setErrorMessage(err.message);
    }
  };
  return (
    <Container>
      <LoginBox>
        <h1>Login</h1>
        <Input
          autoFocus
          placeholder="E-mail"
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          style={{ marginTop: 20 }}
          type="password"
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
        />
        <Button
          onClick={onLogin}
          disabled={!email || !password || isLoading}
          style={{ marginTop: 30 }}
        >
          {isLoading ? "Logging In..." : "Log In"}
        </Button>
        {Boolean(errorMessage) && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </LoginBox>
    </Container>
  );
}

const LoginPage = connect(
  state => ({ isLoading: state[UserStore.name].isLogging }),
  { login: UserStore.actions.login }
)(LoginPageUI);

export { LoginPage };

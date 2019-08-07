import { connect } from "react-redux";
import React from "react";
import styled from "styled-components";

import history from "../../utils/history";

import { UserStore } from "../../store/controllers/User.store";
import splash from "../../splash.jpg";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${splash});
`;

const Title = styled.div`
  color: ${props => props.theme.white};
  font-size: 80px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const Navbar = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  box-shadow: ${props => props.theme.boxShadow}
  background: ${props => props.theme.white};
  padding: 0 20px;
`;

const NavbarItem = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

function WelcomePageUI({ isLoggedIn }) {
  return (
    <Container>
      <Navbar>
        {isLoggedIn ? (
          <NavbarItem onClick={() => history.push("/admin")}>Admin</NavbarItem>
        ) : (
          <NavbarItem onClick={() => history.push("/login")}>Login</NavbarItem>
        )}
      </Navbar>
      <Content>
        <Title>COMING SOON</Title>
      </Content>
    </Container>
  );
}
const WelcomePage = connect(state => ({
  isLoggedIn: UserStore.selectors.isLoggedIn(state)
}))(WelcomePageUI);

export { WelcomePage };

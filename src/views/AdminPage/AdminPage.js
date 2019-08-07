import React from "react";

import styled from "styled-components";
import { UsersTable } from "./UsersTable";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.padding};
`;

const Title = styled.div`
  font-weight: bold;
`;

function AdminPage({ user }) {
  return (
    <Container>
      <Title>Welcome {user.email}</Title>

      <UsersTable />
    </Container>
  );
}

AdminPage.defaultProps = {
  user: {
    email: "unknown user"
  }
};

export { AdminPage };

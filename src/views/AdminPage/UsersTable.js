import React, { useEffect } from "react";

import styled from "styled-components";
import { connect } from "react-redux";
import { UsersStore } from "../../store/controllers/Users.store";

const useMountEffect = func => useEffect(func, []);

const List = styled.div`
  padding: 10px 0;
`;
const Row = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.gray3};
`;

function UsersTableUI({ users, loadUsers }) {
  useMountEffect(() => {
    const init = async () => {
      try {
        await loadUsers();
      } catch (err) {
        alert(err.message);
      }
    };
    init();
  });
  return (
    <List>
      <Row>
        There are currently <strong>{users.length}</strong> users signed up
      </Row>
      {users.map(user => (
        <Row key={user._id}>
          <strong>{user._id}</strong> {user.email} {user.admin ? "Admin" : ""}
        </Row>
      ))}
    </List>
  );
}
const UsersTable = connect(
  state => ({
    users: UsersStore.selectors.get(state)
  }),
  { loadUsers: UsersStore.actions.load }
)(UsersTableUI);

export { UsersTable };

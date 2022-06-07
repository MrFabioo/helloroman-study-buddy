import React from "react";
import { users } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { Wrapper } from "./UsersList.style";

const UsersList = () => {
  return (
    <Wrapper>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </Wrapper>
  );
};

UsersList.propTypes = {};

export default UsersList;

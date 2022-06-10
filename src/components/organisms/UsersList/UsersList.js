import React from "react";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { StyledList, StyledTitle, Wrapper } from "./UsersList.styles";

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Users list</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem
              deleteUser={deleteUser}
              key={userData.name}
              userData={userData}
            />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

UsersList.propTypes = {};

export default UsersList;

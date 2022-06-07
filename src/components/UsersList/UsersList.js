import React from "react";
import PropTypes from "prop-types";
import { users } from "../../data/users";
import UsersListItem from "../UsersListItem/UsersListItem";

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </div>
  );
};

UsersList.propTypes = {};

export default UsersList;

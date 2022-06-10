import React, { useState } from "react";
import UsersList from "components/organisms/UsersList/UsersList";
import { users as usersData } from "data/users";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyles";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "components/organisms/Form/Form";

const initialFormState = {
  name: "",
  attendance: "",
  average: "",
};

function Root() {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add user</Link>
          </nav>
          <Routes>
            <Route
              path="/"
              element={<UsersList deleteUser={deleteUser} users={users} />}
            />
            <Route
              path="/add-user"
              element={
                <Form
                  formValues={formValues}
                  handleAddUser={handleAddUser}
                  handleInputChange={handleInputChange}
                />
              }
            />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}

Root.propTypes = {};

export default Root;

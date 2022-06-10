import React, { useState } from "react";
import { users as usersData } from "data/users";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyles";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainTemplate from "components/templates/MainTemplate";
import AddUser from "views/AddUser";
import Dashboard from "./Dashboard";

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
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route
                path="/"
                element={<Dashboard deleteUser={deleteUser} users={users} />}
              />
              <Route
                path="/add-user"
                element={
                  <AddUser
                    formValues={formValues}
                    handleAddUser={handleAddUser}
                    handleInputChange={handleInputChange}
                  />
                }
              />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

Root.propTypes = {};

export default Root;

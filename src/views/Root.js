import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyles";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import AddUser from "views/AddUser";
import Dashboard from "./Dashboard";

function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Navigate replace to="/group/A" />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/group/:id" element={<Dashboard />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

Root.propTypes = {};

export default Root;

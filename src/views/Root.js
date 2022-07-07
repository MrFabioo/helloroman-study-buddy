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
import Dashboard from "./Dashboard";
import Modal from "components/organisms/Modal/Modal";
import { Button } from "components/atoms/Button/Button";

function Root() {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          {isModalOpen ? (
            <Modal
              handleClose={() => {
                setModalOpen(false);
              }}
            />
          ) : null}
          <Wrapper>
            <Button onClick={() => setModalOpen(true)}>Open modal</Button>
            <Routes>
              <Route path="/" element={<Navigate to="/group/A" />} />
              <Route path="/group" element={<Navigate to="/group/A" />} />
              <Route path="/group/:id" element={<Dashboard />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default Root;

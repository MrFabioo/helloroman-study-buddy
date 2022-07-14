import React from "react";
import { Wrapper } from "./Root.styles";
import { Routes, Route, Navigate } from "react-router-dom";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import Dashboard from "./Dashboard";
import Notes from "./Notes";

const AuthenticatedApp = () => (
  <MainTemplate>
    <Wrapper>
      <Routes>
        <Route path="/" element={<Navigate to="/group/A" />} />
        <Route path="/group" element={<Navigate to="/group/A" />} />
        <Route path="/group/:id" element={<Dashboard />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Wrapper>
  </MainTemplate>
);

export default AuthenticatedApp;

import React from "react";
import Navigation from "components/organisms/Navigation/Navigation";
import { Wrapper } from "./MainTemplate.styles";
import { SearchBar } from "components/organisms/SerchBar/SerchBar";
import NewsSection from "../NewsSection/NewsSection";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </NewsSection>
    </Wrapper>
  );
};

export default MainTemplate;

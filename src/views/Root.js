import UsersList from "components/organisms/UsersList/UsersList";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyles";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
}

Root.propTypes = {};

export default Root;

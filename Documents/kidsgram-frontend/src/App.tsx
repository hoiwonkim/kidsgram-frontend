// ./src/App.tsx
import React from 'react';
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/themes";
import Router from "./Router";
import client, { isDarkModeVar } from "./apollo";

const App: React.FC = () => {
  const isDarkMode: boolean = useReactiveVar(isDarkModeVar);

  return (
    <>
      <ApolloProvider client={client}>
        <HelmetProvider>
          <ThemeProvider theme={isDarkMode === true ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Router />
          </ThemeProvider>
        </HelmetProvider>
      </ApolloProvider>
    </>
  );
};

export default App;

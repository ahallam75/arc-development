import React from "react";
import Theme from "./ui/Theme";
import Header from "../components/ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello!!!
    </ThemeProvider>
  );
}

export default App;

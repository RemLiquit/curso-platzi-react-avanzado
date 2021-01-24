import React from "react";
import { ListOfCategories } from "./ListOfCategories";
import { GlobalStyle } from "./GlobalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ListOfCategories />
    </div>
  );
};

export default App;

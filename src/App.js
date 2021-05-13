import React from "react";
import SearchResultContainer from "./components/SearchResultContainer";
import Jumbotron from "./components/Jumbotron/Jumbotron";

function App() {
  return(
    <>
      <Jumbotron title="Employee Directory" subtext="Enter search criteria to find and filter employees."/>
      <SearchResultContainer />
    </>
    );
    
}

export default App;

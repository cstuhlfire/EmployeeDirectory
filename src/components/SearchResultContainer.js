import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm/SearchForm";
import ResultList from "./ResultList/ResultList";
import Container from "./Container/Container";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the randomuser API for sample employees
  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  // when the input changes set the state to the current value to re-render
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the randomuser API for `this.state.search`
  handleGetNew = event => {
    event.preventDefault();
    this.searchEmployees();
  };

  sortByName = event => {
    let nameA;
    let nameB;
    let sortedResults = this.state.results;
    event.preventDefault();

    let nameType = event.target.getAttribute("data-name");
    let sortType = event.target.getAttribute("data-sort");
    
    // sort by name
    sortedResults.sort(function(a, b) {
      if (nameType === "first") {
        nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
        nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
      } else if (nameType === "last") {
        nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
        nameB = b.name.last.toUpperCase(); // ignore upper and lowercase    
      } 

      if (sortType === "asc") {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      } else if (sortType === "desc") {
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
      }
      // names must be equal
      return 0;
    });

    this.setState({ results: sortedResults })
  }

  render() {
    return (
    <>
      <Container>
        <SearchForm search={this.state.search}
                    handleGetNew={this.handleGetNew}
                    handleInputChange={this.handleInputChange}/>
        <ResultList search={this.state.search} 
                    results={this.state.results} 
                    sortByName={this.sortByName}/>
      </Container>
    </>
    );
  }
}

export default SearchResultContainer;

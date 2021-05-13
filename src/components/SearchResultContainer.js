import React, { Component } from "react";
import SearchForm from "./SearchForm/SearchForm";
import ResultList from "./ResultList/ResultList";
import API from "../utils/API";
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
    let sortedResults;

    event.preventDefault();

    sortedResults = [];
    console.log(this.state.results);
    this.setState({ results: sortedResults })
  }

  render() {
    return (
    <>
      <Container>
        <SearchForm
          search={this.state.search}
          handleGetNew={this.handleGetNew}
          handleInputChange={this.handleInputChange}
          sortByName={this.sortByName}
        />
        <ResultList search={this.state.search} results={this.state.results} />
      </Container>
    </>
    );
  }
}

export default SearchResultContainer;

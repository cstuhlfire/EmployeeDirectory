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

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the randomuser API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees();
  };

  render() {
    return (
    <>
      <Container>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList search={this.state.search} results={this.state.results} />
      </Container>
    </>
    );
  }
}

export default SearchResultContainer;

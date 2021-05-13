import React from "react";
import "./styles.css";

function SearchForm(props) {
  return (
      <form>
        <div className="form-group custom-form">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for employees"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
          </button>
        </div>
      </form>
  );
}

export default SearchForm;

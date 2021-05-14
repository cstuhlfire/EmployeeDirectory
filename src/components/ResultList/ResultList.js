import React from "react";
import "./styles.css";

function ResultList(props) {
  let employees = props.results;

  employees  = employees.filter((employee) => employee.name.first.toLowerCase().includes(props.search.toLowerCase()) === true || 
                                              employee.name.last.toLowerCase().includes(props.search.toLowerCase()) === true);
 
  // map employees results array into table rows
  let employeeRows = employees.map(employee => (
    <tr key={employee.cell}>      
      <td style={{textAlign: "center"}}>{<img alt={employee.name.last} className="img-fluid" src={employee.picture.medium} />}</td>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.email}</td>
      <td>{employee.cell}</td>
    </tr>
    ));

    return (
      // create header for table
      <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th style={{textAlign: "center"}} scope="col">Image</th>
              <th scope="col">First<span className="custom-btn" data-name="first" onClick={props.sortByName}>🔽</span></th>
              <th scope="col">Last<span className="custom-btn" data-name="last" onClick={props.sortByName}>🔽</span></th>
              <th scope="col">Email</th>
              <th scope="col">Cell Phone</th>
            </tr>
          </thead>
          <tbody>
            {/* add rows */}
            {employeeRows}
          </tbody>
      </table>
  );
}

export default ResultList;

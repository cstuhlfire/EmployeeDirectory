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
      <div>

      <p><i>Click on the up and down arrows to sort by column</i></p>
      <table className="table table-bordered table-hover">
          <thead> 
            <tr>
              <th style={{textAlign: "center"}} scope="col">Image</th>
              <th scope="col">First Name
                {/* <span className="custom-btn custom-btn-down" data-name="first" data-sort="asc" onClick={props.sortByName}>🔽</span> */}
                <span className="custom-btn custom-btn-down" data-name="first" data-sort="asc" onClick={props.sortByName}>&#128317;</span>
                <span className="custom-btn" data-name="first" data-sort="desc" onClick={props.sortByName}>&#128316;</span>
              </th>
              <th scope="col">Last Name
                <span className="custom-btn custom-btn-down" data-name="last" data-sort="asc" onClick={props.sortByName}>&#128317;</span>
                <span className="custom-btn" data-name="last" data-sort="desc" onClick={props.sortByName}>&#128316;</span>
              </th>
              <th scope="col">Email</th>
              <th scope="col">Cell Phone</th>
            </tr>
          </thead>
          <tbody>
            {/* add rows */}
            {employeeRows}
          </tbody>
      </table>

      </div>
  );
}

export default ResultList;

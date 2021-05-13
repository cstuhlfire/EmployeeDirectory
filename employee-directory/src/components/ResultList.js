import React from "react";

function ResultList(props) {
  const employees = props.results;

  // let notPurchased = groceries.filter((grocery) => grocery.purchased === false)
  let employeeRows = employees.map(employee => (
    <tr>      
      <td>{<img alt={employee.name.last} className="img-fluid" src={employee.picture.thumbnail} />}</td>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.email}</td>
      <td>{employee.cell}</td>
    </tr>
    ));

    return (
      <div class="container">

        <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Cell Phone</th>
              </tr>
            </thead>
            <tbody>
              {employeeRows}
            </tbody>
        </table>

      </div>
  );
}

export default ResultList;

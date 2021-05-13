import React from "react";

function ResultList(props) {
  const employees = props.results;

  // let notPurchased = groceries.filter((grocery) => grocery.purchased === false)
  let employeeRows = employees.map(employee => (
    <li className="list-group-item" key={employee.id.value}>
        {<img alt={employee.name.last} className="img-fluid" src={employee.picture.thumbnail} />}
        {employee.name.first.trim()+" "+employee.name.last.trim()}
    </li>));

    return (
    
    <ul className="list-group">
      {employeeRows}
    </ul>
  );
}

export default ResultList;

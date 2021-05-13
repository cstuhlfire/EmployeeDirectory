import React from "react";

function ResultList(props) {
  const employees = props.results;
  let x=0;

  console.log (props.results.length);
  for (let i = 0; i < props.results.length; i++) {
    
    console.log(props.results[i].name.title.trim()+" "+ 
                props.results[i].name.first.trim()+" "+
                props.results[i].name.last.trim());
    
  }
  return (
    
    <ul className="list-group">
      {employees.map(employee => (
        <li className="list-group-item" key={x++}>
          {employee.name.title.trim()}
          {/* <img alt={result.title} className="img-fluid" src={result.images.original.url} /> */}
        </li>
      ))}
    </ul>
  );
}

export default ResultList;

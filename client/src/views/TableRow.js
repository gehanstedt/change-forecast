import React from "react";

function TableRow(props) {
// console.log (`---TableRow---`)
// console.log (props);
  const change = props.change;
  return (
    <tr>
      <td>
        {change.number_affected}
      </td>
      <td>
        {change.number}
      </td>
      <td>
        {change.reviewed}
      </td>
      <td>
        {change.company}
      </td>
      <td>
        {change.production_system}
      </td>
      <td>
        {change.short_description}
      </td>
      <td>
        {change.start_date}
      </td>
      <td>
        {change.end_date}
      </td>
      <td>
        {change.class}
      </td>
      <td>
        {change.location}
      </td>
      <td>
        {change.time_zone}
      </td>
      <td>
        {change.justification}
      </td>
      <td>
        {change.assignment_group}
      </td>
      <td>
        {change.sys_tag}
      </td>
    </tr>
  );
}

export default TableRow;

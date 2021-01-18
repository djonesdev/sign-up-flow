import React from "react"

import "./UserTable.scss"

function UserTable({ tableData }) {
  const getOptInStatus = (status) => (status ? "Opted In" : "Opted Out");

  return (
    <table className="c-user-table">
      <tr className="c-user-table__table-header">
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>DOB</th>
        <th>OptIn Status</th>
      </tr>
      
      {tableData.map(data => (
        <tr className="c-user-table__table-row">
          <td className="c-user-table__table-cell">{data.name}</td>
          <td className="c-user-table__table-cell">{data.email}</td>
          <td className="c-user-table__table-cell">{data.gender}</td>
          <td className="c-user-table__table-cell">{data.dob}</td>
          <td className="c-user-table__table-cell">{getOptInStatus(data.optInStatus)}</td>
        </tr>
      ))}
    </table>
  );
}

export default UserTable;

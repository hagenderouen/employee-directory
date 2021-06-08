import React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';

const columns = [
  { field: "id", headerName: "Employee ID", flex: 1},
  { field: "firstName", headerName: "First Name", flex: 1},
  { field: "lastName", headerName: "Last Name", flex: 1},
  { field: "email", headerName: "Email", flex: 1}
];

export default function Grid(props) {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
      components={{
          Toolbar: GridToolbar
      }}
      rows={props.userData.results.map(user => (
        {
            id: user.id.value,
            firstName: user.name.first,
            lastName: user.name.last,
            email: user.email
        }
      ))} 
      columns={columns} 
      />
    </div>
  );
}

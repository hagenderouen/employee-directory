import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import userAPI from '../utils/userAPI';
import userDemoData from '../userDataRes.json';

const columns = [
  { field: "id", headerName: "Employee ID", flex: 1},
  { field: "firstName", headerName: "First Name", flex: 1},
  { field: "lastName", headerName: "Last Name", flex: 1},
  { field: "email", headerName: "Email", flex: 1}
];

function Grid() {

    const [users, setUsers] = useState(userDemoData);

    useEffect(() => {
        userAPI.get()
        .then(res => setUsers({ results: res.data.results }))
        .catch(err => console.log(err));
    }, []);

    return (
        <div style={{ height: 500, width: "100%" }}>
        <DataGrid
        components={{
            Toolbar: GridToolbar
        }}
        rows={users.results.map((user, idx) => (
            {
                id: idx,
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

export default Grid;

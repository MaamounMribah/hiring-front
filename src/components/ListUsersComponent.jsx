import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import UserService from '../Services/UserService';
import { useNavigate } from 'react-router-dom';



const ListUsersComponent = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const addUser = () => {
    navigate('/create-user');
  }

  const editUser = (id) => {
    // Redirect to the edit user page with the user ID
    navigate(`/update-user/${id}`);
  }

  
  
  useEffect(() => {
    UserService.getUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="container mt-3">
      <h2 className="text-center mb-4">Users List</h2>
      <div className="row">
        <div className="mb-3">
          <button className="btn-custom" onClick={addUser}>
            Add User
          </button>
        </div>
      </div>

      <div className="row">
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Username</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => editUser(user.id)} className="btn btn-info" >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}


export default ListUsersComponent;

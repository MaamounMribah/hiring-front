import React, { useState, useEffect } from 'react';
import UserService from '../Services/UserService';

const UpdateUserComponent = (props) => {
  const [user, setUser] = useState({
    id: '',
    username: '',
    firstname: '',
    lastname: '',
    email: '',
  });

  useEffect(() => {
    if (props.match && props.match.params && props.match.params.id) {
      const userId = props.match.params.id;

      UserService.getUserById(userId).then((res) => {
        setUser(res.data);
      });
    }
  }, [props.match]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdateUser = () => {
    console.log('User data before update:', user);

    UserService.updateUser(user.id, user)
      .then((res) => {
        console.log('User updated successfully!', res.data);
        // Redirect to the user list or another page after the update
      })
      .catch((error) => {
        console.error('Error updating user:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
        }
      });
  };

  return (
    <div className="container mt-3">
      <h2>Update User</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Firstname:</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            value={user.firstname}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Lastname:</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            value={user.lastname}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"    
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleUpdateUser}>
          Update User
        </button>
      </form>
    </div>
  );
}

export default UpdateUserComponent;

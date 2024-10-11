import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URLS } from '../api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Style.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(API_URLS.GET_ALL_USERS, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data)
      setUsers(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to load users');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUpdate = (user) => {
    navigate('/update-user', { state: { user } });
  };

  const handleDelete = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API_URLS.DELETE_USER(userId)}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('User deleted successfully');
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to delete user');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className='title'>Registered Users</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th className='last-hidden' >Name</th>
            <th >Email</th>
            <th className='hidden' >Phone</th>
            <th className='hidden' >Profession</th>
            <th >Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className='last-hidden'>{user.name}</td>
              <td>{user.email}</td>
              <td className='hidden'>{user.phone}</td>
              <td className='hidden'>{user.profession}</td>
              <td>
                <button className="btn action-btn btn-warning me-2" onClick={() => handleUpdate(user)}>Update</button>
                <button className="btn action-btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

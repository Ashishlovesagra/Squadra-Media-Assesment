/* eslint-disable react/prop-types */
import axios from 'axios';
import { API_URLS } from '../api';
import { toast } from 'react-toastify';

const DeleteUser = ({ userId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(API_URLS.DELETE_USER(userId), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('User deleted successfully');
      onDelete(userId);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger">Delete</button>
  );
};

export default DeleteUser;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URLS } from '../api';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';

const UpdateUser = () => {
  const location = useLocation(); // To get the passed user data
  const navigate = useNavigate();
  const user = location.state?.user; // Get user from the state

  const [updatedUser, setUpdatedUser] = useState({
    name: '',
    phone: '',
    profession: '',
  });

  useEffect(() => {
    if (user) {
      setUpdatedUser({
        name: user.name,
        phone: user.phone,
        profession: user.profession,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(`${API_URLS.UPDATE_USER}/${user._id}`, updatedUser, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('User updated successfully');
      navigate('/company-info');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error updating user');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={updatedUser.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={updatedUser.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Profession</label>
          <select
            className="form-select"
            name="profession"
            value={updatedUser.profession}
            onChange={handleChange}
            required
          >
            <option value="Software Engineer">Software Engineer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Designer">Designer</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;

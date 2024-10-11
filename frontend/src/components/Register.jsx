import { useState } from 'react';
import axios from 'axios';
import { API_URLS } from '../api';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import './Style.css';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    profession: '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URLS.REGISTER, userData, {
        headers: { 'Content-Type': 'application/json' },
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <h2 className='title'>Register</h2>
      <form className='register-form' onSubmit={handleSubmit}>
          <input type="text" className="form-control" placeholder="Name" name="name" onChange={handleChange} required />
          <input type="email" className="form-control" placeholder="Email" name="email" onChange={handleChange} required />
          <input type="password" className="form-control" placeholder="Password" name="password" onChange={handleChange} required />
          <input type="text" className="form-control" name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <select className="form-select" name="profession" placeholder="Profession" onChange={handleChange} required>
            <option value="">Select Profession</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Designer">Designer</option>
          </select>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <h5>Already User <Link to="/login">&nbsp; Login Here</Link></h5>
    </div>
  );
};

export default Register;

/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import { API_URLS } from '../api';
import { toast } from 'react-toastify';
import { Link,useNavigate } from 'react-router-dom';
import './Style.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URLS.LOGIN, credentials, {
        headers: { 'Content-Type': 'application/json' },
      });
      toast.success('Login successful!');
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className='title'>Login</h2>
      <form className='register-form' onSubmit={handleSubmit}>
          <input type="email" className="form-control" placeholder="Email" name="email" onChange={handleChange} required />
          <input type="password" className="form-control" placeholder="Password" name="password" onChange={handleChange} required />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <h5>New User <Link to="/register">&nbsp; Register Here</Link></h5>
    </div>
  );
};

export default Login;

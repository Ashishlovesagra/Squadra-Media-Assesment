import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import CompanyInfo from './pages/CompanyInfo';
import { ToastContainer } from 'react-toastify';
import UpdateUser from './components/UpdateUser';
import MovieSearch from './components/MovieSearch';
import './App.css';
import PrivateRoute from './components/PrivateRoute';



const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <div className="layout">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<PrivateRoute><MovieSearch/></PrivateRoute>} />
        <Route path="/update-user" element={<UpdateUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/company-info" element={<CompanyInfo />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

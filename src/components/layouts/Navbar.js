import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="navbar bg-blue-500 text-white">
      <div className="navbar-start">
        <Link to="/home" className="btn btn-ghost normal-case text-lg font-bold">Panti Rapih</Link>
      </div>
      <div className="navbar-end">
        <Link to="/home" className="btn btn-ghost mx-2">Home</Link>
        <Link to="/data" className="btn btn-ghost mx-2">Data</Link>
        <button onClick={handleLogout} className="btn btn-ghost mx-2">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;

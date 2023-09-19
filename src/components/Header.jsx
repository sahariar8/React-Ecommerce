
import { NavLink, Outlet } from 'react-router-dom';
import './style.css'

const Header = () => {
    return (
        <div>
          <div className='flex justify-between text-xl font-bold shadow-lg py-3'>
                <div className='ml-10'>
                    <h1>Amazon</h1>
                </div>
                <nav className='flex gap-8 mr-10'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Products">Products</NavLink>
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                    <NavLink to="/Dashboard">Dashboard</NavLink>
                </nav>
          </div>    
           <Outlet></Outlet>
        </div>
    );
};

export default Header;









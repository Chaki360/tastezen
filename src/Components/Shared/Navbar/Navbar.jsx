import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/blogs"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }
                >
                    Blogs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }
                >
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink to="/login">
                    <button className='bg-blue-500 hover:bg-blue-700 text-white 
                    font-semibold px-1 py-1 rounded'>Login</button>
                </NavLink>
            </li>
            <li>
                <NavLink to="/register">
                    <button className='bg-blue-500 hover:bg-blue-700 text-white 
                    font-semibold px-1 py-1 rounded'>Register</button>
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 bg-white shadow p-3">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex items-center justify-center space-x-2'>
                    <NavLink to="/">
                        <img
                            src="https://cdn.icon-icons.com/icons2/1368/PNG/512/-meal_89750.png"
                            alt="Logo"
                            className="h-7"
                        />
                    </NavLink>
                    <NavLink to="/">
                        <h3 className='web-title text-lg font-semibold'>TasteZen</h3>
                    </NavLink>
                </div>
                <ul className="hidden md:flex space-x-5 font-medium justify-center items-center">
                    {navLinks}
                </ul>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="text-xl"
                        onClick={() =>
                            document.getElementById('mobile-menu').classList.toggle('hidden')
                        }
                    >
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <ul
                id="mobile-menu"
                className="md:hidden space-y-5 hidden text-center mt-10 font-medium items-center"
            >
                {navLinks}
            </ul>
        </div>
    );
};

export default Navbar;

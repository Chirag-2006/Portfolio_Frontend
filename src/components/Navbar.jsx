import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Navbar = () => {
    const { isloggedIn } = useAuth();

    return (
        <>
            <header>
                <div className="container flex justify-between items-center font-Inter py-5 w-auto m-auto">
                    <div className="logo text-btn_color">
                        <Link to="/">Chirag arya</Link>
                    </div>
                    <nav>
                        <ul className='flex gap-x-8 text-btn_color '>
                            <li><NavLink to="/" className="nav focus:text-white hover:text-white">Home</NavLink></li>
                            <li><NavLink to="/about" className="nav focus:text-white hover:text-white">About</NavLink></li>
                            <li><NavLink to="/project" className="nav focus:text-white hover:text-white">Project</NavLink></li>
                            <li><NavLink to="/contact" className="nav hover:text-white focus:text-white">Contact</NavLink></li>

                            {isloggedIn ?
                                (
                                    <li><NavLink to="/logout" className="nav hover:text-white focus:text-white">Logout</NavLink></li>
                                )
                                :
                                (<>
                                    <li><NavLink to="/login" className="nav hover:text-white focus:text-white">Login</NavLink></li>
                                    <li><NavLink to="/register" className="nav hover:text-white focus:text-white">SignUp</NavLink></li>

                                </>)
                            }
                            
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Navbar
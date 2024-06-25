import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { FaUser, FaMessage, FaRegRectangleList, FaHouseChimney } from "react-icons/fa6";
import { useAuth } from '../../store/auth';


const AdminLayout = () => {

  const { user, isloading } = useAuth();
  // console.log("Admin Layout User: ", user);

  if (isloading) {
    return <h1>loading...</h1>
  }
  if (!user.isAdmin) {
    // nevigat to error page
    return <Navigate to="/" />

  }

  return <>
    <header>
      <div className="container flex justify-between items-center font-Inter py-5 mx-auto">
        {/* <div className="logo text-btn_color">
          <Link to="/">Chirag arya</Link>
        </div> */}
        <nav>
          <ul className='flex gap-8 text-btn_color '>
            <li><NavLink to="/admin/users" className="nav focus:text-white hover:text-white">
              <div className="flex gap-x-1">
                <FaUser /> User
              </div>
            </NavLink></li>
            <li><NavLink to="/admin/contacts" className="nav focus:text-white hover:text-white">
              <div className="flex gap-x-1">
                <FaMessage />Conact
              </div>
            </NavLink></li>
            <li><NavLink to="/project" className="nav focus:text-white hover:text-white">
              <div className="flex gap-x-1">
                <FaRegRectangleList />Project
              </div>
            </NavLink></li>
            <li><NavLink to="/" className="nav hover:text-white focus:text-white">
              <div className="flex gap-x-1">
                <FaHouseChimney /> Home
              </div>
            </NavLink></li>

          </ul>
        </nav>
      </div>
    </header >
    <Outlet />
  </>
}

export default AdminLayout
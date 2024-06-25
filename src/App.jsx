import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Error from './pages/Error'
import Logout from './pages/Logout'
import Project from './pages/Project'
import AdminLayout from './components/layouts/Admin-Layout'
import AdminUsers from './pages/Admin-Users'
import AdminContacts from './pages/Admin-Contacts'
import UpdateUser from './pages/Admin-updateUser'


const App = () => {
  return (
    <>
      <div className="bg-dark_color text-white min-h-screen font-Inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<Error />} />
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='users' element={<AdminUsers />} />
            <Route path='contacts' element={<AdminContacts />} />
            <Route path='users/:id/edit' element={<UpdateUser />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
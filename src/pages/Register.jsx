import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';


const Register = () => {
  const nevigate = useNavigate();
  const { storeTokenInLS,API } = useAuth();
  const URL = `${API}/api/auth/register`;
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const inputHandle = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      const data = await response.json();
      console.log("data from register: ", data);
      
      // console.log(response);

      if (response.ok) {
        storeTokenInLS(data.token)
        setUser({
          username: '',
          email: '',
          phone: '',
          password: ''
        })
        toast.success("Registration Successfully")
        nevigate('/')
      }else{
        toast.error(data.message ? data.message : "Something went wrong")
      }

    } catch (error) {
      console.log("Register Error: ", error.message);
    }
  };



  return (
    <>
      <section>
        <main>
          <div className="sec-reg">
            <div className="container m-auto flex justify-between ">
              <div className="rg-img ">
                <img src="/images/register.png" alt="a girl is trying to do register" width="500" height="500" />
              </div>
              {/* Register Form  */}
              <div className="flex bg-gray-900 rounded-md my-8 items-center justify-center mx-auto w-[520px]">
                <div className=" p-8 rounded-lg  w-full max-w-xl ">
                  <h2 className=" text-underline text-3xl font-bold mb-6  relative ">Registration Form</h2>
                  <form onSubmit={submitForm} >
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2" htmlFor="username">Username</label>
                      <input className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" type="text" id="username" name="username" value={user.username} onChange={inputHandle} placeholder='Enter your username' required />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                      <input className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" type="email" id="email" name="email" value={user.email} onChange={inputHandle} placeholder='Enter your email' required />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
                      <input className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" type="number" id="phone" name="phone" value={user.phone} onChange={inputHandle} placeholder='Enter your phone number' required />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                      <input className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" type="password" id="password" name="password" value={user.password} onChange={inputHandle} autoComplete='off' placeholder='Enter your password' required />
                    </div>
                    <button className="w-full py-3 rounded bg-btn_color hover:bg-indigo-700 text-white font-semibold" type="submit" >Register Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Register
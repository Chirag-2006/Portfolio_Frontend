import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import {toast} from 'react-toastify';



const Login = () => {
  const nevigat = useNavigate();
  const {storeTokenInLS, API} = useAuth(); 
  const URL = `${API}/api/auth/login`;
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const inputHandle = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
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
      console.log(response);
      
      if (response.ok) {
        storeTokenInLS(data.token)
        setUser({
          email: '',
          password: '',
        })
        
        nevigat('/')
        toast.success("Login Successfully")
      } else {
        toast.error(data.message ? data.message : "Something went wrong")
      }

    } catch (error) {
      console.log("Login Error: ", error.message);
    }
  }
  return (
    <>
      <section>
        <main>
          <div className="sec-login">
            <div className="container m-auto flex justify-between items-center bg-red-60 mb-4 ">
              <div className="log-img bg-stone-60 ">
                <img src="/images/login.png" alt='a boy is trying to login ' className='mt-3' width="500" height="500" />
              </div>
              {/* Login Form  */}
              <div className="flex items-center justify-center mx-auto w-[520px]  bg-gray-900 my-16 rounded-md " >
                <div className="p-8 rounded-lg w-full">
                  <h2 className="text-3xl font-bold mb-6 text-underline">Login Form</h2>
                  <form onSubmit={submitForm}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                      <input className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" type="email" id="email" name="email" placeholder='Enter your email' onChange={inputHandle} value={user.email} required />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                      <input className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" type="password" id="password" name="password" placeholder='Enter your password' onChange={inputHandle} autoComplete='off' value={user.password} required />
                    </div>
                    <button className="w-full py-3 rounded bg-btn_color hover:bg-indigo-700 text-white font-semibold" type="submit" >Login Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section >
    </>
  )
}

export default Login
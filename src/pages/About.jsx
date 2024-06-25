import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth'

const About = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="container mx-auto ">

        <section className='w-full  flex justify-around items-center gap-x-14  my-10'>
          <div className="h-right w-1/2 flex justify-center items-center  ">
            <img src="/images/about.png" width={500} alt="coding together" />
          </div>
          <div className="h-left w-1/2 bg-green500 flex flex-col items-start justify-center gap-y-4">
            <h2 className='-mb-3 text-base capitalize '> Welcome. {user ? (`${user.username} To our website`) : ("To our website")}</h2>
            <h1 className='text-4xl leading-tight'>Why Choose Us?</h1>
            <div className="flex gap-y-4 flex-col">
              <p className='w-3/4 text-md text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, iusto. Sed omnis nostrum deleniti aspernatur.</p>
              <p className='w-3/4 text-md text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, iusto. Sed omnis nostrum deleniti aspernatur.</p>
              <p className='w-3/4 text-md text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, iusto. Sed omnis nostrum deleniti aspernatur.</p>
              <p className='w-3/4 text-md text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, iusto. Sed omnis nostrum deleniti aspernatur.</p>
              <p className='w-3/4 text-md text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, iusto. Sed omnis nostrum deleniti aspernatur.</p>
            </div>
            <div className='gap-5 flex '>
              <Link to="/contact">
                <button className='bg-btn_color btn-hover hover:via-btn_color border-hidden text-white px-4 py-2 mt-4  rounded'>Contact now</button>
              </Link>
              <Link to="/about">
                <button className='border border-btn_color btn-hover text-white  px-4 py-2 mt-4  rounded'>About me</button>
              </Link>
            </div>
          </div>

        </section>

        {/* about section */}
        <section className="w-full py-8 bg-gray-100 text-gray-900 grid grid-flow-col my-8 rounded-md">
          <div className="text-center border-r-black border-transparent border">
            <h2 className="text-3xl font-bold ">50+</h2>
            <p className='text-gray-500'>Registered Companies</p>
          </div>
          <div className="text-center border-r-black border border-transparent ">
            <h2 className="text-3xl font-bold">150+</h2>
            <p className='text-gray-500'>Project Done</p>
          </div>
          <div className="text-center border-r-black border-transparent border">
            <h2 className="text-3xl font-bold">500+</h2>
            <p className='text-gray-500'>Happy Clients</p>
          </div>
          <div className="text-center  border-transparent border">
            <h2 className="text-3xl font-bold">650+</h2>
            <p className='text-gray-500'>Followers</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
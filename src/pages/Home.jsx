import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Home = () => {
  const {user} = useAuth();
  return (
    <>
      <main className='container mx-auto'>
        {/* hero section */}
        <section className='hero-section w-full mx-auto  flex justify-between '>
          <div className="h-left w-3/4 bg-green500 flex flex-col items-start justify-center gap-y-4   bg-gren-600">
            <p className='-mb-3 text-lg'> Welcome To Our Website</p>
            <h1 className='text-5xl leading-tight capitalize'>I’m {user ? (user.username) : ("Chirag Arya")} <br /> <span className='text-btn_color' > Full-Stack </span>Devleoper</h1>
            <p className='w-3/4 text-md text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
            <div className='gap-5 flex '>
              <Link to="/contact">
                <button className='bg-btn_color btn-hover hover:via-btn_color border-hidden text-white px-4 py-2 mt-4  rounded'>Contact now</button>
              </Link>
              <Link to="/about">
                <button className='border border-btn_color btn-hover text-white  px-4 py-2 mt-4  rounded'>About me</button>
              </Link>

            </div>
          </div>
          <div className="h-right bg-ed-700 ">
            <img src="/images/home.png" width={500} alt="coding together" />
          </div>
        </section>

        {/* about section */}
        <section className=" py-8 bg-gray-100 text-gray-900 grid grid-flow-col mt-8 rounded-md">
          <div className="text-center border-r-black border-transparent border">
            <h2 className="text-3xl font-bold ">50+</h2>
            <p className='text-gray-500'>Registered Companies</p>
          </div>
          <div className="text-center border-r-black border border-transparent ">
            <h2 className="text-3xl font-bold">100,000+</h2>
            <p className='text-gray-500'>Happy Clients</p>
          </div>
          <div className="text-center border-r-black border-transparent border">
            <h2 className="text-3xl font-bold">500+</h2>
            <p className='text-gray-500'>Well Known Developers</p>
          </div>
          <div className="text-center  border-transparent border">
            <h2 className="text-3xl font-bold">24/7</h2>
            <p className='text-gray-500'>Service</p>
          </div>

          {/* <div className="border-2 border-black ">
            <h2 className="text-3xl font-bold ">50+</h2>
            <p>Registered Companies</p>
          </div> */}
        </section>

        {/* service section */}
        <section className='service-section w-full mx-auto flex justify-between items-center gap-x-14  my-10'>
          <div className="h-right w-1/2 flex justify-center ">
            <img src="/images/design.png" width={400} alt="coding together" />
          </div>
          <div className="h-left w-1/2 bg-green500 flex flex-col items-start justify-center gap-y-4">
            <p className='-mb-3 text-lg'> We are here to help you</p>
            <h1 className='text-5xl '>Get Strated Today</h1>
            <p className='w-3/4 text-md text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius doloremque sint vitae magni dolor voluptatum cumque optio natus soluta! Excepturi, molestiae ea. Minus eaque inventore facilis illum aperiam dolorem. </p>
            <div className='gap-5 flex '>
              <Link to="/contact">
                <button className='border-white border bg-btn_color text-white px-4 py-2 mt-4  rounded'>Contact now</button>
              </Link>
              <Link to="/about">
                <button className='border border-btn_color text-white  px-4 py-2 mt-4  rounded'>About me</button>
              </Link>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
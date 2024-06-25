import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className="bg container mx-auto my-8 rounded-md py-8 text-white flex flex-col items-center justify-center ">
                <h1 className="text-9xl style-notfound font-bold mb-4">404</h1>
                <p className="text-2xl mb-8">Page Not Found</p>
                <div className="flex space-x-4">
                    <NavLink
                        to="/"
                        className="bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Return to Home Page
                    </NavLink>
                    <NavLink
                    to="/contact"
                        className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
                    >
                        Report Problem
                    </NavLink>
                </div>
            </div>


        </>
    )
}

export default Error
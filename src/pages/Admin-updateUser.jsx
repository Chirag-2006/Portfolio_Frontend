import React, { useEffect, useState } from 'react';
import { useNavigate,redirect, useParams, Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const UpdateUser = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
        isAdmin: "true",
    });

    const params = useParams();
    const { AuthorizationToken, API } = useAuth();
    const Navigate = useNavigate();

    // Get single user data
    const getSingleUserData = async () => {
        try {
            const response = await fetch(
                `${API}/api/admin/users/${params.id}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: AuthorizationToken,
                    },
                }
            );
            const userData = await response.json();
            setData({
                username: userData.username || "",
                email: userData.email || "",
                phone: userData.phone || "",
                isAdmin: userData.isAdmin ? "true" : "false",
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleUserData();
    }, []);

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `${API}/api/admin/users/update/${params.id}`,
                {
                    method: "PATCH",
                    headers: {
                        Authorization: AuthorizationToken,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                toast.success("Updated successfully");
                Navigate("/admin/users");
            } else {
                toast.error("Not Updated");
            }
        } catch (error) {
            console.log("ERROR: updating users in admin from frontend", error.message);
        }
    };

    return (
        <div className="container mx-auto px-4 my-6">
            <h1 className="text-3xl font-bold my-6 text-center text-white">Update User</h1>
            <form onSubmit={handleSubmit} className="bg-gray-900 text-white shadow-md rounded-lg p-6 mx-11">
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        className="bg-gray-800 text-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={data.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="bg-gray-800 text-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={data.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="phone">
                        Phone No
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="bg-gray-800 text-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={data.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="isAdmin">
                        isAdmin
                    </label>
                    <select
                        id="isAdmin"
                        name="isAdmin"
                        className="bg-gray-800 text-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={data.isAdmin}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;

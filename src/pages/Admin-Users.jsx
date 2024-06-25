import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);

    const { AuthorizationToken, API } = useAuth();
    const getAllUsersData = async (req, res, next) => {
        try {
            const users = await fetch(`${API}/api/admin/users`, {
                method: 'GET',
                headers: {
                    'Authorization': AuthorizationToken
                }
            });

            const data = await users.json();
            console.log("users data frontend", data)
            setUsers(data);
        } catch (error) {
            console.log("ERROR: fetching users in admin from frontend", error.message)
            // next(error);
        }
    }

    useEffect(() => {
        getAllUsersData();
    }, []
    )


    const onDelete = async (id) => {
        try {
            const users = await fetch(`${API}/api/admin/users/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': AuthorizationToken
                }
            });

            const data = await users.json();
            toast.success(data.message);
            console.log("users data deleted in frontend", data)
            if (users.ok) {
                getAllUsersData();
            }
        } catch (error) {
            console.log("ERROR: deleting users in admin from frontend", error.message)
            // next(error);
        }
    }

    // const onUpdate = async (id) => {
    //     console.log("id", id);
    // }

    return (
        <>
            <div className="container mx-auto px-6 my-6">
                <h1 className="text-3xl font-bold my-6 text-center text-white">Admin User Data</h1>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-700 sm:rounded-lg">
                                <table className="min-w-full divide-y  divide-gray-700">
                                    <thead className="bg-gray-800">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                Username
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                Phone No
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                isAdmin
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-900 divide-y divide-gray-700">
                                        {users.map((user, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-300">{user.username}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-300">{user.email}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-300">{user.phone}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-300">{user.isAdmin ? 'Yes' : 'No'}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                                                    {/* <button onClick={() => onUpdate(user._id)} className="text-indigo-400 hover:text-indigo-600">
                                                        Update
                                                    </button> */}
                                                    <Link to={`/admin/users/${user._id}/edit`} className="text-indigo-400 hover:text-indigo-600" > Update</Link>
                                                    <button onClick={() => onDelete(user._id)} className="text-red-400 hover:text-red-600 ml-2">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default AdminUsers
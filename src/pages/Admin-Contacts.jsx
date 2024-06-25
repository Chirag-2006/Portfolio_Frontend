import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AllContacts = () => {
  const [contacts, setContacts] = useState([]);
  const { AuthorizationToken ,API } = useAuth();

  // Fetch all contacts data
  const getAllContacts = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: 'GET',
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  // Delete contact function
  const deleteContact = async (id) => {
    console.log("id",id);
    try {
      const response = await fetch(`${API}/api/admin/contacts/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      if (response.ok) {
        getAllContacts();
        toast.success('Contact deleted successfully');
        setContacts(contacts.filter(contact => contact.id !== id));
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      toast.error('Failed to delete contact');
    }
  };

  return (
    <div className="container mx-auto px-4 my-6">
      <h1 className="text-3xl font-bold my-6 text-center text-white">All Contacts</h1>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Message
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900 divide-y divide-gray-700">
                  {contacts.map((contact,index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-300">{contact.username}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-300">{contact.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-300">{contact.message}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                        <button
                          onClick={() => deleteContact(contact._id)}
                          className="text-red-400 hover:text-red-600 "
                        >
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
  );
};

export default AllContacts;

import React, { useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';

const Contact = () => {
  const [userData, setUserData] = useState(true);
  const { user ,API} = useAuth();
  const URL = `${API}/api/form/contact`;
  const [contact, setContact] = useState({
    username: '',
    email: '',
    message: ''
  })

  const inputHandle = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(contact);
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
          setContact({
            username: '',
            email: '',
          message: ''
        })
        toast.success("Message Sent Successfully")
      } else {
        toast.error("Message not Sent")
      }

    } catch (error) {
      console.log("Contact Error: ", error.message);
    }
  }

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: ''
    })
    setUserData(false);
  }



  return (
    <>
      <div className=" container mx-auto flex my-4 ">
        <div className="">
          <img src="/images/support.png" width={500} alt="We are always ready to help" />
        </div>

        <div className="bg-gray-900 w-full text-white py-8 px-4 rounded-md max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-underline">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name='username'
                value={contact.username}
                onChange={inputHandle}
                className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name='email'
                value={contact.email}
                onChange={inputHandle}
                className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name='message'
                value={contact.message}
                onChange={inputHandle}
                className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
      <div className="my-8">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d727.8741499381116!2d76.20995800805336!3d27.703948372790162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1717256573792!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </>
  )
}

export default Contact
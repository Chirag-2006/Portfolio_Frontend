import { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';



const Logout = () => {
  const { logoutUser } = useAuth();

  useEffect(() => {
    logoutUser();
    toast.success("Logout Successfully")
  }, [])
  return (
    <Navigate to="/login" />
  )
}

export default Logout;
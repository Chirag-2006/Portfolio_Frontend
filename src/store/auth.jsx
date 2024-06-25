import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [isloading, setIsLoading] = useState(true);
    const [project, setProject] = useState([]);
    const AuthorizationToken = `Bearer ${token}`

    const API = import.meta.env.VITE_API_URL;

    // take the token from the server and store it in the local storage
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken)
    }

    let isloggedIn = !!token;
    console.log("isloggedIn", isloggedIn)

    // takel the logout functionlity
    const logoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    }


    // user authentication by jwt
    const userAuthntication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${API}/api/auth/user`, { method: "GET", headers: { "Authorization": AuthorizationToken } });
            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
                setIsLoading(false);
            }else{
                setIsLoading(false)
                console.log("ERROR: fetching user")
            }

        } catch (error) {
            console.log("ERROR: fetching user", error.message)
        }

    }

    // geting the project data from the server
    const getProjectData = async () => {
        try {
            const response = await fetch(`${API}/api/data/project`, {
                method: "GET", headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log("project data frontend", data.projects)
                setProject(data.projects)
            }
        } catch (error) {
            console.log("ERROR: fetching project data from frontend", error.message)
        }
    }

    // user authentication by jwt
    useEffect(() => {
        userAuthntication();
        getProjectData();

    }, [])


    return <AuthContext.Provider value={{ isloggedIn, storeTokenInLS, logoutUser, user, project,AuthorizationToken,isloading,API }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authcontextValue = useContext(AuthContext);
    if (!authcontextValue) {
        throw new Error("useAuth must be used within AuthProvider")
    }
    return authcontextValue
}
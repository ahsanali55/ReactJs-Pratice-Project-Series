import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);


  useEffect(() => {
 
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        setUser(user.role);
        setloggedInUserData(user.data);
    
    }
  }, []);

  const handleLogin = (email, password) => {

    if ("admin@example.com" === email && "123" === password) {
      const loggedInUser = { role: "admin" };
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      // ⚡ React state updates immediately
      setUser(loggedInUser.role);
    } else if (userData) {
      const employee = userData.employees.find(
        (item) => item.email === email && item.password === password
      );
      if (employee) {
      
        setloggedInUserData(employee);
        
        const loggedInUser = { role: "employee", data: employee };
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        // ⚡ React state updates immediately
        setUser(loggedInUser.role);
      }
    } else {
      alert("Invalid Credentails");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App;

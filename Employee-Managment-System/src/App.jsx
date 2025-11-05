import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const AuthData = useContext(AuthContext);
  console.log("data", AuthData);
 

  const handleLogin = (email, password) => {
    console.log(email, password);
    console.log(AuthData.userData.admin)

    if (AuthData &&
      AuthData.userData.admin.find((item) => item.email === email && item.password === password)) {
      console.log("This is Admin");
      setUser("admin");
    } else if (
      AuthData &&
      AuthData.userData.employees.find((item) => 
      
        (item.email === email && item.password === password)
      )
    ) {
      console.log("This is User");
      setUser("user");
    } else {
      alert("Invalid Credentails");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard />
      ) : user === "user" ? (
        <EmployeeDashboard />
      ) : (
        ""
      )}
    </>
  );
}

export default App;

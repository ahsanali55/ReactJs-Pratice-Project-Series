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
  const AuthData = useContext(AuthContext);
  // console.log("Authdata", AuthData);
  // console.log("User ", user);

  useEffect(() => {
    if (AuthData){
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        console.log("loggedInUser, ", loggedInUser)
        const userData = JSON.parse(loggedInUser)
        console.log("userData, ", userData)
        setUser(userData.role);
        setloggedInUserData(userData.data)
      }else{
        setUser(null)
        console.log("There's not any employee or admin")
      }
    }

  }, [AuthData])

  const handleLogin = (email, password) => {
    console.log(email, password);
    // console.log(AuthData.userData.admin)

    if (
      AuthData &&
      AuthData.userData.admin.find(
        (item) => item.email === email && item.password === password
      )
    ) {
      console.log("This is Admin");
      const loggedInUser = { role: "admin" };
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      // ⚡ React state updates immediately
      setUser(loggedInUser.role);
    } else if (AuthData) {
      const employee = AuthData.userData.employees.find(
        (item) => item.email === email && item.password === password
      );

      console.log(employee);
      setloggedInUserData(employee);

      const loggedInUser = { role: "employee", data: employee };
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      // ⚡ React state updates immediately
      setUser(loggedInUser.role);
    } else {
      alert("Invalid Credentails");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard />
      ) : user === "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App;

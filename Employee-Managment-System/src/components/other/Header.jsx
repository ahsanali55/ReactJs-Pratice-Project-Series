import React, { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {
  const [username, setusername] = useState("");
  // if (!data){
  //   setusername("Admin")
  // }else{
  //   setusername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
   
  };

  return (
    <div className="flex items-center justify-between text-white mb-4">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">G</span>
      </h1>
      <button
        className="bg-red-500 text-white text-lg font-bold px-5 py-2 "
        onClick={logOutUser}
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;

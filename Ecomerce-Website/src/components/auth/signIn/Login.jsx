import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../../../utils/firebase";


const Login = () => {
  const [showPass, setshowPass] = useState(false);
  const email = useRef(null);
  const password = useRef(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
      alert("Logged in");
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="p-7 shadow-2xl w-full max-w-[400px] min-h-[400px] bg-white rounded-xl ">
      {/* Logo */}
      <div className="mx-auto p-0.5 border-4 flex w-[170px] mt-4">
        <h1 className="font-extrabold bg-black text-white px-2">AHSAN</h1>
        <h1 className="font-extrabold px-2">STORE</h1>
      </div>

      {/* form -> email passward */}
      <form className="flex flex-col gap-2.5  mt-5 p-4"
      onSubmit={(e) => handleLogin(e)}
      >
        <label htmlFor="email" className="font-semibold text-gray-700">
          Email
        </label>
        <input
          type="email"
          ref={email}
          name=""
          className="bg-[#eff2f8] p-2 pl-3 rounded-md placeholder:text-gray-400placeholder:pl-1 border-none outline-none"
          placeholder="jhon123@example.com"
          id="email"
        />

        <label htmlFor="password" className="font-semibold text-gray-700">
          Password
        </label>
        <div className="flex bg-[#eff2f8] items-center rounded-md">
          <input
            type={showPass ? "text" : "password"}
            className=" p-2 pl-3  placeholder:text-gray-400 placeholder:pl-1 w-full border-none outline-none"
            name=""
            ref={password}
            placeholder="Enter Password"
            id=""
          />
          <span
            className="text-gray-400 pr-2"
            onClick={() => setshowPass(!showPass)}
          >
            {showPass ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <button className="w-full bg-[#3497e9] text-white py-2 rounded-3xl mt-4 tracking-wider font-semibold ">
          Login
        </button>
      </form>

    
    </div>
  );
};

export default Login;

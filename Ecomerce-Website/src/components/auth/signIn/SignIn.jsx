import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Login from "./Login";

const SignIn = () => {
  return (
    <div className="w-full h-full bg-[#E8ECF4]">
       <motion.div
        initial={{ opacity: 0, x: 90 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
      <div className="w-11/12 h-screen max-w-[1080px] mx-auto  flex items-center justify-center relative">
        <Link to="/">
          <div className="absolute top-10 text-2xl left-10 p-5 bg-white rounded-full ">
            <FaChevronLeft />
          </div>
        </Link>
        {/* Login */}
        <Login />
      </div>
      </motion.div>
    </div>
  );
};

export default SignIn;

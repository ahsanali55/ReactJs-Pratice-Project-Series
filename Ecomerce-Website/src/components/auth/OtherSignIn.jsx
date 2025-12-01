import React from "react";
import { FaApple, FaChevronLeft, FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const OtherSignIn = () => {
  return (
    <div className="text-center space-y-4 mt-3">
      <h3 className="text-gray-400">Or Sign in with</h3>
      <div className="flex items-center justify-center gap-2 ">
        <div className="bg-[#f1f2f5] p-2 rounded-lg">
          <FaFacebook className="text-blue-500 text-3xl" />
        </div>
        <div className="bg-[#f1f2f5] p-2 rounded-lg">
          <FcGoogle className="text-3xl" />
        </div>
        <div className="bg-[#f1f2f5] p-2 rounded-lg ">
          <FaApple className=" text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default OtherSignIn;

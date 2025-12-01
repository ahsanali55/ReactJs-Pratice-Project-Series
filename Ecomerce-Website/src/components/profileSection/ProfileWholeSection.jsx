import React from "react";
import LeftNav from "../navSection/LeftNav";
import ProfileNavbar from "./ProfileNavbar";
import Orders from "./orders/Orders";

const Profile = () => {
  return (
    <div className="w-full h-screen bg-[#F5F5F5]">
      <ProfileNavbar />
      <Orders />
    </div>
  );
};

export default Profile;

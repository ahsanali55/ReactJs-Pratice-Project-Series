import React from "react";
import LeftFooter from "./LeftFooter";
import RightFooter from "./RightFooter";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div className="w-full bg-[#292C30] p-4 ">
      <div className="w-11/12 max-w-[1080px] mx-auto flex flex-col gap-8 justify-between p-4">
        <div className="flex flex-col lg-flex-row">
          <LeftFooter />
          <RightFooter />
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;

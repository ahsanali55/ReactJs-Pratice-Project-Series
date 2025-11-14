import React from "react";
import RightDetail from "./rightSection/RightDetail";
import LeftDetails from "./leftSection/LeftDetails";

const WholeDetail = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl w-11/12 mx-auto p-4 flex flex-col lg:flex-row lg:justify-between gap-6 ">
        <LeftDetails />
        <RightDetail />
      </div>
    </section>
  );
};

export default WholeDetail;

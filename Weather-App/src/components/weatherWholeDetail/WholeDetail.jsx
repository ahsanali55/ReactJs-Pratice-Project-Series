import React from "react";
import RightDetail from "./rightSection/RightDetail";
import LeftDetails from "./leftSection/LeftDetails";

const WholeDetail = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1280px] w-11/12 mx-auto p-4 flex gap-4">
        <LeftDetails />
        <RightDetail />
      </div>
    </section>
  );
};

export default WholeDetail;

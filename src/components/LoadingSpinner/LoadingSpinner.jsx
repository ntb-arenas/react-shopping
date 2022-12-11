import React from "react";

import { VscLoading } from "react-icons/vsc";

const Loading = () => {
  return (
    <div className="text-[4rem] text-orange-400 flex justify-center items-center h-[100vh]">
      <VscLoading className="animate-spin" />
    </div>
  );
};

export default Loading;

import React from "react";

const Test = ({ testFunction }) => {
  return (
    <button className="px-5 py-2" onClick={testFunction}>
      Test
    </button>
  );
};

export default Test;

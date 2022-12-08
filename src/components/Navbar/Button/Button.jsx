import React from "react";

const Button = ({ category, handleClick }) => {
  return (
    <div>
      {category.map((category, index) => {
        return (
          <button key={index} className="px-5 py-2" onClick={() => handleClick(`category/${category}`)}>
            {category.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default Button;

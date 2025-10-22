import React from "react";

const Button = ({ variant = "primary", children, onClick }) => {
  const base = "px-4 py-2 rounded font-semibold transition-all duration-300";

  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
};

export default Button;

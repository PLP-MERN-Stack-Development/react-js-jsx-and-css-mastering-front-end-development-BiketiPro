import React from "react";

const Button = ({ label, onClick, type = "button", variant = "primary" }) => {
  const baseStyle =
    "px-4 py-2 rounded font-medium focus:outline-none transition duration-200";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100",
    danger:
      "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 disabled:bg-red-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;

import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="border rounded-lg shadow p-4 bg-white dark:bg-gray-800">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{content}</p>
    </div>
  );
};

export default Card;

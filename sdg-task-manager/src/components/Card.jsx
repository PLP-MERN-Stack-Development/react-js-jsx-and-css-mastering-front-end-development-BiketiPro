import React from "react";

const Card = ({ title, content, children }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-800 dark:text-gray-100">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {content && <p className="text-gray-700 dark:text-gray-300 mb-2">{content}</p>}
      {children}
    </div>
  );
};

export default Card;

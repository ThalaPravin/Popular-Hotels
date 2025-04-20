import React from "react";

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = ["Hotels", "Restaurants", "Places"];

  return (
    <div className="border-b mb-6">
      <div className="flex justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 mx-4 font-medium text-lg font-['Candara'] ${
              activeTab === tab
                ? "border-b-2 border-pink-500 text-pink-500"
                : "text-gray-500 hover:text-gray-800"
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;

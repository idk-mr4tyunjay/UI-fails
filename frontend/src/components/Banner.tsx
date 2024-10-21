import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="bg-red-600 text-white py-12 px-6 lg:px-12 text-center rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Welcome to UI Fails!</h1>
      <p className="text-lg mb-8">
        Discover some of the worst user interface designs ever created. UI fails
        are examples of how not to design a user experience, showing what
        happens when things go wrong. From pop-up nightmares to confusing
        navigation, explore the most frustrating UIs and learn how to avoid
        these mistakes!
      </p>
      <a
        href=""
        className="bg-white text-red-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
      >
        Explore UI Fails
      </a>
    </div>
  );
};

export default Banner;

import React, { useState } from "react";
import UI from "../static/UI.json";
import { Link } from "react-router-dom";

const Card: React.FC = () => {
  // const [previewContent, setPreviewContent] = useState<JSX.Element | null>(
  //   null
  // );
  const [likes, setLikes] = useState<number[]>(new Array(UI.length).fill(0));
  const [dislikes, setDislikes] = useState<number[]>(
    new Array(UI.length).fill(0)
  );

  // const handleMouseEnter = (route: string) => {
  //   import(`../pages${route}.tsx`).then((module) => {
  //     const Component = module.default;
  //     setPreviewContent(<Component />);
  //   });
  // };

  // const handleMouseLeave = () => {
  //   setPreviewContent(null);
  // };

  const handleLike = (index: number) => {
    const newLikes = [...likes];
    newLikes[index]++;
    setLikes(newLikes);
  };

  const handleDislike = (index: number) => {
    const newDislikes = [...dislikes];
    newDislikes[index]++;
    setDislikes(newDislikes);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {UI.map((ui, index) => (
          <div
            key={ui.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden relative"
            // onMouseEnter={() => handleMouseEnter(ui.route)}
            // onMouseLeave={handleMouseLeave}
          >
            <img
              className="w-full h-48 object-cover"
              src={ui.imageUrl}
              alt={ui.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{ui.title}</h2>
              <p className="text-gray-700 mb-4">{ui.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <Link
                    to={ui.route}
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-2"
                  >
                    View UI
                  </Link>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <button
                    onClick={() => handleLike(index)}
                    className="flex items-center space-x-1 text-blue-500 hover:text-blue-600"
                  >
                    <i className="fas fa-thumbs-up text-xl"></i>
                    <span>{likes[index]}</span>
                  </button>
                  <button
                    onClick={() => handleDislike(index)}
                    className="flex items-center space-x-1 text-red-500 hover:text-red-600"
                  >
                    <i className="fas fa-thumbs-down text-xl"></i>
                    <span>{dislikes[index]}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Preview Box */}
            {/* {previewContent && (
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-white z-10 p-4 shadow-lg">
                {previewContent}
              </div>
            )} */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;

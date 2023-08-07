import React from "react";

const video = "https://youtu.be/8o0uvSKPJms";

function ProjectItem({ img, title, visit, github }) {
  const newTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const howlr =
    "rounded-xl group-hover:opacity-0 object-fill w-[100%] h-[100%] border border-[#ead6e6]";
  const regular =
    "rounded-xl group-hover:opacity-0 object-fill w-[100%] h-[100%] border border-[#ead6e6]";

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        src={img}
        alt="/"
        className={img === "/src/assets/howlr.jpg" ? howlr : regular}
      />
      <div className="hidden group-hover:block absolute justify-center left-[50%] translate-x-[-50%] translate-y[-50]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center pb-4">
          {title}
        </h3>
        {title === "Howlr" ? (
          <div className="grid md:grid-row-3 gap-4 w-full py-2">
            <button
              onClick={() => newTab(github)}
              className="cursor-pointer text-center p-3 px-8 rounded-lg bg-white text-black hover:bg-gray-200"
            >
              Github
            </button>
            <button
              onClick={() => newTab(video)}
              className="cursor-pointer text-center p-3 px-8 rounded-lg bg-white text-black hover:bg-gray-200"
            >
              Video
            </button>

            <button
              onClick={() => newTab(visit)}
              className="cursor-pointer text-center p-3 px-8 rounded-lg bg-white text-black hover:bg-gray-200"
            >
              Visit!
            </button>
          </div>
        ) : (
          <div className="grid md:grid-row-2 gap-4 py-2">
            <button
              onClick={() => newTab(github)}
              className="cursor-pointer text-center p-3 rounded-lg bg-white text-black hover:bg-gray-200"
            >
              GitHub
            </button>
            <button
              onClick={() => newTab(visit)}
              className="cursor-pointer text-center p-3 rounded-lg bg-white text-black hover:bg-gray-200"
            >
              Visit!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;

{
  /* 
Add this back in when creating a component per project:

      <a href="/">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold">
            More info
          </p>
          // customize info used with props 
        </a> 
*/
}

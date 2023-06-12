import React from "react";

function ProjectItem({ img, title, visit, github }) {
  const newTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const howlr =
    "rounded-xl group-hover:opacity-0 object-fill w-[100%] h-[100%] border border-[#ead6e6]";
  const regular =
    "rounded-xl group-hover:opacity-0 object-fill w-[100%] h-[100%] border border-[#ead6e6]";

  console.log("image-->", img);

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        src={img}
        alt="/"
        className={img === "/src/assets/howlr.jpg" ? howlr : regular}
      />
      <div className="hidden group-hover:block absolute top-[30%] left-[50%] translate-x-[-50%] translate-y[-50]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center pb-4">
          {title}
        </h3>
        {/* <p className="pb-4 pt-2 text-white text-center">Technology used</p>
        customize techs used with props */}
        {img === "/src/assets/howlr.jpg" ? (
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <p
              onClick={() => newTab(visit)}
              className="cursor-pointer flex flex-col text-center p-3 rounded-lg bg-white text-gray-700 font-bold"
            >
              Visit!
            </p>
            <p
              onClick={() => newTab(github)}
              className="cursor-pointer flex flex-col text-center p-3 rounded-lg bg-white text-gray-700 font-bold"
            >
              Github
            </p>
          </div>
        ) : (
          <div>
            <p className="flex flex-col text-center p-3 rounded-lg bg-white text-gray-700 font-bold">
              Coming Soon!
            </p>
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

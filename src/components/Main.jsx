import React from "react";

function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left "
        src="https://metro.co.uk/wp-content/uploads/2021/11/GettyImages-1215159894-1.jpg?quality=90&strip=all"
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50"></div>
    </div>
  );
}

export default Main;

// to flip bg image: scale-x-[-1]

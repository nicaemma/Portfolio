import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaInstagram,
  FaLinkedinIn,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://media.istockphoto.com/id/1295282802/vector/young-woman-is-sitting-at-a-computer-in-a-room-with-a-large-window-concept-of-remote-work.jpg?s=612x612&w=0&k=20&c=kT9_TlCVQ5fEHVa7oT_3gZ3z3wXddnypCVh8dvgUziw="
        // make responsive focus on image later
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl text-gray-800 font-bold">
            Nica Weisinger
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              // play with options later --> https://react-type-animation.netlify.app/options
              sequence={[
                "Engineer",
                1200,
                "Teacher",
                1200,
                "Artist",
                1200,
                "Plant mom",
                1200,
                "Rock climber",
                1200,
              ]}
              wrapper="div"
              speed={50}
              cursor={true}
              style={{
                // fontSize: "1em",
                paddingLeft: "5x",
                display: "block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaLinkedinIn className="cursor-pointer" size={25} />
            <FaGithub className="cursor-pointer" size={25} />
            <FaInstagram className="cursor-pointer" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

// to flip bg image: scale-x-[-1]
// alternative bg photo: "https://metro.co.uk/wp-content/uploads/2021/11/GettyImages-1215159894-1.jpg?quality=90&strip=all"

import React from "react";
import ProjectItem from "./ProjectItem";
import howlrImg from "../assets/howlr.jpg";
import mindfulImg from "../assets/MindfulMatters.jpg";
// import pokehomeImg from "../assets/pokehome1.png";

function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 py-16">
      <h1 className="text-4xl font-bold text-center text-[#00b5e] pb-8">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={howlrImg}
          title="Howlr"
          visit="https://howlr.netlify.app/"
          github="https://github.com/team-asteroids/capstone"
        />
        <ProjectItem
          img={mindfulImg}
          title="Mindful Matters"
          visit="https://stackathon-68512.web.app/"
          github="https://github.com/nicaemma/stackathon"
        />
        {/* <ProjectItem img={pokehomeImg} title="PokeHome App" /> */}
      </div>
    </div>
  );
}

export default Projects;

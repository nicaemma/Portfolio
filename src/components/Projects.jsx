import React from "react";
import ProjectItem from "./ProjectItem";
import howlrImg from "../assets/howlr.jpg";
import mindfulImg from "../assets/mindful.jpeg";
// import pokehomeImg from "../assets/pokehome1.png";

function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 py-16">
      <h1 className="text-4xl font-bold text-center text-[#00b5e] pb-8">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={howlrImg} title="Howlr App" />
        <ProjectItem img={mindfulImg} title="Mindfulness App" />
        {/* <ProjectItem img={pokehomeImg} title="PokeHome App" /> */}
      </div>
    </div>
  );
}

export default Projects;

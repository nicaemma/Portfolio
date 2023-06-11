import React from "react";
import Workplace from "./Workplace";

const data = [
  {
    year: 2023,
    title: "Fullstack Academy",
    duration: "6 Months",
    details:
      "Earned a Software Engineering Certificate from the Immersive Web Development Bootcamp. Studied full-stack development and built projects using JavaScript, React, Node.js, PostgreSQL, and more.",
  },
  {
    year: 2022,
    title: "Math Teacher",
    duration: "1 Year",
    details:
      "Designed and implemented 6th and 7th grade math curriculums that successfully addressed pandemic-induced gaps in learning and social-emotional development while maintaining grade-level Common Core State Standards mastery.",
  },
  {
    year: 2016,
    title: "Math Teacher, Grade Team Lead, Instructional Coach",
    duration: "5 Years",
    details:
      "Led weekly meetings, delegated tasks, and coached teachers in their instruction. Served as lead instructor of general education and special education math classes.",
  },
];

function Work() {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-8">
        Experience
      </h1>
      {data.map((item, idx) => (
        <Workplace
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
}

export default Work;

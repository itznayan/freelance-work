"use client";

import React, { useState } from "react";
import AboutInfo from "./About/AboutInfo";
import Modal from "./About/model";
import ProjectAni from "./About/ProjectAni";

const About = () => {
  const projects = [
    {
      title: "Nayan Mahera",
      role: "Creative Developer",
      src: "img1",
      color: "#000000",
    },
    {
      title: "Jatin Singh",
      role: "Tech Lead",
      src: "img2",
      color: "#8C8C8C",
    },
    { title: "ABC", role: "Tech Lead", src: "bg.png", color: "#EFE8D3" },
    {
      title: "DFC",
      role: "Tech Lead",
      src: "img3",
      color: "#706D63",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="relative w-full min-h-screen bg-zinc-900 pt-24">
      {/* PROJECT LIST */}
      <div className="text-zinc-300  flex gap-32 px-16 py-20">
        <h1 className="text-7xl text-zinc-100 font-mono font-extrabold">
          Lorem, ipsum.
        </h1>
        <p className="font-mono text-white leading-relaxed text-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corrupti
          voluptatum voluptas ratione sit quisquam at blanditiis quam. Incidunt
          excepturi eum ullam impedit. Magni architecto quas corporis tempora.
          Repellat, quibusdam.
        </p>
      </div>
      <div className=" w-full px-20">
        <h1 className="text-zinc-100 text-7xl font-mono ">Our Team</h1>
        <div className="px-12 py-6">
          {projects.map((project, index) => (
            <AboutInfo
              key={index}
              index={index}
              title={project.title}
              active={modal.active && modal.index === index}
              setModal={setModal}
              role={project.role}
            />
          ))}
        </div>
      </div>
      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default About;

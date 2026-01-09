import React from "react";

export default function Content() {
  return (
    <div className="bg-black py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end text-white">
      <h1 className="text-[10vw] leading-[0.8] mt-10">
        Design & Build with passion.
      </h1>
      <p>©copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2 text-gray-400">
        <h3 className="mb-2 uppercase text-white">About</h3>
        <p>Home</p>
        <p>Our Team</p>
        <p>Projects</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col gap-2 text-gray-400">
        <h3 className="mb-2 uppercase text-white">Services</h3>
        <p>Website Design</p>
        <p>Social Media Reels</p>
        <p>Menu Photograph</p>
        <p>Google Maps SEO</p>
      </div>
      <div className="flex flex-col gap-2 text-gray-400">
        <h3 className="mb-2 uppercase text-white">Get in Touch</h3>
        <p>abc@gmail.com</p>
        <p>+1 (555) 000-0000</p>
        <p>Nadiad,Gujrat,India,387001</p>
      </div>
    </div>
  );
};

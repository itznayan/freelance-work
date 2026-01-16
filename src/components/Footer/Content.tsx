import React from "react";
import { Link, useLocation } from "wouter";
import { scrollToId } from "./../../functions/scrollToId";

export default function Content() {
  return (
    <div className=" py-8 px-12 h-full w-full flex flex-col justify-between">
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
      <p>©copyright.itznayan</p>
    </div>
  );
};

const Nav = () => {
  const [location, setLocation] = useLocation();

  const handleClick = (id: string) => {
    if (location === "/services") {
      // SAME PAGE → manual scroll with navbar gap
      scrollToId(id, 80);
    } else {
      // DIFFERENT PAGE → navigate first
      setLocation(`/services#${id}`);
    }
  };
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2 text-gray-400">
        <h3 className="mb-2 uppercase text-white">About </h3>
        <Link href="/">Home</Link>
        <Link href="services">Projects</Link>
        <Link href="contact">Contact</Link>
        <Link href="about ">About </Link>
      </div>
      <div className="flex flex-col gap-2 text-gray-400">
        <h3 className="mb-2 uppercase text-white">Services</h3>
        <Link href="/services#card-1">
          <p onClick={() => handleClick("card-1")}>Web Development</p>
        </Link>
        <Link href="/services#card-2">
          <p onClick={() => handleClick("card-2")}>Content Creation</p>
        </Link>
        <Link href="/services#card-3">
          <p onClick={() => handleClick("card-3")}>Growth Strategy</p>
        </Link>
        <Link href="/services#card-4">
          <p onClick={() => handleClick("card-4")}>Social Media Management</p>
        </Link>
      </div>
      <div className="flex flex-col gap-2 text-gray-400">
        <h3 className="mb-2 uppercase text-white">Get in Touch</h3>
        <p>jvsingh201@gmail.com</p>
        <p>+1 (555) 000-0000</p>
        <p>Nadiad,Gujrat,India,387001</p>
      </div>
    </div>
  );
};

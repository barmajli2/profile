"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link'

const data = [
  {
    image: "/slide/1.svg",
  },
  {
    image: "/slide/resume.svg",
  },
  {
    image: "/slide/workshop.svg",
  },
  {
    image: "/slide/responsive.svg",
  },

];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen pt-8 container mx-auto 	flex flex-col md:flex-row items-center justify-center z-10  ">
      <div className="flex-1 p-4 md:p-0">
        <h3 className="text-3xl  ">Hey there I&apos;m !</h3>
        <h1 className="text-3xl md:text-5xl my-6 text-[#407BFF] font-semibold">Ahmed Mohamed</h1>
        <p className="mb-8" >Frontend Developer, Passionate And Love To Learn And Research, I Build Perfect And Attractive Digital Websites That Help You Execute Your Idea And Turn It Into An Attractive And Responsive Website With All Screens</p>
        <Link href="/contact" className="  px-8 py-2 bg-bgColor text-white rounded-full hover:bg-transparent hover:text-bgColor transition-all  duration-700  ease-in-out ">Let&apos;s talk</Link>
      </div>

      <div className="relative flex-1">
        <Image
          src={data[currentSlide].image}
          alt=""
          width={400}
          height={300}
          className=""
        />
      </div>
    </section>
  );
};

export default Slider;

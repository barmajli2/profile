"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import SectionTitle from '@/components/sectionTitle'
import { offer } from "@/data";
import  Skills  from '@/components/skills';


const AboutPage = () => {
    const data = [
        {
            image: "/about/1.svg",
        },
        {
            image: "/about/2.svg",
        },
        {
            image: "/about/3.svg",
        },
        {
            image: "/about/4.svg",
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(
            () =>
                setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
            3000
        );
        return () => clearInterval(interval);
    });
    return (
        <section className="container mx-auto my-12">
            <div className=" flex flex-col md:flex-row md:h-[calc(100vh-4rem)]">
                {/* Content */}
                <div className="flex-1">
                    <div className="mb-12 p-4 md:p-0">
                        <p className="pb-3">
                            I&apos;m glad to visit you my profile. I&apos;m Ahmed Mohammed. 23 years old and a front-line developer.
                        </p>
                        <p className="pb-3">
                            I learned through practice, training and continuous research.
                        </p>
                        <p className="pb-3">
                            Over the past two years I have been able to learn how to convert any design (figma/psd) or idea into a great site and responsive to all screens and fast.
                        </p>
                        I&apos;m available for self-employment. Or work with a team.
                        Do you have an idea or design you want to convert to a website? Or just passionate about web development? Feel free to communicate!
                    </div>
                    <Link href="/contact" className="text-2xl  px-8 py-2  bg-bgColor text-white rounded-full hover:bg-transparent hover:text-bgColor transition-all  duration-700  ease-in-out  w-full block text-center border-2 border-bgColor hover:border-2">Hire me</Link>
                </div>
                {/* Image */}
                <div className="relative flex-1 mt-6 md:mt-0">
                    <Image
                        src={data[currentSlide].image}
                        alt=""
                        width={400}
                        height={300}
                        
                    />
                </div>
            </div>
            <Skills/>
            {/* Whe Me */}
            <div>
                <div className="text-center py-12">
                    <SectionTitle title="Why me?" />
                    <p>What can I offer for you? Whats is difference?!!</p>
                </div>
                {/* Boxes */}
                <div className="grid  px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mt-8   ">
                    {
                        offer.map((e, key) => {
                            return (
                                <div className="p-4 shadow-lg  rounded-3xl	  hover:border-bgColor   transition-all  duration-700  ease-in-out   scale-90 hover:scale-100 translate-x-4 skew-y-3" key={key}>
                                    <Image
                                        src={e.image}
                                        alt=""
                                        width={200}
                                        height={200}
                                        className="  py-3 mx-auto "
                                    />
                                    <h3 className="text-2xl text-mainColor my-3">{e.title} </h3>
                                    <p className="w-[80%] mx-auto">{e.dec}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default AboutPage

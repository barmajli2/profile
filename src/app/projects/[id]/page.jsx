import React from 'react'
import { AllProjects } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import Similar from '@/components/Similar';
import Notfound from '@/app/not-found';

const  SingleProject= (props) => {
    const currentID = +props.params.id
    const length = AllProjects.length
    const singleProject = AllProjects.find((e) => e.id == currentID)
    return (
        <section className='select-none lg:my-12'>
            {
                currentID <= length ? (
                    <div className="lg:container md:w-[95%] mx-auto grid md:grid-cols-12">
                        <div className="col-span-9  flex flex-col   lg:h-[100vh] ">
                            {/* Content */}
                            <div className=" flex flex-col lg:flex-row items-center">
                            <div className="w-[350px] relative lg:mt-12 h-[300px]  overflow-hidden">
                                <Image
                                    src={singleProject.img}
                                    alt="logo"
                                    fill
                                    className="object-contain hover:scale-110   hover:rotate-6 transition-all  duration-700  ease-in-out cursor-grabbing"
                                />
                            </div>
                            <div className=" flex-1 p-4">
                                <h2 className='text-3xl capitalize border-b-2 border-mainColor w-fit pb-2 mb-4'>{singleProject.title}</h2>
                                <p className="ps-5 pt-3">{singleProject.desc}</p>
                            </div>
                            </div>
                            {/* Sammary */}
                            <Similar ID = {currentID}/>
                        </div>
                        {/* Side bar */}
                        <div className="lg:h-[100vh] md:col-span-3  col-span-12  border-s py-3 px-8">
                            {/* Tools */}
                            <div className=" ">
                                <h3 className='text-2xl  my-3 pb-3 border-b-2 font-semibold'>Tools....</h3>
                                <div className="flex flex-wrap flex-col lg:flex-row  text-center  items-center">
                                    {
                                        singleProject.tools.map((e, key) => (
                                            <h4 key={key} className='basis-1/2 w-full  bg-blue-400   text-white border-2 border-white capitalize hover:bg-bgColor transition-all  duration-300 ease-in-out   rounded cursor-grab'>{e}</h4>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* Links */}
                            <div className="">
                                <h3 className='text-2xl  my-3 pb-3 border-b-2 font-semibold'>Visit....</h3>
                                <div className="flex  justify-around items-center gap-2 text-center">
                                    <Link target='_blank' href={singleProject.repo} className='flex-1 py-1  rounded text-white border  border-blue-400 bg-blue-400 hover:bg-white hover:text-black hover:-rotate-6 transition-all  duration-500 ease-in-out '>
                                        Repo
                                    </Link>
                                    <Link target='_blank' href={singleProject.demo} className='flex-1 py-1 rounded border  border-blue-400 hover:bg-blue-400 hover:text-white hover:rotate-6 transition-all  duration-500 ease-in-out '>
                                        Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (<Notfound/>)
            }
        </section>
    )
}

export default SingleProject

import { AllProjects } from '@/data'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/sectionTitle'
const ProjectsPage = () => {
    return (
        <section className="my-12 min-h-[calc(100vh-4rem)]">
            <div className="container mx-auto">
                <SectionTitle title="Featured projects"/> 
                {/* Box */}
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 py-5">
                    {
                        AllProjects.map((item, key) => (
                            <Link href={item.path} key={key} className="scale-90 hover:scale-100 translate-x-4 skew-y-3    hover:shadow-2xl cursor-pointer  relative flex items-center flex-col transition-all  duration-700  ease-in-out rounded-3xl overflow-hidden">
                                <div className="overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt="logo"
                                        width={300}
                                        height={300}
                                        className="object-contain  "
                                    />
                                </div>
                                <h2 className='text-lg p-4 capitalize font-semibold'>{item.title}</h2>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ProjectsPage

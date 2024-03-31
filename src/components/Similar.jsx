import React from 'react'
import { AllProjects } from '@/data'
import Image from 'next/image'
import Link from 'next/link'

export default function Similar(props) {
  const currentID = props.ID
  const length = AllProjects.length
  const singleProject = AllProjects.find((e) => e.id == currentID)
  return (
    <div>
      <div className="border-t mb-8 px-4">
        <h2 className='text-3xl capitalize border-b-2 border-mainColor w-fit py-3 mb-4  '>similar</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 py-5 ">
          {

            AllProjects.map((e, i) => (
              e.type === singleProject.type ? (
                        <Link href={e.path} key={i} className=" hover:shadow-2xl cursor-pointer  relative flex items-center flex-col ">
                            <div className="overflow-hidden">
                                <Image
                                    src={e.img}
                                    alt="logo"
                                    width={300}
                                    height={300}
                                    className="object-contain hover:scale-110   hover:rotate-6 transition-all  duration-700  ease-in-out"
                                />
                            </div>
                            <h2 className='text-lg p-4 capitalize font-semibold'>{e.title}</h2>
                        </Link>
              ) :
                ("")
            ))

          }
        </div>

      </div>

    </div>
  )
}



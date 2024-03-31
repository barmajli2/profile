import React from 'react'
import Image from 'next/image'
import SectionTitle from '@/components/sectionTitle'
import { skillsImage } from '@/data'

export default function Skills() {

  return (
    <section className='container mx-auto py-8'>
      <SectionTitle title="Skills" />
      <div className=" w-1/2 mx-auto flex flex-wrap gap-12 items-center justify-center py-12 ">
        {
          skillsImage.map((item, key) => {
            return (
              <div key={key} className="flex flex-col items-center justify-center  gap-4 transition-all  duration-700  ease-in-out cursor-grabbing	 scale-75 hover:scale-110  skew-y-12">
                <Image
                  src={item.image}
                  alt=""
                  width={60}
                  height={60}
                  className=""
                />
                <h4>{item.title}</h4>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}










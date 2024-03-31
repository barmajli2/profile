import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { contactUrl } from '@/data'

const ContactPage = () => {
    return (
        <section className=" h-[calc(100vh-8rem)] pt-8">
            <div className="container mx-auto flex flex-col items-center justify-center ">
                <div className="flex gap-4 items-center justify-center mt-3">
                    {
                        contactUrl.map((e, key) => (
                            <Link className='hover:scale-125 transition-all duration-500' href={e.url} key={key} target='_blank'>
                                <Image
                                    src={e.image}
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-[35px] mb-4 "
                                    
                                />
                            </Link>
                        ))
                    }
                </div>
                {/* Image */}
                <Image
                    src="/contact.svg"
                    alt="logo"
                    width={350}
                    height={350}
                    className="opacity-50 hover:opacity-100 transition-all duration-500"
                />
            </div>
        </section>
    )
}

export default ContactPage

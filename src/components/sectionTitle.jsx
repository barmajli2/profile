import React from 'react'

 const SectionTitle =(props)=> {
    return (
        <span className="relative flex justify-center my-4">
            <div
                className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
            ></div>

            <h3 className="relative z-10 bg-[#FDF4FF] px-6 text-2xl font-semibold">{props.title}</h3>
        </span>
    )
}
export default SectionTitle
import React from 'react'

function Notfound() {
    return (
        <div className="grid h-[calc(100vh-8rem)] place-content-center bg-white px-4">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-200">404</h1>
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>
                <p className="mt-4 text-gray-500">We can&apos;t  find that page.</p>
            </div>
        </div>
    )
}
export default Notfound
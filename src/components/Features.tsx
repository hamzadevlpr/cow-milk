import React from 'react'
import sugar from '../public/sugar-cubes.png'
import energy from '../public/natural-product.png'
import protein from '../public/water-bottle.png'
import muscle from '../public/muscle-pain.png'
import Image from 'next/image'

export default function Features() {
    const items = [
        {
            icon: sugar,
            title: "No sugar ingredients",
        },
        {
            icon: energy,
            title: "Natural elements",
        },
        {
            icon: protein,
            title: "80G protein",
        },
        {
            icon: muscle,
            title: "Boost energy",
        },
    ]
    return (
        <section className="h-56 max-w-6xl mx-auto mb-20">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    {
                        items.map((item, index) => (
                            <div key={index} className="p-4 sm:w-1/4 w-1/2">
                                <div className="relative flex flex-col items-center justify-center">
                                    <svg
                                        id="sw-js-blob-svg"
                                        viewBox="0 0 100 100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='absolute w-36 h-36 z-0'
                                    >
                                        <defs>
                                            <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
                                                <stop id="stop1" stopColor="rgba(240, 247, 241, 1)" offset="0%" />
                                                <stop id="stop2" stopColor="rgba(240, 247, 241, 1)" offset="100%" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            fill="url(#sw-gradient)"
                                            d="M26.2,-32C31.3,-26.9,31,-16.1,32.1,-6.2C33.3,3.8,36,13.1,32.6,18.6C29.1,24.1,19.6,25.8,11,27.9C2.4,30.1,-5.2,32.6,-12.3,31.1C-19.5,29.7,-26.2,24.3,-30.5,17.4C-34.9,10.4,-36.8,1.8,-35.1,-5.9C-33.4,-13.6,-28.1,-20.3,-21.6,-25.2C-15.1,-30,-7.6,-32.9,1.5,-34.7C10.5,-36.5,21.1,-37.1,26.2,-32Z"
                                            width="100%"
                                            height="100%"
                                            transform="translate(50 50)"
                                            strokeWidth={0}
                                            style={{ transition: "0.3s" }}
                                            stroke="url(#sw-gradient)"
                                        />
                                    </svg>

                                    <Image
                                        width={50}
                                        height={50}
                                        src={item.icon}
                                        alt="icon"
                                        className="z-10"
                                    />
                                </div>
                                <div className="mt-6">
                                    <p className="leading-relaxed font-medium text-center">{item.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

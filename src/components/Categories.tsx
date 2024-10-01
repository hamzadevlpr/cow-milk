import Image from 'next/image'
import React from 'react'
import img01 from '../public/vecteezy_delicious-pink-ice-cream-in-white-bowl_50278228.png'
import milkCake from '../public/vecteezy_scrumptious-butter-cake-digital-design-element_50170745.png'
import vanilla from '../public/vecteezy_ai-generated-vanilla-ice-cream-scoops-in-white-bowl-png_42655018.png'
import Link from 'next/link'

export default function Categories() {
    const catItems = [
        {
            image: img01,
            title: "Milk strawberry shake",
        },
        {
            image: vanilla,
            title: "Italian vanilla dessert",
        },
        {
            image: milkCake,
            title: "vanila milk cake",
        },
    ]
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto">
                <div className="text-center my-10">
                    <h1 className="sm:text-6xl text-4xl font-medium title-font text-gray-900 mb-4 max-w-2xl mx-auto sm:leading-relaxed">
                        Create a recipes with our cow milk
                    </h1>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {catItems.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col text-center items-center">
                                <div className="w-80 h-80 inline-flex items-center justify-center bg-[#f0f7f1] mb-5 nanogone">
                                    <Image
                                        src={item.image}
                                        alt="content"
                                        width={250}
                                        height={250}
                                    />
                                </div>
                                {/* Title and Link */}
                                <div className="flex-grow">
                                    <Link href={'/'} className="text-gray-900 text-lg title-font font-bold mb-3 hover:underline hover:text-[#3FAD3D]">
                                        {item.title}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>

    )
}

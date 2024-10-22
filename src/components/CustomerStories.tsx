'use client'

import Image from 'next/image'
import hero from '../public/customers.webp'
import React from 'react';
import quote from '../public/right-quote.png'
export default function CustomerStories() {

  const slides = [
    {
      name: 'Emily Johnson',
      role: 'Café Owner in San Francisco',
      testimonial: "This organic milk is a true gem! As a café owner, I need the best ingredients, and this milk has elevated our coffee and lattes to a new level. It’s creamy, rich, and our customers love it. Plus, knowing it's organic gives us confidence that we're offering something healthy and natural."
    },
    {
      name: 'David Lin',
      role: 'Restaurant Owner in Sydney',
      testimonial: "Switching to this organic milk was one of the best decisions for our restaurant. The quality is second to none—it's fresh, flavorful, and pure. Our customers have noticed the difference, and so have we! It’s great to be supporting organic, sustainable farming while serving delicious meals."
    },
    {
      name: 'Sophia Martinez',
      role: 'Health Coach in Miami',
      testimonial: "I’m very conscious about what I put into my body, and this organic milk fits perfectly with my health goals. It’s natural, chemical-free, and tastes incredible! I recommend it to all of my clients who want to enjoy dairy without compromising on quality or nutrition."
    }


  ]
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };



  return (
    <section className="relative space-y-4 sm:p-20 p-10 bg-[#ddf0dc]">
      <h2 className="text-3xl text-left sm:text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
        Customer Stories
      </h2>
      <div data-aos="fade-right" className="relative z-10 flex justify-center items-center">
        <div className="hidden lg:block sm:w-[35rem] w-96 mx-auto lg:mt-0">
          <Image
            width={1000}
            height={1000}
            src={hero}
            alt="mockup"
            className={`spin-slow relative z-10 drop-shadow-2xl sm:w-[35rem] w-96`}
          />
        </div>
        <div className="max-w-2xl text-left space-y-4">
          <div className="flex items-center">
            {
              Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-[#3FAD3D] ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))
            }
          </div>

          <p className="mt-4 text-gray-700 leading-8">
            {slides[currentIndex].testimonial}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {slides[currentIndex].name}
          </h2>
          <h2 className="text-xl font-medium tracking-tight text-gray-900 sm:text-xl">
            {slides[currentIndex].role}
          </h2>
          <div className="lg:mt-8 lg:flex gap-2 flex">
            <button
              aria-label="Previous slide"
              onClick={prevSlide}
              className="rounded-full border border-[#3FAD3D] p-3 text-[#3FAD3D] transition hover:bg-[#3FAD3D] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              onClick={nextSlide}
              className="rounded-full border border-[#3FAD3D] p-3 text-[#3FAD3D] transition hover:bg-[#3FAD3D] hover:text-white"
            >
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Image
        width={200}
        height={200}
        src={quote}
        alt="cow_baby"
        className="-rotate-180 opacity-60 scale-x scale-x-[-1] absolute z-10 w-[10rem] right-10 sm:right-20  bottom-10 sm:bottom-40"
      />
    </section>
  );
}
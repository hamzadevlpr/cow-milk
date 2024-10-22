
import Image from 'next/image'
import React from 'react'
import hero from '../public/hero.png'
import milk from '../public/milk.png'
import cow_baby from '../public/Za9e.gif'
import pattern from '../public/vecteezy_hand-drawn-doodle-vaporize-icon_22183367.png'
import hero_bg from '../public/vecteezy_grunge-paintbrush-ink-stroke-brush_22070770.png'

export default function HomePage() {

    return (
        <>
            <section className="w-full relative sm:p-10 bg-[#3FAD3D]">
                <div className="relative z-10 grid lg:h-[48vh] max-w-7xl place-self-center px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
                    <div data-aos="fade-right" className="z-10 mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-xl mb-4 text-5xl font-bold tracking-wider md:text-6xl xl:text-[4rem] text-white ">
                            Milk is always good for health
                        </h1>
                        <p className="max-w-xl mb-6 font-light text-gray-50 lg:mb-8 md:text-lg lg:text-xl">
                            Get fresh and organic cow milk delivered to your doorstep, and enjoy the health benefits of milk, which is always good for health.
                        </p>
                        <a
                            data-aos="zoom-in"
                            href="#"
                            className="inline-flex items-center justify-center px-10 py-3 text-base font-medium text-center bg-white text-gray-700 border border-gray-300 rounded-2xl focus:ring-4 "
                        >
                            Buy Now
                        </a>
                    </div>
                    <div data-aos="fade-left" className="relative mx-auto lg:mt-0 lg:col-span-5 lg:flex">
                        <Image
                            width={1000}
                            height={1000}
                            src={hero_bg}
                            alt="mockup"
                            className="opacity-20 backdrop-blur-xl top-20 absolute z-0 drop-shadow-2xl sm:w-[35rem] w-96"
                        />
                        <Image
                            width={1000}
                            height={1000}
                            src={hero}
                            alt="mockup"
                            className="pulse relative z-10 drop-shadow-2xl sm:w-[35rem] w-96"
                        />

                        <Image
                            width={1000}
                            height={1000}
                            src={milk}
                            alt="mockup"
                            className="absolute z-0 sm:w-[35rem] w-96 bottom-0 left-0"
                        />
                    </div>
                    <Image
                        data-aos="fade-up"
                        width={200}
                        height={200}
                        src={cow_baby}
                        alt="cow_baby"
                        className="lg:block hidden absolute left-[22rem] z-10 sm:w-[13rem] w-96 -bottom-32"
                    />
                    <div data-aos="fade-up" className="lg:block hidden absolute -bottom-5 left-[26.5rem]">
                        <svg
                            id="sw-js-blob-svg"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            className='absolute w-36 h-36 z-0 opacity-50 transition-all duration-300 ease-in-out'
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
                    </div>
                </div>
                <Image
                    width={200}
                    height={200}
                    src={pattern}
                    alt="pattern"
                    className="opacity-30 absolute left-0 sm:-bottom-24 -bottom-10 z-10 sm:w-[15rem] w-40"
                />
            </section>
            <div className="z-0 relative">
                <svg
                    id="wave"
                    style={{ transform: "rotate(180deg)", transition: "0.3s" }}
                    className="m-0"
                    viewBox="0 0 1440 180"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
                            <stop stopColor="rgba(63, 173, 61, 1)" offset="0%" />
                            <stop stopColor="rgba(63, 173, 61, 1)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        style={{ transform: "translate(0, 0px)", opacity: 1 }}
                        fill="url(#sw-gradient-0)"
                        d="M0,18L12.6,39C25.3,60,51,102,76,99C101.1,96,126,48,152,51C176.8,54,202,108,227,132C252.6,156,278,150,303,126C328.4,102,354,60,379,51C404.2,42,429,66,455,75C480,84,505,78,531,78C555.8,78,581,84,606,87C631.6,90,657,90,682,93C707.4,96,733,102,758,96C783.2,90,808,72,834,66C858.9,60,884,66,909,69C934.7,72,960,72,985,87C1010.5,102,1036,132,1061,147C1086.3,162,1112,162,1137,141C1162.1,120,1187,78,1213,75C1237.9,72,1263,108,1288,117C1313.7,126,1339,108,1364,102C1389.5,96,1415,102,1440,87C1465.3,72,1491,36,1516,21C1541.1,6,1566,12,1592,21C1616.8,30,1642,42,1667,63C1692.6,84,1718,114,1743,129C1768.4,144,1794,144,1806,144L1818.9,144L1818.9,180L1806.3,180C1793.7,180,1768,180,1743,180C1717.9,180,1693,180,1667,180C1642.1,180,1617,180,1592,180C1566.3,180,1541,180,1516,180C1490.5,180,1465,180,1440,180C1414.7,180,1389,180,1364,180C1338.9,180,1314,180,1288,180C1263.2,180,1238,180,1213,180C1187.4,180,1162,180,1137,180C1111.6,180,1086,180,1061,180C1035.8,180,1011,180,985,180C960,180,935,180,909,180C884.2,180,859,180,834,180C808.4,180,783,180,758,180C732.6,180,707,180,682,180C656.8,180,632,180,606,180C581.1,180,556,180,531,180C505.3,180,480,180,455,180C429.5,180,404,180,379,180C353.7,180,328,180,303,180C277.9,180,253,180,227,180C202.1,180,177,180,152,180C126.3,180,101,180,76,180C50.5,180,25,180,13,180L0,180Z"
                    />
                </svg>

            </div>

        </>

    )
}

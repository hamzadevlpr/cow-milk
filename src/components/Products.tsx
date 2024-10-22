import Image from 'next/image'
import package01 from '../public/pngegg.png'
import Link from 'next/link'

export default function Products() {
    const catItems = [
        {
            image: package01,
            title: "Thailand milk",
            price: "$10",
        },
        {
            image: package01,
            title: "Malaysian milk",
            price: "$15",
        },
        {
            image: package01,
            title: "Singapore milk",
            price: "$20",
        },
    ]

    return (
        <section className="text-gray-600 body-font mb-10">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex sm:flex-row flex-col justify-between items-end my-10">
                    <h1 data-aos="fade-up" className="sm:text-6xl text-5xl font-medium title-font text-gray-900 mb-4 sm:leading-relaxed">
                        Our popular product
                    </h1>
                    <Link href={'/'} className="text-gray-900 text-sm title-font font-medium mb-3 underline hover:text-[#3FAD3D]">
                        All products
                    </Link>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {catItems.map((item, index) => {
                        return (
                            <div key={index} className="cursor-pointer relative flex flex-col text-center items-center group">
                                <div className="w-80 h-80 inline-flex items-center justify-center bg-[#f0f7f1] mb-5 nanogone">
                                    <Image
                                        data-aos="fade-downt"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="5000"
                                        src={item.image}
                                        alt="content"
                                        width={150}
                                        height={150}
                                    />
                                </div>

                                {/* Price with SVG */}
                                <div className="absolute top-[2.25rem] left-[4.25rem] z-10 shadow-md flex flex-col items-center justify-center">
                                    <svg
                                        id="sw-js-blob-svg"
                                        viewBox="0 0 100 100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='absolute w-28 h-28 z-0 transition-all duration-300 ease-in-out'
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
                                            className="group-hover:fill-[#3FAD3D] transition-colors duration-300 ease-in-out"
                                        />
                                    </svg>
                                    <span className="title-font text-2xl text-gray-900 z-10 ">
                                        {item.price}
                                    </span>
                                </div>

                                {/* Title Link */}
                                <div className="flex-grow">
                                    <Link href={'/'} className="text-gray-900 text-lg title-font font-bold mb-3 transition-colors duration-300 ease-in-out hover:text-[#3FAD3D] group-hover:text-[#3FAD3D]">
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

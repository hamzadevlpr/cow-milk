import Image from 'next/image';
import almonds from '../public/vecteezy_group-of-almond-nuts-concept_12596342.png';
import pattern from '../public/vecteezy_hand-drawn-doodle-vaporize-icon_22183367.png';
import milkPackage from '../public/package.png';
import blob from '../public/blob.svg';
export default function Benefits() {
    return (
        <section className="relative text-gray-600 body-font py-10 bg-[#ddf0dc]">
            <Image
                width={200}
                height={200}
                src={pattern}
                alt="cow_baby"
                className="opacity-30 absolute rotate-180 top-0 right-0 z-10 sm:w-[15rem] w-40"
            />
            <div className="container mx-auto">
                <div className="text-center my-10">
                    <h1 data-aos="fade-up" className="sm:text-6xl text-4xl font-medium title-font text-gray-900 mb-4 max-w-2xl mx-auto sm:leading-relaxed">
                        Milk is always a good for health
                    </h1>
                </div>
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap justify-center sm:gap-20">
                        <div data-aos="fade-up" className="relative w-64 h-64 mb-20">
                            <Image
                                src={milkPackage}
                                alt="content"
                                width={200}
                                height={200}
                                className="relative z-10"
                            />
                            <Image
                                src={blob}
                                alt="blob background"
                                width={400}
                                height={400}
                                className="absolute -bottom-40 left-0 z-0"
                            />
                        </div>


                        <div data-aos="fade-up" className="max-w-sm rounded-lg flex sm:flex-col flex-col-reverse mt-20">
                            <Image className="rounded-t-lg" src={almonds} alt="" />
                            <div className="p-5">
                                <p className="mb-3 font-normal">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in
                                    reverse chronological order.
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="max-w-sm rounded-lg flex sm:flex-col flex-col-reverse">

                            <div className="p-5">
                                <p className="mb-3 font-normal">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in
                                    reverse chronological order.
                                </p>
                            </div>
                            <Image className="rounded-t-lg" src={almonds} alt="" />
                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}

'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function AboutDescription() {
    return (
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-300">
            <div className="absolute top-0 left-0 w-full h-1" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h1 className="text-sm md:text-base uppercase tracking-widest bg-gradient-to-r from-green-700 to-black bg-clip-text text-transparent font-semibold mb-4">
                        About Us
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-700 to-black bg-clip-text text-transparent">
            <span className="inline-flex items-center gap-2">
              WATCH HUB <Clock className="w-8 h-8 md:w-10 md:h-10 text-green-900" />
            </span>
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-xl">
                            <Image
                                src='/asesst/man-looking-his-watch.jpg'
                                alt='Man appreciating a fine watch'
                                width={1000}
                                height={1000}
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-700 to-black  w-24 h-24 rounded-lg z-[-1] hidden md:block" />
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:w-1/2"
                    >
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <p className="text-lg leading-relaxed mb-6">
                                Welcome to <span className="font-semibold bg-gradient-to-r from-green-700 to-black bg-clip-text text-transparent">Watch Hub</span>, where time meets timeless elegance. Founded with a passion for craftsmanship and precision, our mission is to offer a curated collection of premium watches that combine style, durability, and innovation.
                            </p>

                            <p className="text-lg leading-relaxed mb-6">
                                Whether you&#39;re looking for a classic timepiece, a modern smart watch, or a luxury statement piece, we have something for every wrist and every occasion.
                            </p>

                            <p className="text-lg leading-relaxed mb-6">
                                At Watch Hub, we believe a watch is more than just an accessory — it&#39;s a reflection of who you are. That&#39;s why we partner with trusted brands and artisans from around the world to ensure every piece we offer meets the highest standards of quality and design.
                            </p>

                            <p className="text-lg leading-relaxed">
                                With a commitment to excellence and customer satisfaction, our team is here to guide you through your journey to find the perfect watch. Thank you for choosing us to be part of your story in time.
                            </p>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="mt-8 inline-block"
                        >
                            <button className="flex items-center gap-2 bg-transparent border-[1px] hover:bg-black hover:text-white text-black px-6 py-3 rounded-md font-medium transition-all duration-300">
                                Our Story
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
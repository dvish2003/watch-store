'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function HomeDescription() {
    return (
        <section className='relative w-screen h-screen overflow-hidden'>
            {/* Dark overlay */}
            <div className='absolute inset-0 bg-black/60 z-0' />

            {/* Background image */}
            <div
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: 'url(/asesst/rendering-smart-home-device.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(0px)'
                }}
            />

            {/* Content container */}
            <div className='relative z-10 h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 text-white'>
                {/* Top content */}
                <motion.div
                    className='max-w-[700px]'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
                        Welcome to <span className='text-transparent bg-gradient-to-r from-green-700 to-black bg-clip-text'>Timeless Precision</span>
                    </h1>
                    <p className='text-lg md:text-xl mb-8 text-gray-200'>
                        Explore our curated collection of luxury timepieces that redefine the boundaries of innovation, engineering, and artistry. Each watch in our collection is a bold expression of precision mechanics, elegant design, and unrivaled craftsmanship.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='flex items-center gap-2 bg-transparent backdrop-blur-2xl border-1 hover:bg-black hover:border-black shadow text-white px-8 py-3 rounded-full font-medium transition-colors'
                    >
                        EXPLORE COLLECTION <ArrowRight size={18} />
                    </motion.button>
                </motion.div>

                {/* Middle content */}
                <motion.div
                    className='text-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-light italic'>
                        Designed for collectors. <span className='font-bold'>Engineered for visionaries.</span> Crafted without limits.
                    </h2>
                </motion.div>

                {/* Bottom content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className='self-end text-right'
                >
                    <h3 className='text-xl md:text-2xl uppercase tracking-widest text-transparent bg-gradient-to-r from-gray-900 to-black bg-clip-text font-semibold'>
                        Inspired by the impossible
                    </h3>
                </motion.div>
            </div>
        </section>
    )
}
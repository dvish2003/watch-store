'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HomeDecription from "../homeDescription/page";

export default function Home() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section
            ref={containerRef}
            className="w-screen h-[200vh] bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400"
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{
                        scale,
                        opacity,
                        y
                    }}
                    className="origin-center"
                >
                    <h1 className="text-[250px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-black text-center">
                        Welcome to Watch Hub
                    </h1>
                </motion.div>
            </div>
                      <HomeDecription/>
            
        </section>
    );
}
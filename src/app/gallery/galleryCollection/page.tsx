

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GalleryCollection() {
  const images = [
    "/asesst/186.jpg",
    "/asesst/beautiful-spring-time-change-concept.jpg",
    "/asesst/closeup-shot-modern-cool-black-digital-watch-with-brown-leather-strap.jpg",
    "/asesst/gray-scale-shot-black-watch.jpg",
    "/asesst/man-looking-his-watch.jpg",
    "/asesst/rendering-smart-home-device.jpg",
    "/asesst/rendering-smart-home-device (1).jpg",
    "/asesst/rendering-smart-home-device (2).jpg"
  ];

  return (
    <section className="py-16 px-4 sm:px-8 bg-gray-50 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-green-700 to-black bg-clip-text"
      >
        Gallery
      </motion.h1>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <div className="flex overflow-x-auto pb-8 hide-scrollbar space-x-6 px-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -25% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 relative group"
              style={{ width: 'clamp(280px, 30vw, 380px)' }}
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={image}
                  alt={`Gallery item ${index + 1}`}
                  width={500}
                  height={750}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
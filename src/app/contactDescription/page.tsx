'use client';
import React from 'react';

export default function ContactDescription() {
  return (
    <section className="relative w-screen h-screen bg-cover bg-center" style={{ backgroundImage: "url('/asesst/186.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Contact Form */}
      <form
        action=""
        className="relative z-10 w-full max-w-2xl mx-auto h-full flex flex-col justify-center px-6 py-12 text-white"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get in Touch with{' '}
          <span className="text-transparent bg-gradient-to-r from-green-500 to-emerald-900 bg-clip-text">
            Timeless Precision
          </span>
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          We value your feedback and inquiries. Whether you have questions about our collection,
          need assistance, or want to share your thoughts, we're here to help. Fill out the form
          and our team will get back to you soon.
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md border border-gray-600 bg-black/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md border border-gray-600 bg-black/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded-md border border-gray-600 bg-black/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 transition rounded-md font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

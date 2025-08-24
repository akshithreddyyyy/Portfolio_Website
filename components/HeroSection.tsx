
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Akshith Beeravolu
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Computer Science Graduate passionate about Software Development
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer whitespace-nowrap flex items-center gap-2">
            <i className="ri-download-line"></i>
            Download Resume
          </button>
          <Link href="/contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-md font-medium transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2">
            <i className="ri-mail-line"></i>
            Get In Touch
          </Link>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="mailto:akshithbeeravolu9@gmail.com"
            className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-mail-line text-xl"></i>
            </div>
          </a>
          <a
            href="tel:+919121535088"
            className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-phone-line text-xl"></i>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/akshith-reddy-810997281"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-linkedin-line text-xl"></i>
            </div>
          </a>
          <a
            href="https://github.com/akshithreddyyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-github-line text-xl"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

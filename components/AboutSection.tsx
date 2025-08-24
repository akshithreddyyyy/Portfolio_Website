
'use client';

export default function AboutSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 bg-gradient-to-br from-white to-blue-50 border-0">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">About Me</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-center leading-relaxed text-lg">
              An enthusiastic and passionate computer science graduate who would like an opportunity to put 
              Software Development & Interpersonal skills to use and continuously aim to learn and enhance 
              my knowledge about new and emerging trends in the Software world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

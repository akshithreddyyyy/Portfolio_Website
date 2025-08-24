
'use client';

export default function StatsSection() {
  const stats = [
    {
      number: "5+",
      title: "Programming Languages",
      description: "C, C++, Java, Python",
      color: "bg-blue-600/10 text-blue-600"
    },
    {
      number: "10+",
      title: "Technologies",
      description: "Full-stack development",
      color: "bg-purple-600/10 text-purple-600"
    },
    {
      number: "5+",
      title: "Certifications",
      description: "Industry recognized",
      color: "bg-green-600/10 text-green-600"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${stat.color.split(' ')[0]}`}>
                <span className={`font-bold text-xl ${stat.color.split(' ')[1]}`}>
                  {stat.number}
                </span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-800 text-lg">{stat.title}</h3>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


'use client';

import SimpleFeedbackForm from './SimpleFeedbackForm';
import ContactForm from './ContactForm';

export default function ContactContent() {
  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'akshithbeeravolu@gmail.com',
      link: 'mailto:akshithbeeravolu@gmail.com'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      value: '+91 91215 35088',
      link: 'tel:+919121535088'
    },
    {
      icon: 'ri-linkedin-line',
      title: 'LinkedIn',
      value: 'akshith-reddy-810997281',
      link: 'https://www.linkedin.com/in/akshith-reddy-810997281'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      value: 'Hyderabad, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: 'ri-github-line',
      name: 'GitHub',
      url: 'https://github.com/akshithreddyyyy',
      color: 'hover:text-gray-800'
    },
    {
      icon: 'ri-linkedin-line',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/akshith-reddy-810997281',
      color: 'hover:text-blue-600'
    },
    {
      icon: 'ri-twitter-line',
      name: 'Twitter',
      url: 'https://twitter.com/Akshithreddy09',
      color: 'hover:text-blue-400'
    },
    {
      icon: 'ri-instagram-line',
      name: 'Instagram',
      url: 'https://instagram.com/_.akshith_reddy._',
      color: 'hover:text-pink-600'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's collaborate on your next project or discuss opportunities in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SimpleFeedbackForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className={`${info.icon} text-blue-600`}></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 transition-all duration-300 hover:shadow-md cursor-pointer ${social.color}`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Let's Build Something Great!</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I'm always excited to work on new projects and collaborate with talented individuals. 
                Whether you have a project idea, job opportunity, or just want to connect, feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

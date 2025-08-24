
'use client';

import ContactForm from './ContactForm';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: 'ri-mail-line',
      label: 'Email',
      value: 'akshithbeeravolu9@gmail.com',
      link: 'mailto:akshithbeeravolu9@gmail.com'
    },
    {
      icon: 'ri-phone-line',
      label: 'Phone',
      value: '+91 91215 35088',
      link: 'tel:+919121535088'
    },
    {
      icon: 'ri-map-pin-line',
      label: 'Location',
      value: 'Hyderabad, India',
      link: 'https://maps.google.com/?q=Hyderabad,India'
    },
    {
      icon: 'ri-linkedin-line',
      label: 'LinkedIn',
      value: 'akshith-reddy-810997281',
      link: 'https://www.linkedin.com/in/akshith-reddy-810997281'
    }
  ];

  const socialLinks = [
    { icon: 'ri-github-line', url: 'https://github.com/akshithreddyyyy', label: 'GitHub' },
    { icon: 'ri-linkedin-line', url: 'https://www.linkedin.com/in/akshith-reddy-810997281', label: 'LinkedIn' },
    { icon: 'ri-twitter-line', url: 'https://twitter.com/Akshithreddy09', label: 'Twitter' },
    { icon: 'ri-instagram-line', url: 'https://instagram.com/_.akshith_reddy._', label: 'Instagram' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                >
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <i className={`${info.icon} text-blue-600 text-xl w-6 h-6 flex items-center justify-center`}></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">{info.label}</p>
                    <p className="text-gray-800 font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer group"
                  title={social.label}
                >
                  <i className={`${social.icon} text-xl w-6 h-6 flex items-center justify-center`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Let's Work Together</h3>
            <p className="text-gray-600 text-sm mb-4">
              I'm available for freelance projects, consulting, or full-time opportunities. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex items-center space-x-2">
              <i className="ri-calendar-line text-green-600 w-4 h-4 flex items-center justify-center"></i>
              <span className="text-sm text-gray-600">Usually responds within 24 hours</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

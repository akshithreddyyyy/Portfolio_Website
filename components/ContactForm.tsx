
'use client';

import { useState, useRef } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus('validation_error');
      return;
    }

    if (formData.message.length > 500) {
      setSubmitStatus('validation_error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // Dynamic import to ensure client-side execution
      const { default: emailjs } = await import('@emailjs/browser');
      
      // Initialize EmailJS with public key
      emailjs.init('oAwHVSGoZ85Ik9yVO');
      
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        to_name: 'Akshith Reddy'
      };

      const result = await emailjs.send(
        'service_dq4p96g',
        'template_agcsb17m',
        templateParams
      );

      console.log('EmailJS Success:', result);
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitStatus('');
        }, 5000);
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error) {
      console.error('EmailJS error details:', {
        error: error,
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          <div className="flex items-center gap-2">
            <i className="ri-check-line w-5 h-5 flex items-center justify-center"></i>
            Thank you for your message! I'll get back to you soon.
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          <div className="flex items-center gap-2">
            <i className="ri-error-warning-line w-5 h-5 flex items-center justify-center"></i>
            Failed to send message. Please check your internet connection and try again.
          </div>
        </div>
      )}

      {submitStatus === 'validation_error' && (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md">
          <div className="flex items-center gap-2">
            <i className="ri-alert-line w-5 h-5 flex items-center justify-center"></i>
            Please fill in all required fields and ensure message is under 500 characters.
          </div>
        </div>
      )}

      <form ref={formRef} id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            maxLength={500}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical text-sm"
            placeholder="Tell me about your project or inquiry..."
          ></textarea>
          <div className="text-sm text-gray-500 mt-1">
            {formData.message.length}/500 characters
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || formData.message.length > 500}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <i className="ri-loader-4-line animate-spin w-5 h-5 flex items-center justify-center"></i>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <i className="ri-send-plane-line w-5 h-5 flex items-center justify-center"></i>
              Send Message
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

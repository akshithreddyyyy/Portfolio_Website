'use client';

import { useState } from 'react';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.feedback.trim()) {
      setSubmitStatus('validation_error');
      return;
    }

    if (formData.feedback.length > 500) {
      setSubmitStatus('validation_error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      const { default: emailjs } = await import('@emailjs/browser');
      
      emailjs.init('oAwHVSGoZ85Ik9yVO');
      
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.feedback.trim(),
        to_name: 'Akshith Reddy',
        to_email: 'akshithbeeravolu@gmail.com'
      };

      const result = await emailjs.send(
        'service_dq4p96g',
        'template_agcsb17m',
        templateParams
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          feedback: ''
        });
        
        setTimeout(() => {
          setSubmitStatus('');
        }, 5000);
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Share Your Feedback</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          <div className="flex items-center gap-2">
            <i className="ri-check-line w-5 h-5 flex items-center justify-center"></i>
            Thank you for your feedback! I appreciate your input.
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          <div className="flex items-center gap-2">
            <i className="ri-error-warning-line w-5 h-5 flex items-center justify-center"></i>
            Failed to send feedback. Please try again later.
          </div>
        </div>
      )}

      {submitStatus === 'validation_error' && (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md">
          <div className="flex items-center gap-2">
            <i className="ri-alert-line w-5 h-5 flex items-center justify-center"></i>
            Please fill in all fields and keep feedback under 500 characters.
          </div>
        </div>
      )}

      <form id="feedback-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
              placeholder="Enter your name"
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
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
            Your Feedback *
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleInputChange}
            required
            rows={6}
            maxLength={500}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical text-sm"
            placeholder="Share your thoughts, suggestions, or feedback about my work..."
          ></textarea>
          <div className="text-sm text-gray-500 mt-1">
            {formData.feedback.length}/500 characters
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || formData.feedback.length > 500}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <i className="ri-loader-4-line animate-spin w-5 h-5 flex items-center justify-center"></i>
              Sending Feedback...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <i className="ri-send-plane-line w-5 h-5 flex items-center justify-center"></i>
              Send Feedback
            </span>
          )}
        </button>
      </form>
    </div>
  );
}
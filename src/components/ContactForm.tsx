'use client';

import { useState, useEffect } from 'react';
import { SITE } from '@/lib/constants';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    requirement: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Check URL parameters for pre-selected product or service
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const productParam = urlParams.get('product') || urlParams.get('service');
      if (productParam) {
        setFormData((prev) => ({
          ...prev,
          requirement: `Requirement for: ${productParam}`,
        }));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const submissionData = new FormData();
      submissionData.append('Name', formData.name);
      submissionData.append('Company', formData.company || 'Not Specified');
      submissionData.append('Phone', formData.phone || 'Not Specified');
      submissionData.append('Email', formData.email);
      submissionData.append('Requirement', formData.requirement);
      submissionData.append('Message', formData.message || 'None');
      submissionData.append('_subject', `New CNC Machining Enquiry from ${formData.name}`);
      submissionData.append('_captcha', 'false');
      submissionData.append('_template', 'table');

      const response = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: submissionData,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          requirement: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send enquiry online.');
      }
    } catch (err: unknown) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(
        'Unable to send automatically. Please use the WhatsApp or direct Email buttons below.'
      );
    }
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`CNC Machining Enquiry - ${formData.name || 'Velani Metal'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRequirement: ${formData.requirement}\nMessage: ${formData.message}`
    );
    return `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-surface-200">
      <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2">
        <span className="w-2.5 h-6 bg-accent rounded-full inline-block"></span>
        Request a Manufacturing Quote
      </h3>

      {status === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm">
          <div className="flex items-center gap-2 font-bold text-base mb-1">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Enquiry Sent Successfully!
          </div>
          <p>
            Thank you. Your component requirement has been forwarded to our engineering team at{' '}
            <span className="font-semibold">{SITE.email}</span>. We will review your specifications and get back to you shortly.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
          <p className="font-semibold mb-2">{errorMessage}</p>
          <div className="flex flex-wrap gap-3 mt-3">
            <a href={getMailtoUrl()} className="btn-primary py-2 px-4 text-xs">
              Send via Email App ({SITE.email})
            </a>
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white py-2 px-4 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5"
            >
              Send on WhatsApp
            </a>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-xs uppercase font-bold text-navy-800 mb-1.5">
              Your Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="e.g. Rajesh Shah"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-surface-50 border border-surface-200 rounded-lg focus:ring-2 focus:ring-steel-500 focus:bg-white focus:border-steel-500 outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-xs uppercase font-bold text-navy-800 mb-1.5">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="e.g. Precision Engineering Ltd."
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-surface-50 border border-surface-200 rounded-lg focus:ring-2 focus:ring-steel-500 focus:bg-white focus:border-steel-500 outline-none transition-all text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-xs uppercase font-bold text-navy-800 mb-1.5">
              Phone / Mobile Number <span className="text-accent">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-surface-50 border border-surface-200 rounded-lg focus:ring-2 focus:ring-steel-500 focus:bg-white focus:border-steel-500 outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs uppercase font-bold text-navy-800 mb-1.5">
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-surface-50 border border-surface-200 rounded-lg focus:ring-2 focus:ring-steel-500 focus:bg-white focus:border-steel-500 outline-none transition-all text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="requirement" className="block text-xs uppercase font-bold text-navy-800 mb-1.5">
            Component Requirement / Machining Job <span className="text-accent">*</span>
          </label>
          <textarea
            id="requirement"
            name="requirement"
            required
            rows={3}
            placeholder="e.g. CNC Turned Shafts, V Groove Pulleys, or Job Work requirements with dimensions/tolerances"
            value={formData.requirement}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-surface-50 border border-surface-200 rounded-lg focus:ring-2 focus:ring-steel-500 focus:bg-white focus:border-steel-500 outline-none transition-all text-sm resize-y"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs uppercase font-bold text-navy-800 mb-1.5">
            Additional Notes / Quantity
          </label>
          <textarea
            id="message"
            name="message"
            rows={2}
            placeholder="Batch quantity, delivery timeline, or material preferences..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-surface-50 border border-surface-200 rounded-lg focus:ring-2 focus:ring-steel-500 focus:bg-white focus:border-steel-500 outline-none transition-all text-sm resize-y"
          />
        </div>

        <div className="pt-2 flex flex-col space-y-3">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`btn-primary w-full py-3.5 text-base shadow-md font-semibold flex items-center justify-center gap-2 ${
              status === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Enquiry to {SITE.email}...
              </>
            ) : (
              'Send Enquiry'
            )}
          </button>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-surface-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase font-medium">OR Send Instant Requirement</span>
            <div className="flex-grow border-t border-surface-200"></div>
          </div>

          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center flex justify-center items-center gap-2 shadow-sm text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
            Send Requirement on WhatsApp ({SITE.phone})
          </a>
        </div>
      </form>
    </div>
  );
}

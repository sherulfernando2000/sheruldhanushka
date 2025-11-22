"use client"

import React, { useState, useEffect } from 'react';
import InputField from '@/components/ui/input';
import { ArrowUpRight } from 'lucide-react';

export default function ContactForm() {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    message: '',
    receiveUpdates: false
  });

    const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    message: ''
  });

  const [touched, setTouched] = useState<any>({
    fullName: false,
    email: false,
    phone: false,
    country: false,
    company: false,
    message: false
  });

  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (value.trim().length < 2) {
          error = 'Full name must be at least 2 characters';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (!/^\+?[\d\s-()]{10,}$/.test(value)) {
          error = 'Please enter a valid phone number';
        }
        break;

      case 'country':
        if (!value.trim()) {
          error = 'Country is required';
        }
        break;

      case 'company':
        if (!value.trim()) {
          error = 'Company name is required';
        }
        break;

      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const validateForm = () => {
    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      country: validateField('country', formData.country),
      company: validateField('company', formData.company),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      country: true,
      company: true,
      message: true
    });

   
    return !Object.values(newErrors).some(error => error !== '');
  };


  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (fieldName:string, value:string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));

     if (touched[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors(prev => ({
        ...prev,
        [fieldName]: error
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData(prev => ({
      ...prev,
      receiveUpdates: e.target.checked
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fill form correctly before submitting.');
      return;
    }
    setIsSubmitting(true);

    try {
      console.log('Form submitted:', formData);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        company: '',
        message: '',
        receiveUpdates: false
      });
      
      alert('Thank you for your message.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasErrors = Object.values(errors).some(error => error !== '');


  return (
    <div className="h-full bg-secondary/90 flex items-center justify-center">
      <div className="w-full px-6 sm:pl-16 lg:pl-36 xl:pl-72  sm:pr-20 py-16 sm:py-20">
        
        <div className="text-white ">
          <h1 className="text-2xl sm:text-4xl font-light mb-12 ">
            Get in touch to discuss your software vision with industry experts
          </h1>

          <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-6" noValidate>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-12'>
              <div>
                <InputField
                  label="Full name"
                  required
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={(value) => handleInputChange('fullName', value)}
                  
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <InputField
                  label="Email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(value) => handleInputChange('email', value)}
                 
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2  lg:gap-12'>
              <div>
                <InputField
                  label="Phone number"
                  type="tel"
                  required
                  placeholder="+94 XXX XXX XXX"
                  value={formData.phone}
                  onChange={(value) => handleInputChange('phone', value)}
                  
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <InputField
                  label="Country"
                  type="select"
                  required
                  placeholder="Sri Lanka"
                  value={formData.country}
                  onChange={(value) => handleInputChange('country', value)}
                  
                />
                {errors.country && (
                  <p className="text-red-400 text-xs mt-1">{errors.country}</p>
                )}
              </div>
            </div>

            <div>
              <InputField
                label="Company"
                required
                placeholder="Your company name"
                value={formData.company}
                onChange={(value) => handleInputChange('company', value)}
                
              />
              {errors.company && (
                <p className="text-red-400 text-xs mt-1">{errors.company}</p>
              )}
            </div>

            <div>
              <InputField
                label="Message"
                type="textarea"
                required
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(value) => handleInputChange('message', value)}
                
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="receiveUpdates"
                checked={formData.receiveUpdates}
                onChange={handleCheckboxChange}
                className="w-4 h-4 border border-gray-600 rounded cursor-pointer bg-transparent"
              />
              <label htmlFor="receiveUpdates" className="text-sm text-gray-300 cursor-pointer">
                I want to receive news and updates once in a while
              </label>
            </div>

            <p className="text-xs text-gray-400">
              We will add your info to our CRM for contacting you regarding your request. For more info please consult our{' '}
              <span className="underline cursor-pointer">privacy policy</span>
            </p>

            <button
              type="submit"
              disabled={isSubmitting || hasErrors}
              className="bg-white text-secondary px-8 py-3 rounded-full font-medium hover:bg-secondary hover:text-white transition-colors flex items-center gap-2 w-fit cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Contact us'}
              {!isSubmitting && <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 sm:mt-1" />}
            </button>

            
          </form>
        </div>

       
        
      </div>
    </div>
  );
};


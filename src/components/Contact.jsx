

import { useState, useEffect } from 'react';
import InputField from '../components/handmade/input';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES } from '../constants'

export default function ContactForm() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      text: "Sherul delivered a clean, high-performance web platform using React and Tailwind. His attention to detail and UI/UX thinking helped us turn rough ideas into a polished final product. The modular code structure and responsiveness of the design clearly show his strength in front-end engineering.",
      name: "Kasun Perera",
      title: "Product Manager, NovaLabs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      text: "We worked with Sherul on a full-stack system built with NestJS and Firebase. His ability to connect real-time data flows with a smooth user experience was outstanding. What impressed us most was his quick problem-solving and deep understanding of modern backend architecture.",
      name: "Amanda Silva",
      title: "CTO, CloudEdge Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      text: "Sherul built our internal dashboard using Spring Boot and React, and the result exceeded expectations. The API design was clean, secure, and scalable. His full-stack skills—both UI development and backend engineering—helped us streamline our workflow significantly.",
      name: "Ravindu Fernando",
      title: "CEO, InsightTech",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    }
  ];

  const contact_details =
  {
    phone: "+94778626300",
    email: "sherul.dhanushka@gmail.com",
    address: "Maggona, Kalutara, Colombo, Sri Lanka",
  }


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

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phone: false,
    country: false,
    company: false,
    message: false
  });

  const validateField = (name, value) => {
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

  const handleInputChange = (fieldName, value) => {
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

  useEffect(() => {
    if (!isAutoPlay) return;

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isAutoPlay, currentIndex]);

  useEffect(() => {
    if (progress >= 100 && isAutoPlay) {
      handleNext();
    }
  }, [progress, isAutoPlay]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
  };

  const handleManualNavigation = (direction) => {
    setIsAutoPlay(false);
    if (direction === 'next') {
      handleNext();
    } else {
      handlePrev();
    }
    setTimeout(() => setIsAutoPlay(true), 100);
  };

  const currentTestimonial = testimonials[currentIndex];



  return (
    <div className="h-full  flex items-center justify-center" id='contact'>
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        

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
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-secondary hover:text-black transition-colors flex items-center gap-2 w-fit cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Contact us'}
              {!isSubmitting && <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 sm:mt-1" />}
            </button>


          </form>
        </div>

        <div className="relative rounded-lg p-8 lg:p-12 flex flex-col justify-between border border-stone-50/30 shadow-lg shadow-white/10 overflow-hidden min-h-[450px]">

          {/* 1. BACKGROUND IMAGE HOLDER (Absolute) */}
          {/* The image is applied here via the React 'style' prop for dynamic URL injection */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
            style={{ backgroundImage: `url('${SERVICES[0].img}')` }}
            aria-hidden="true"
          >
          </div>

          {/* 2. SEMI-TRANSPARENT BLURRED OVERLAY (Absolute) */}
          {/* This replicates your original 'bg-white/10 backdrop-blur-md' but layered over the image */}
          <div className="absolute inset-0 z-10 bg-black/80 backdrop-blur-sm rounded-lg" />

          {/* 3. CONTENT WRAPPER (Relative z-index to sit above the background layers) */}
          <div className="relative z-20 flex flex-col justify-between h-full">

            {/* Testimonial Content */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-white">
                What My customer's say
              </h2>

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-300">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {currentTestimonial.title}
                  </div>
                </div>
              </div>

              <div className="text-3xl text-gray-400 ">"</div>

              <p className="text-gray-300 leading-snug mb-1">
                {currentTestimonial.text}
              </p>

              <div className="text-3xl text-gray-400 ">"</div>
            </div>

            {/* Contact Details, Progress & Navigation */}
            <div className='mt-8 pt-4 border-t border-white/10'>
              <div className="space-y-2 mb-8 text-md md:text-lg">
                <h2 className="text-xl font-semibold mb-4 text-white">
                  My Contact Details
                </h2>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{contact_details.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{contact_details.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{contact_details.address}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="w-full h-0.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleManualNavigation('prev')}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-300" />
                </button>
                <button
                  onClick={() => handleManualNavigation('next')}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div >
  );
};


import React from 'react'
import { useState } from 'react';
import  ServiceCard  from '../components/handmade/service-card';
import { SERVICES } from '../constants'

const Services = () => {
  return (
    <section className="flex w-full flex-col gap-8 sm:gap-12 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white text-center px-4">
        SERVICES
      </h1>
      <div className='overflow-x-auto px-4 sm:px-8 lg:px-16 pb-4'>
        <div className='flex gap-6 sm:gap-8 lg:gap-10 min-w-max'>
          {SERVICES.map((service, index) => (
            <div key={index} className="w-72 sm:w-80 lg:w-96 flex-shrink-0">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
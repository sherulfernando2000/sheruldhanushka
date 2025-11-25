import React from 'react'
import { useState } from 'react';
import  ServiceCard  from '../components/handmade/service-card';
import { SERVICES } from '../constants'

const Services = () => {
  return (
    <section className="flex w-full flex-col gap-12 pt-20 pr-16">
      <h1 className="mb-12 mt-20 text-center text-4xl font-semibold">SERVICES</h1>
        <div className='grid grid-cols-3'>
            {/* Service Cards */}
            {SERVICES.map((service, index) => (
                <ServiceCard key={index} service={service} />
            ))}
        </div>
      

    </section>
  )
}

export default Services
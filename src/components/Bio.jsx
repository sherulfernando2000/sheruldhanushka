import React from 'react'
import { BIO } from '../constants'
import aboutMe from '../assets/aboutMe.jpeg'
import  StarBorder  from '../components/StarBorder';
import  MagnifyText  from '../components/handmade/MagnifyText';

const Bio = () => {
  return (
    <section className="flex w-full flex-col  px-5 sm:pr-16" data-aos="flip-up" data-aos-duration="1000">
      {/* <h1 className="text-center text-3xl lg:text-4xl">Bio</h1> */}
      <div className='flex justify-center'>
        <h1 className="mb-2 text-center text-3xl sm:text-4xl lg:text-5xl font-semibold w-fit tracking-wide  border-b-2 px-8 rounded-md shadow-xl" >Bio</h1>
  
      </div>

      <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
        " My journey in tech, shaped by passion and purpose. "
      </p>
      
      <div className="grid grid-col-1 md:grid-cols-3 gap-8">
        <div className="flex justify-center items-center">
          <StarBorder
            
          >
            <img
            src={aboutMe}
            alt="Bio Image"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-80 lg:h-96 opacity-80 object-cover rounded-lg"
          />
          </StarBorder>
          
        </div>

        <div className='md:col-span-2 flex flex-col items-center justify-center' data-aos="flip-up" data-aos-duration="1000">
          {BIO.map((bio, index) => (
            <MagnifyText text={bio} />
            // <p className="mb-4 text-lg lg:text-xl transition-transform duration-300 hover:scale-110">{bio} </p>
          ))}

          
        </div>



      </div>

    </section>
  )
}

export default Bio

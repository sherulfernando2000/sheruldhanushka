import React from 'react'
import { BIO } from '../constants'
import aboutMe from '../assets/aboutMe.jpeg'
import  StarBorder  from '../components/StarBorder';
import  MagnifyText  from '../components/handmade/MagnifyText';

const Bio = () => {
  return (
    <section className="flex w-full flex-col gap-12 pt-20 pr-16">
      {/* <h1 className="text-center text-3xl lg:text-4xl">Bio</h1> */}
      <h1 className="mb-12 mt-20 text-center text-3xl lg:text-4xl font-semibold">Bio</h1>
 
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

        <div className='md:col-span-2'>
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

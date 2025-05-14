import React from 'react'
import { BIO } from '../constants'

const Bio = () => {
  return (
    <section className="flex max-w-4xl flex-col gap-12 pt-20" id="bio">
      <h1 className="text-center text-3xl lg:text-4xl">Bio</h1>
      <div>
        {BIO.map((bio,index)=>(
            <p className="mb-4 text-lg lg:text-xl">{bio} </p>
        ))}
      </div>
    </section>
  )
}

export default Bio

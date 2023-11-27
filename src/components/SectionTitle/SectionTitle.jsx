import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold my-16 py-9 single-text-gradient ' >{title}</h2>
    </div>
  )
}

export default SectionTitle
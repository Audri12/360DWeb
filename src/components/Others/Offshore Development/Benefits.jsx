import React, { useEffect, useState } from 'react'

const Benefits = () => {
    const [cards,setCards]=useState([]);
    

    useEffect(()=>{
        fetch('cards.json')
        .then(res=>res.json())
        .then(data =>{
            setCards(data);
        })
    },[])
  return (
    <div>
      <div className="bg-gradient-to-r from-[#00172d] via-[#002d5f] to-[#004dad] pb-14">
      <div className="container mx-auto ">
      <h5 className="mb-4 text-5xl font-bold  text-[#0080E5] pt-14 mb-14">
      Benefits 
      </h5>
      <p className="mb-6 text-white text-justify">
      Our team of experienced professionals is dedicated to providing innovative solutions that help businesses achieve their goals. We specialize in leveraging offshore development to help our clients stay ahead of the competition.
      </p>
      <div className='grid gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto justify-center drop-shadow-md '>
        {
             cards.map((card)=>(
                <div className='bg-[#000F1A] rounded-md p-3'>
                  <div key={card.id}>
                    <h1 className='text-white text-3xl mb-4'>{card.title}</h1>
                  <p className='text-white'>{card.description}</p> 
                  </div>
                  </div>
             ))
        }     

        </div>
      </div>
        
    </div>  
    </div>
  )
}

export default Benefits
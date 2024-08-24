import React, { useEffect, useState } from 'react'
import { SiCoronaengine } from "react-icons/si";


const BenifitsWithAnIcon = () => {
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
        <div>
      <div className="bg-gradient-to-r from-[#00172d] via-[#002d5f] to-[#004dad] pb-14">
      <div className="container mx-auto ">
      <h5 className="mb-4 text-5xl font-bold  text-[#0080E5] pt-14 mb-14">
      Benefits 
      </h5>
      <p className="mb-14 mt-8 text-white text-justify">
      Our team of experienced professionals is dedicated to providing innovative solutions that help businesses achieve their goals. We specialize in leveraging offshore development to help our clients stay ahead of the competition.
      </p>
      <div className='grid gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto justify-center drop-shadow-md '>
        {
             cards.map((card)=>(
                <div className='bg-[#000F1A] rounded-md p-4 h-80'>
                  <div key={card.id}>
                   
                    <div className='mb-8 '>
                    <SiCoronaengine className='text-6xl'/><br />
                    <h1 className='text-white font-bold text-3xl'>{card.title}</h1>

                    </div>
                    
                  <p className='text-white'>{card.description}</p> 
                  </div>
                  </div>
             ))
        }     

        </div>
      </div>
        
    </div>  
    </div>
    </div>
  )
}

export default BenifitsWithAnIcon
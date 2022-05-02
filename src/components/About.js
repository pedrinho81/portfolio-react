import React from "react";
import ScrollIntoView from 'react-scroll-into-view'
import {FaChevronDown} from "react-icons/fa"

function About() {
    return (
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400"className="max-w-4xl mt-20 mx-auto">
            <p className="text-2xl text-black md:text-4xl font-bold text-center">
                Olá 👋
            </p>
            <p className="text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4">
            Apaixonado por tecnologia em
busca de uma oportunidade para
atuar como desenvolvedor Full
Stack. Possuo foco na
linguagem JavaScript e
frameworks como ReactJs e
NodeJs. 
            </p>
            <ScrollIntoView selector="#tech">
  
                <div className="mx-auto p-20">
                    <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500"/>
                </div>  
</ScrollIntoView>
        
                      
      </div>
       
    )
}

export default About
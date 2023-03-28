import React from "react";
import ScrollIntoView from 'react-scroll-into-view'
import { FaChevronDown } from "react-icons/fa"

function About() {
    return (
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className="max-w-4xl mt-20 mx-auto">
            <p className="text-2xl text-black dark:text-white md:text-4xl font-bold text-center">
                Olá 👋
            </p>
            <p className="text-base sm:text-xl text-justify dark:text-zinc-300 text-gray-600 leading-relaxed mt-4">
               Entusiasta da tecnologia e sempre buscando novos desafios que possam me moldar como desenvolvedor.            </p>
            <p className="text-base sm:text-xl text-justify dark:text-zinc-300 text-gray-600 leading-relaxed mt-2">
               Abaixo você terá mais informações sobre minhas qualificações e experiências profissionais, espero que goste. 😊
            </p>
            <ScrollIntoView selector="#tech">
                <div className="mx-auto p-20">
                    <FaChevronDown cursor="pointer" className="animate-bounce mx-auto text-3xl text-blue-500" />
                </div>
            </ScrollIntoView>
        </div>

    )
}

export default About
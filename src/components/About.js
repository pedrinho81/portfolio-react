import React from "react";
import ScrollIntoView from 'react-scroll-into-view'
import { FaChevronDown } from "react-icons/fa"

function About() {
    return (
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className="max-w-4xl mt-20 mx-auto">
            <p className="text-2xl text-black dark:text-white md:text-4xl font-bold text-center">
                Olá 👋
            </p>
            <p className="text-base sm:text-xl text-center dark:text-zinc-300 text-gray-600 leading-relaxed mt-4">
                Meu nome é Pedro, tenho 20 anos, atualmente resido em Recife, em torno de 2 anos tive o primeiro contato com a programação e desde então venho me aperfeiçoando intensivamente, com o objetivo de me tornar um desenvolvedor web.
            </p>
            <p className="text-base sm:text-xl text-center dark:text-zinc-300 text-gray-600 leading-relaxed mt-2">
                Sou uma pessoa bem empenhada, focada nos meus objetivos, julgo ter uma boa capacidade de aprendizado, vejo que esta competência pode contribuir bastante para a resolução de problemas e para pesquisas de novas soluções atualmente e futuramente no ambiente de trabalho.
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
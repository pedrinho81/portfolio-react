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
                Como desenvolvedor front-end, meu principal objetivo é criar sistemas escaláveis e de alta performance com as melhores tecnologias do mercado web e mobile, busco sempre entregar soluções de qualidade excepcional para os mais diversos projetos. Desde 2019, venho me dedicando incansavelmente para aprimorar minhas habilidades e agregar valor ao mercado de desenvolvimento.
            </p>
            <p className="text-base sm:text-xl text-justify dark:text-zinc-300 text-gray-600 leading-relaxed mt-2">
            Meu comprometimento e dedicação com cada projeto que desenvolvo são valores que me movem e que fazem parte da minha busca constante por excelência e inovação. Estou sempre aberto a novas oportunidades e desafios que me permitam continuar evoluindo como profissional.
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
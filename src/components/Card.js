import React from "react"
import profile from "../images/memoji-me.jpeg"
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';


function Card() {
    return (
        <div data-aos="fade-down" data-aos-duration="800" className="w-full">
            <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5'>
                <div className="">
                    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={profile} alt="profile face" />

                </div>
                <div className="text-center mt-5">
                    <p className='text-xl sm:text-2xl font-semibold text-gray-900'>
                        Pedro Henrique
                    </p>
                    <p className='text-sm sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                        FullStack Developer

                    </p>
                    <div className="flex align-center justify-center mt-4">
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/pedrinho81" target="_blank" rel="noreferrer">
                            <FaGithub />
                            <span className="sr-only">Github</span>
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/pedro-henrique81/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                            <span className="sr-only">Linkedin</span>
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-800 hover:bg-green-800 rounded-full hover:text-white transition-colors duration-300" href="https://api.whatsapp.com/send?phone=5581987227660&text=Olá%2C%20Pedro%20Henrique!" target="_blank" rel="noreferrer">
                            <FaWhatsapp />
                            <span className="sr-only">WhatsApp</span>
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-[#EA4335] hover:bg-[#FF9800] rounded-full hover:text-white transition-colors duration-300" href="mailto:1pedrohenri@gmail.com" target="_blank" rel="noreferrer">
                            <FaEnvelope />
                            <span className="sr-only">E-mail</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
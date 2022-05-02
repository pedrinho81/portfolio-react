import React from "react"
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <div className="py-5 border-t-2">
            <div className="flex justify-center mt-4">
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 group" href="https://github.com/pedrinho81" target="_blank" rel="noreferrer">
                    <FaGithub />
                    <span className="sr-only group-hover:">Github</span>
                </a>
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 group text-blue-800 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/pedro-henrique81/" target="_blank" rel="noreferrer">
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
            <div className="flex justify-center mt-4">
                <p className="text-black mb-4">Made with <span className="mr-2" role="link" aria-label="heart">💙</span> by <a className="text-blue-500 hover:underline font-semibold" href="https://www.linkedin.com/in/pedro-henrique81/" rel="noreferrer" target="_blank" >©Pedro Henrique 2022</a></p>
            </div>
        </div>
    )
}

export default Footer
import React from "react";
import { SiReact, SiJavascript, SiTailwindcss } from "react-icons/si"
import { FaNodeJs, FaSass, FaGitAlt, FaHtml5, FaCss3 } from "react-icons/fa"
import { DiMysql, DiSass } from "react-icons/di"



function Skills() {
    return (
        <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
            <p className="text-black text-2xl sm:text-4xl text-center pt-4 font-bold">Tech I Use</p>
            <div className="flex justify-center flex-wrap pt-2">
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <FaHtml5 color="#e34c26" className="mx-auto text-6xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">HTML5</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <FaCss3 color="#264de4" className="mx-auto text-6xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">CSS3</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiJavascript color="#F9DC3E" className="mx-auto text-6xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">JavaScript</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiReact color="#2196f3" className="mx-auto text-6xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">React</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <FaGitAlt color="#F34F29" className="mx-auto text-6xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Git</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <FaNodeJs color="#68A063" className="mx-auto text-6xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">NodeJs</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <DiMysql color="#1C4B66" className="mx-auto text-6xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">MySQL</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiTailwindcss color="#00C0A3" className="mx-auto text-6xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Tailwind CSS</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <DiSass color="#cc6699" className="mx-auto text-6xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Sass</p>
                </div>
            </div>
        </div>

    )
}

export default Skills
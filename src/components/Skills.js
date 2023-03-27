import React from "react";
import TechsData from "../database/TechsData"

function Skills() {
    return (
        <div data-aos="zoom-in-out" className="max-w-4xl mx-auto justify-center py-12" id="tech">
            <p className="text-black text-2xl dark:text-white sm:text-4xl text-center pt-4 font-bold">Tecnologias</p>
            <div className="flex justify-center flex-wrap pt-2">
                {TechsData.map((tech, index) => {
                    return (
                        <div key={index} className="flex flex-col w-40 py-10 m-6 overflow-hidden bg-white dark:bg-zinc-600 shadow-2xl dark:shadow-zinc-800 rounded-xl sm:w-52">
                            <tech.logo color={tech.color} className="mx-auto text-6xl" />
                            <p className="mt-6 text-xl sm:text-2xl font-semibold dark:text-white text-center">{tech.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Skills
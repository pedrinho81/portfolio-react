import React from "react"
import profile from "../images/memoji-me.png"
import IconsData from "../database/IconsData";

function Card() {
    return (
        <div data-aos="fade-down" data-aos-duration="800" className="w-full">
            <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl dark:shadow-zinc-800 rounded-xl p-5 dark:bg-zinc-600'>
                <div className="">
                    <img className="w-32 h-32 mx-auto shadow-xl rounded-full drop-shadow-sm dark:shadow-zinc-800" src={profile} alt="profile face" />
                </div>
                <div className="text-center mt-5">
                    <p className='text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white'>
                        Pedro Henrique
                    </p>
                    <p className='text-sm sm:text-base text-gray-600 dark:text-zinc-300 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                        Desenvolvedor Front End Web/Mobile
                    </p>
                    <div className="flex align-center justify-center mt-4">
                        {IconsData.map((icon, index) => {
                            return (
                                <a className={`${icon.class} text-xl m-1 p-1 sm:m-2 sm:p-2 transition-colors duration-300 rounded-full`}
                                    href={icon.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={index}>
                                    <icon.logo/>
                                    <span className="sr-only ">{icon.name}</span>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
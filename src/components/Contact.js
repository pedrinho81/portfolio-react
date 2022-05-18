import {FaArrowRight} from "react-icons/fa"

export default function ContactMe() {
    return(
        <div className="max-w-lg w-full text-center m-auto pt-36 pb-10">
            <h1 className="text-2xl sm:text-4xl dark:text-white font-bold">Interested in work together?</h1>
            <a href="mailto:1pedrohenri@gmail.com" className="group"> 
            <span className="rounded-md mt-7 inline-block w-auto shadow-2xl animate-bounce bg-black dark:bg-white font-display text-white dark:text-zinc-800 text-base md:text-xl py-4 px-7 cursor-pointer hover:bg-white dark:hover:bg-zinc-800 dark:hover:text-white transition-colors ease-in-out duration-700 hover:text-black">
                <div className="flex flex-row items-center">
                    <span className="mr-3">Entrar em contato</span>
                    <FaArrowRight className="transition-transform group-hover:translate-x-3"/>
                </div>
            </span>
            </a>
        </div>
    )
}
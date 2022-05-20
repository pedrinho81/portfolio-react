import React from "react";
import IconsData from "../database/IconsData";

function Footer() {
    return (
        <div className="py-5 border-t-2">
            <div className="flex justify-center mt-4">
                {IconsData.map((icon, index) => {
                    return (
                        <a className={`${icon.class} text-xl m-1 p-1 sm:m-2 sm:p-2 transition-colors duration-300 rounded-full`}
                            href={icon.href}
                            target="_blank"
                            rel="noreferrer"
                            key={index}>
                            <icon.logo />
                            <span className="sr-only group-hover:">{icon.name}</span>
                        </a>
                    )
                })}
            </div>
            <p className="text-black mt-4 dark:text-white text-center">Made with <span className="mr-2" role="link" aria-label="heart">💙</span> by <a className="text-blue-500 hover:underline font-semibold" href="https://www.linkedin.com/in/pedro-henrique81/" rel="noreferrer" target="_blank" >©Pedro Henrique 2022</a></p>
        </div>
    )
}


export default Footer
import React from "react";
import IconsData from "../database/IconsData";

function Footer() {
    return (
        <div className="py-5 border-t-2">
            <div className="flex justify-center mt-4">
              {IconsData.map((icon,index) => {
                  return(
                  <a className={`${icon.class} text-xl m-1 p-1 sm:m-2 sm:p-2 transition-colors duration-300 rounded-full`}
                  href={icon.href} 
                  target="_blank" 
                  rel="noreferrer"
                  key={index}>
                      <icon.logo/>
                      <span className="sr-only group-hover:">{icon.name}</span>
                  </a>
                  )
              })}
            </div>
        </div>
        )}
                

export default Footer
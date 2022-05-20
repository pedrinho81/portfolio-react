// import data from "../database/data.json";
import TechsData from "../database/TechsData";
import data from "../database/Projects";
import { useState } from "react";
import useInterval from "react-useinterval";
import { CaretLeft, CaretRight } from "phosphor-react"

function App() {

  const [index, setIndex] = useState(0);

  let { title, link, imageUrl, techsUsed } = data[index];

  //Animation
  const animate = () => {
    let percentage = 30;

    let int = setInterval(blurring, 1);

    function blurring() {
      percentage++;

      if (percentage >= 100) {
        clearInterval(int);
      }
      bg.style.filter = `blur(${scale(percentage, 0, 100, 30, 0)}px)`;
    }
    const bg = document.querySelector(".animation");
  }

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
  //End Animation

  const nextSlide = () => {
    setIndex(index + 1);
    animate();
    if (index === data.length - 1) {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    setIndex(index - 1);
    animate()
    if (index <= 0) {
      setIndex(data.length - 1);
    }
  };

  useInterval(() => {
    if (index === data.length - 1) {
      setIndex(0);
      animate()

    } else {
      setIndex(index + 1);
      animate()
    }
  }, 5000);




  const dataTechs = (techInProject) => TechsData.map((tech, index) => {
    let techsUsed = []
    techInProject.map(techUsedName => {
      if (techUsedName === tech.name) {
        techsUsed.push(tech)
      }
      return true
    })
    return techsUsed
  })

  let setTechs = dataTechs(techsUsed).map((arrTechData, index) => {
    let tech = arrTechData.map((Tech, i) => {
      return Tech
    })
    return tech
  })

  let Techs = []

  for (let i = 0; i < setTechs.length; i++) {
    const element = setTechs[i][0];
    Techs.push(element)
  }



  return (
    <section className='text-gray-600 body-font h-scree'>
      <div className='animation  py-24 mx-auto'>
        <div className='xl:w-1/2 lg:w-3/4 w-full mx-auto text-center '>
          <h1 className='text-black text-2xl dark:text-white sm:text-4xl text-center pt-2 font-bold'>Projects</h1>
          <span className='inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6'>
          </span>
          <div className="backdrop-filter">
            <h2 className='text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white'>{title.toUpperCase()}</h2>
            <div className="flex justify-between my-2 content-center">
              <CaretLeft onClick={prevSlide}
                size={40}
                className='text-5xl animate-slide cursor-pointer sm:mx-10 mx-5 text-blue-500 dark:text-white hover:fill-zinc-800 dark:hover:fill-blue-500 transition-transform  my-auto' />
              <CaretRight onClick={nextSlide}
                size={40}
                className='text-5xl animate-slide sm:mx-10 mx-5 cursor-pointer text-blue-500 dark:text-white hover:fill-zinc-800 dark:hover:fill-blue-500 transition-transform  my-auto' />
            </div>
            <div className="flex row justify-center content-center">
              <a href={link}
                target="_blank" rel="noreferrer">
                <img src={imageUrl} alt='' className='h-80 min-w-auto mx-auto  b-2 my-8 bg-white border-2 shadow-2xl dark:shadow-zinc-800 border-white rounded-2xl hover:opacity-80 transition-opacity object-cover ' />
              </a>
            </div>
            <span className='text-md sm:text-2xl text-gray-600 dark:text-zinc-300 pt-2 pb-4 px-5 w-auto inline-block'>Used Technologies</span>
            <div className='flex flex-row content-center no-wrap justify-center'>
              {Techs.map((tech, index) => {
                if (typeof (tech) == "object") {
                  return (
                    <div key={index} className="flex flex-col min-w-fit content-center justify-center p-2 m-2 overflow-hidden bg-white dark:bg-zinc-600 shadow-2xl dark:shadow-zinc-800 rounded-xl sm:w-52">
                      <tech.logo color={tech.color} className="mx-auto text-3xl" />
                    </div>
                  )
                } else {
                  return (
                    false
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default App;

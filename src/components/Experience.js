function Projects() {

  return (
    <section className='text-gray-600 body-font h-scree'>
      <div className='animation  py-24 mx-auto'>
        <div className='xl:w-1/2 lg:w-3/4 w-full mx-auto text-center '>
          <h1 className='text-black text-2xl dark:text-white sm:text-4xl text-center pt-2 font-bold'>Experience</h1>
          <span className='inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6'>
          </span>
          <div className="backdrop-filter">
            <h2 className='text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white'>Desenvolvedor Front End Jr </h2>
            <h3 className="content-center dark:text-white" > at
              <b className="text-gray-600 dark:text-gray-300">  Melhor Comunicação</b>
            </h3>
            <p className='text-gray-900 dark:text-white'>Since <b>Jul/22</b>  until <b>today</b></p>
            <p className="text-base text-justify sm:text-xl  dark:text-zinc-300 text-gray-600 leading-relaxed mt-4">
             Atuo na criação e aperfeiçoamento de interfaces do usuário. além de realizar a integração de API's REST .
              <br/>
              <br/>
              Recentemente, recomendei a migração do projeto existente de JavaScript para TypeScript, com o objetivo de aumentar a escalabilidade, a segurança do código e a manutenção a longo prazo, o qual foi aceito. Por consequência, em conjunto com o time está sendo conquistado aumentar significativamente a eficiência da equipe, reduzir o número de erros de código e melhorar a estabilidade do sistema como um todo.
              <br/>              <br/>

              As principais tecnologias que utilizo incluem HTML, CSS, JavaScript/TypeScript, React, Next.js, Context API, Axios, i18N, Styled Components, TailwindCSS, Git, GitHub, e biblitocas de UX/UI como ChakraUi.
            </p>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Projects;

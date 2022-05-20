import PrevisaoThumb from "../images/previsao-do-tempo-thumb.png"
import MakeupThumb from "../images/makeup-thumb.png"
import SujLinkThumb from "../images/suj-thumb.png"
import SaudeThumb from "../images/saude-thumb.png"
import OnebitxThumb from "../images/onebitx-thumb.png"
import GitThumb from "../images/git-thumb.png"



const Projects = [

  {
    "title": "Previsão do tempo",
    "link": "https://previsao-do-tempo-pedrodev.netlify.app",
    "imageUrl": PrevisaoThumb,
    "techsUsed": [
      "HTML5",
      "Tailwind CSS",
      "React"
    ]
  },
  {
    "title": "Sujeito Link",
    "link": "https://sujeito-link-ph.netlify.app",
    "imageUrl": SujLinkThumb,
    "techsUsed": [
      "HTML5",
      "CSS3",
      "React",
      "JavaScript"
    ]
  },
  {
    "title": "Vila Nova MakeUp",
    "link": "https://vila-nova-makeup.netlify.app",
    "imageUrl": MakeupThumb,
    "techsUsed": [
      "HTML5",
      "CSS3",
      "Sass"
    ]
  }, 
  {
    "title": "Aqui Tem Saúde",
    "link": "https://aqui-tem-saude.netlify.app/aplicativo/home.html",
    "imageUrl": SaudeThumb,
    "techsUsed": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ]
  },
  {
    "title": "OnebitX",
    "link": "https://onebitx-pedrodev.netlify.app",
    "imageUrl": OnebitxThumb,
    "techsUsed": [
      "HTML5",
      "CSS3",
      "Sass"
    ]
  },
  {
    "title": "GitHub",
    "link": "https://github.com/pedrinho81",
    "imageUrl": GitThumb,
    "techsUsed": [
      "Git",
    ]
  },
]



// console.log(...filter)

// function cadaTeste(...filter){
//   let techs = []
//   // console.log(filter[0])
//   filter[0].forEach((tech) => {
//     techs.push(tech)
// });
// return techs
// } 
// // console.log(cadaTeste(filter))

// // const projetos = Projects.map((project) => {
// //   return project.techsUsed
// // })


// var alunos = [{ nome: 'teste',
//                idade: '15',
//                turma: 'turma 1'},
//               { nome: 'teste2',
//                idade: '16',
//                turma: 'turma 2'},
//               { nome: 'teste3',
//                idade: '12',
//                turma: 'turma 2'},
//               { nome: 'teste3',
//                idade: '14',
//                turma: 'turma 4'},
//               { nome: 'teste6',
//                idade: '13',
//                turma: 'turma 4'}];

// var turmafiltro = ['turma 1', 'turma 2'];

// function checkTurma(turma) {    
//     if (turmafiltro.indexOf(turma.turma) >= 0)
//     return true;
// }

// var result = alunos.filter(checkTurma);
// // console.log(result);

// console.log(turmafiltro) 



// let techfiltro =  Projects.map((projects,index) => {
  
//   let project = projects.techsUsed
//   console.log(project)

//   return project
// })

// function checkTechs(techsUsed) {
//   if(techfiltro[0].indexOf(techsUsed.techsUsed))
//   return true
// }

// let resultado = Projects.filter(checkTechs)

// console.log(result, resultado)


// console.log(turmafiltro, techfiltro[1])




// console.log(TechsData)


// let allTechName = TechsData.map(tech => {
//   return tech.name
// })

// let techsUsed = (filtro,allTech) => {
//   console.log(filtro)
//   console.log(allTech)
  
//   for(let i=0; i <=allTech.length; i++) {
//     if(filtro[i] == allTech[i]) {
//       console.log(`tech ${filtro[i]} é igual a ${allTech[i]}`)
//     } else {
//       console.log(`tech ${filtro[i]} NÃO é igual a ${allTech[i]}`)
//     }
//   }
// }

// console.log(techsUsed(techfiltro[1],allTechName))




// // console.log(alunos, Projects) //DONE


export default Projects
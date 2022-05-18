import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const IconsData = [
    {   logo: FaGithub,
        name: "GitHub",
        class: "text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white",
        href:"https://github.com/pedrinho81"
    },
    {   logo: FaLinkedin,
        name: "LinkedIn",
        class: "text-blue-800 dark:text-blue-500 dark:hover:bg-white hover:bg-blue-600 hover:text-white ",
        href:"https://www.linkedin.com/in/pedro-henrique81/"
    },
    {   logo: FaWhatsapp,
        name: "WhatsApp",
        class: "text-green-800 dark:text-green-500 dark:hover:bg-green-800 hover:bg-green-800 hover:text-white",
        href:"https://api.whatsapp.com/send?phone=5581987227660&text=Olá%2C%20Pedro%20Henrique!"
    },
    {   logo: FaEnvelope,
        name: "E-mail",
        class: "text-xl m-1 p-1 sm:m-2 sm:p-2 text-[#EA4335] hover:bg-[#FF9800] hover:text-white",
        href:"mailto:1pedrohenri@gmail.com"
    },
]

export default IconsData
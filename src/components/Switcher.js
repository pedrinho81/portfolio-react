import {React, useState} from 'react';
import useDarkSide from "./hook/useDarkSide";
import {DarkModeSwitch} from "react-toggle-dark-mode";

function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }

    return(
       <div className='max-w-4xl mb-4'>
           <div>
            <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            size={56}
            sunColor={"rgb(64 64 64)"}
            />
           </div>
       </div>
    )
}

export default Switcher
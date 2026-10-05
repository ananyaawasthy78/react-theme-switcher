import { useState , useEffect} from 'react'

import './App.css'
import { Themeprovider } from './context/theme'
import ThemeBtn from './components/themebtn'
import Card from './components/card'

function App() {
 const [thememode, setthememode] = useState("light")
 const lightTheme = () => {
    setthememode("light")
  }

  const darkTheme = () => {
    setthememode("dark")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light")
    document.querySelector("html").classList.add(thememode)
  }, [thememode])

  return (
  
  <Themeprovider value={{thememode, darkTheme, lightTheme}}>  
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
</Themeprovider>
    
  )
}

export default App

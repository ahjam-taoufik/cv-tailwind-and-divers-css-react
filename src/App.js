import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from './pages/Contact';
import Shop from "./pages/Shop";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { useState } from "react";



const ThemeButton=({setTheme})=>{
  return(
     <div className="absolute flex right-8 top-4" >
        <ThemeCircle  setTheme={setTheme} value='' bg="bg-red-500"/>
        <ThemeCircle  setTheme={setTheme} value='dark'  bg="bg-slate-700" />
        <ThemeCircle  setTheme={setTheme} value='purple'  bg="bg-purple-500" />
     </div>
  )
}

const ThemeCircle=(props)=>{
  return(
       <div className={"h-8 w-8 mr-4 last:mr-0 rounded-full cursor-pointer bg-red-400 "+ props.bg}
        onClick={()=>props.setTheme(props.value)}
       >
       </div>    
  )
}




function App() {
  const [theme, setTheme] = useState("bg-red-500");
  // console.log('theme', theme);

  return (

    <div className={
      theme === "dark" ? "theme-dark" : theme === "purple"? "theme-purple" : "" } 
      >


    <div className=" font-nunito text-skin-base bg-gradient-to-r from-skin-hue
     selection:bg-red-600 selection:text-white
    ">
    <BrowserRouter>
      <NavBar />
      <ThemeButton  setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/c" element={<Contact />} />
        <Route path="/s" element={<Shop />} />
        
      </Routes>
    </BrowserRouter>
    </div>
    </div>
   
  );
}

export default App;

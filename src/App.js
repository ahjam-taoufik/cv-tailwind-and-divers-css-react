import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from './pages/Contact';
import Shop from "./pages/Shop";
import Home from './pages/Home';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="font-nunito text-red-500 bg-gradient-to-r from-red-400
     selection:bg-red-600 selection:text-white
    ">

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/c" element={<Contact />} />
        <Route path="/s" element={<Shop />} />
        
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;

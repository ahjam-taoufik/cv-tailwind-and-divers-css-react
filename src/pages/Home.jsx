import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  return (
     <div className="h-screen flex flex-col  justify-center
         pb-16 md:flex-row md:justify-between md:items-center">
      
       <div 
      //  className="h-1/3 md:h-auto md:flex-1" 
       >
         <img 
        //  className="h-[100%]"
          src="the_de.png" alt=""/>
       </div>
       
       <div className="p-4 mt-4 md:flex-1" >

        <h2
          className="font-bold text-4xl md:text-6xl lg:text-8xl"
        >Red Wine</h2>
        <h2 className="font-bold">De Sweet flavor</h2>
        <p
         className="font-medium text-xl mt-4 mb-8"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, urna eu tincidunt consectetur,
          nisi nisl aliquam nunc, eget egestas nunc nisl eu nisi.
          <button
          onClick={()=>navigate('/s')}
          className="border-2 border-red-700 font-bold m-3 p-2 pb-1 pr-6 rounded-sm"
          >Shop Now</button>
        </p>
       </div>
   
    </div>
  ) 
};

export default Home;

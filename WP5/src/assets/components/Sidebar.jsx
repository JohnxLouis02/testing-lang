import React from 'react'
import logo from '../img/CICT-logo.png'
import { Sidebardata } from './Sidebardata'




function Sidebar() {
  return (
    <div className="h-full border-cwhite border-2 w-56 ">
        <div className="items-center flex justify-center">
          <img src={logo} alt="CICT Logo"/>
          
        </div>

        <div className="top-5 relative items-center ">
          <ul >
            {Sidebardata.map((val, key) => {
              return (
              <li className="flex flex-row gap-2 h-10 items-center last:-bottom-40 text-sm relative
              hover:bg-orange-500" 
              key={key} 
              onClick={()=>{
                window.location.pathname = val.link}
                }> 
                 <div className="pl-2.5">
                  {val.icon}</div>
                 <div className="font-pop font-semibold">
                  {val.title}
                 </div>
              </li>
              );

            })}
          </ul>
          
        </div>
    </div>
  )
}

export default Sidebar
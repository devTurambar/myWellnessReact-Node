import { Outlet, Link } from "react-router-dom";
import { useState, useContext } from 'react';
import { SideBarContext } from "../sideBarStorage";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const side = useContext(SideBarContext);

  const toggleSideBar = () => {
    return side?.sideBarOpen == true ? side?.updateSideBarOpen(false) : side?.updateSideBarOpen(true);
  }
  
  return (
    <div className={`${side?.sideBarOpen ?  "w-full" : "w-unset-640min"} w-unset-640min`}>
      <aside id="minimizedSideBar" className={`relative bg-gray-800 text-white min-h-screen p-4 w-16 hidden trans`}>
        <ul className="">
            <li className="flex items-center justify-between hover:bg-gray-700">
              <div className="flex items-center">
              <div className="containerHamburguer" onClick={toggleSideBar}>
                <div className={`bar1 ${side?.sideBarOpen == true ? 'change' : ''}`}></div>
                <div className={`bar2 ${side?.sideBarOpen == true ? 'change' : ''}`}></div>
                <div className={`bar3 ${side?.sideBarOpen == true ? 'change' : ''}`}></div>
              </div>
              </div>
            </li> 
        </ul>     
      </aside>
      <aside id="expandedSideBar" className={`relative bg-gray-800 text-white min-h-screen p-4 ${side?.sideBarOpen == true ? 'w-full md:w-64' : 'w-16'} block trans`}>
        <div className="flex">
          <ul className={`${side?.sideBarOpen == true ? 'space-y-2' : 'hidden'}`}>
            <li className={`flex items-center justify-between hover:bg-gray-700 ${side?.sideBarOpen == true ? 'p-2' : ''}`}>
              <div className="flex items-center">
                <Link to="pages/Personal" onClick={() => side?.updateSideBarOpen(false)}>Personal Data</Link>
              </div>
            </li>
            <li className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <div onClick={toggleSideBar}>Test</div>
              </div>
            </li>
            <li className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <Link to="pages/Summary" onClick={() => side?.updateSideBarOpen(false)}>Summary</Link>
              </div>
            </li>
            <li className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <Link to="pages/Diet" onClick={() => side?.updateSideBarOpen(false)}>Diet</Link>
              </div>
            </li>
            <li className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <Link to="pages/MealCalculator" onClick={() => side?.updateSideBarOpen(false)}>MealCalculator</Link>
              </div>
            </li>
          </ul>
          <div className={`cursor-pointer ${side?.sideBarOpen == true ? 'ml-auto mr-0 my-0' : 'm-auto'}`} onClick={toggleSideBar}>
              <div className={`bar1 ${side?.sideBarOpen == true ? 'change' : ''}`}></div>
              <div className={`bar2 ${side?.sideBarOpen == true ? 'change' : ''}`}></div>
              <div className={`bar3 ${side?.sideBarOpen == true ? 'change' : ''}`}></div>
          </div>        
        </div>
      </aside>
      {/* <div className={`hidden micro:hidden sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={toggleSideBar}></div> */}
    </div>

  );
};

export default Sidebar;

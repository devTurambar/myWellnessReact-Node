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
    <div className="w-full">
      <aside id="minimizedSideBar" className={`relative bg-gray-800 text-white min-h-screen p-4 w-16 ${side?.sideBarOpen == true ? 'hidden' : 'block'}`}>
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
      <aside id="expandedSideBar" className={`relative bg-gray-800 text-white min-h-screen p-4 w-full md:w-64 ${side?.sideBarOpen == true ? 'block' : 'hidden'}`}>
        <div className="flex">
          <ul className="space-y-2">
            <li className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <Link to="pages/Personal">Personal Data</Link>
              </div>
              {/* <ul className="desplegable ml-4 hidden">
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Appointment management
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Policies
                  </a>
                </li>
              </ul> */}
            </li>
            <li className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <div onClick={toggleSideBar}>Test</div>
              </div>
            </li>
            <li className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <Link to="pages/Summary">Summary</Link>
              </div>
              {/* <ul className="desplegable ml-4 hidden">
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Treatments
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Spent
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Invoices
                  </a>
                </li>
              </ul> */}
            </li>
            <li className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <Link to="pages/Diet">Diet</Link>
              </div>
              {/* <ul className="desplegable ml-4 hidden">
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Medical report
                  </a>
                </li>
              </ul> */}
            </li>
            <li className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <Link to="pages/MealCalculator">MealCalculator</Link>
              </div>
              {/* <ul className="desplegable ml-4 hidden">
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Pending Signatures
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Documents
                  </a>
                </li>
              </ul> */}
            </li>
          </ul>
          <div className="containerCloseX" onClick={toggleSideBar}>
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

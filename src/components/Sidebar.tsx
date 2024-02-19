import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    return isOpen == true ? setIsOpen(false) : setIsOpen(true);
  }
  
  return (
    <div>
      <aside className={`relative bg-gray-800 text-white min-h-screen p-4 w-16 ${isOpen == true ? 'hidden' : 'block'}`}>
        <ul className="">
            <li className="flex items-center justify-between hover:bg-gray-700">
              <div className="flex items-center">
              <div className="container" onClick={toggleSideBar}>
                <div className={`bar1 ${isOpen == true ? 'change' : ''}`}></div>
                <div className={`bar2 ${isOpen == true ? 'change' : ''}`}></div>
                <div className={`bar3 ${isOpen == true ? 'change' : ''}`}></div>
              </div>
              </div>
            </li> 
        </ul>     
      </aside>
      <aside className={`relative bg-gray-800 text-white min-h-screen p-4 w-48 md:w-64 ${isOpen == true ? 'block' : 'hidden'}`}>
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
          <div>
          <div className="container" onClick={toggleSideBar}>
                <div className={`bar1 ${isOpen == true ? 'change' : ''}`}></div>
                <div className={`bar2 ${isOpen == true ? 'change' : ''}`}></div>
                <div className={`bar3 ${isOpen == true ? 'change' : ''}`}></div>
              </div>
          </div>         
        </div>
      </aside>
    </div>

  );
};

export default Sidebar;

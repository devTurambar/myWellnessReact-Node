import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {
    const func = () => {
      document.addEventListener("DOMContentLoaded", function () {
        // Obtener todas las opciones principales con desplegables
        const opcionesConDesplegable = document.querySelectorAll(".opcion-con-desplegable");
  
        // Agregar evento de clic a cada opción principal
        opcionesConDesplegable.forEach(function (opcion) {
          opcion.addEventListener("click", function () {
            // Obtener el desplegable asociado a la opción
            const desplegable = opcion.querySelector(".desplegable");
  
            // Alternar la clase "hidden" para mostrar u ocultar el desplegable
            if(desplegable) desplegable.classList.toggle("hidden");
          });
        });
      });
    }        
  
  return (
    <div className="bg-gray-100">    
      <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
        <nav>
          <ul className="space-y-2">
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div className="flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  <Link to="pages/Personal">Personal Data</Link>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
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
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div className="flex items-center">
                  <i className="fas fa-money-bill-wave mr-2"></i>
                  <Link to="pages/Summary">Summary</Link>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
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
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div className="flex items-center">
                  <i className="fas fa-chart-bar mr-2"></i>
                  <Link to="pages/Diet">Diet</Link>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
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
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div className="flex items-center">
                  <i className="fas fa-file-alt mr-2"></i>
                  <Link to="pages/MealCalculator">MealCalculator</Link>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
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
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;

import { Link } from "react-router-dom";

const NavBar = () => { 
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
    <div>    
      <nav className="bg-blue-500 p-4 flex items-center justify-between">
        <div>
            <Link to="/">
                <h1 className="text-white text-xl font-semibold">My Wellness</h1>
            </Link>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white">Welcome</span>
          <i className="fas fa-user-circle text-white text-2xl"></i>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

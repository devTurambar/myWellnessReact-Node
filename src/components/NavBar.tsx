import { Link } from "react-router-dom";

const NavBar = () => {     
  
  return (
    <div>    
      <nav className="bg-blue-500 p-4 flex items-center justify-between">
        <div>
            <Link to="/">
                <h1 className="text-white text-xl font-semibold">My Wellness</h1>
            </Link>
        </div>
        <div className="flex items-center">
          <span className="text-white">Welcome</span>
          <i className="fas fa-user-circle text-white text-2xl"></i>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

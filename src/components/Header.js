import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginPagePath,
  StreamCreationFormPagePath,
  StreamsOfStreamerPath,
} from "../routers/paths";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate(LoginPagePath());
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center px-6">
        <div className="text-lg font-bold mr-20">
          <Link to="/">Lahthi</Link>
        </div>
        <nav className="flex justify-between items-center w-screen">
          <ul className="flex space-x-10">
            <li>
              <Link to={StreamCreationFormPagePath()}>Create Stream</Link>
            </li>
            <li>
              <Link to={StreamsOfStreamerPath()}>Streams List</Link>
            </li>
          </ul>
          <button
            onClick={handleLogout}
            className="text-white bg-transparent hover:bg-gray-700 p-2 rounded"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

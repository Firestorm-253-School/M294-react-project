import { NavLink } from "react-router";

export interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props) => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center h-14 px-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg text-lg font-semibold ${
              isActive ? "bg-blue-800" : "hover:bg-blue-700"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/people"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg text-lg font-semibold ${
              isActive ? "bg-blue-800" : "hover:bg-blue-700"
            }`
          }
        >
          People
        </NavLink>
        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg text-lg font-semibold ${
              isActive ? "bg-blue-800" : "hover:bg-blue-700"
            }`
          }
        >
          Rooms
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg text-lg font-semibold ${
              isActive ? "bg-blue-800" : "hover:bg-blue-700"
            }`
          }
        >
          My Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

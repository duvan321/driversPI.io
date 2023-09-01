import { Link } from "react-router-dom";
import stayle from "../Navbar/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={stayle.mainNavbar}>
      <Link to="/home">
        <button> Home</button>
      </Link>
      <Link to="/create">
        <button>Form</button>
      </Link>
      <Link to="/">
        <button>Salir</button>
      </Link>
    </div>
  );
};
export default Navbar;

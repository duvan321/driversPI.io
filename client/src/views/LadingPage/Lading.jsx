import { Link } from "react-router-dom";
import stayle from "./Lading.module.css";
const Lading = () => {
  return (
    <div className={stayle.ladiding}>
      <h1 className={stayle.h1}>
        !Bienvenidos a la aplicacion de conductores de Familia 1!
      </h1>
      <Link to={"/home"}>
        <button className={stayle.button}>Ir a la página principal</button>
      </Link>
    </div>
  );
};
export default Lading;

import { Link } from "react-router-dom";
import stayle from "./Lading.module.css";
import videoBackground from "./video/video.mp4"; // Reemplaza "tu_video.mp4" con la ruta correcta a tu archivo de video

const Lading = () => {
  return (
    <div className={stayle.ladiding}>
      <video autoPlay loop id="video-background">
        <source src={videoBackground} type="video/mp4" />
      </video>
      <div className={stayle.content}>
        <h1 className={stayle.h1}>
          ¡Bienvenidos a la aplicación de conductores de Formula 1!
        </h1>
        <Link to={"/home"}>
          <button className={stayle.button}>Ir a la página principal</button>
        </Link>
      </div>
    </div>
  );
};

export default Lading;

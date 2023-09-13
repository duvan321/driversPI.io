import { useDispatch } from "react-redux";
import { useState } from "react";
import { ordenDriver, filterOrigen } from "../../redux/action";
const Filters = () => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const handleOrden = (e) => {
    dispatch(ordenDriver(e.target.value));
    setAux(!aux);
  };

  return (
    <div>
      <select onChange={handleOrden} name="" id="">
        <option value="A">Ascendente</option>
        <option value="D">Decendente</option>
      </select>
    </div>
  );
};
export default Filters;

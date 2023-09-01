import stayle from "../Card/card.module.css";
const Card = (props) => {
  return (
    <div className={stayle.card}>
      <div className={stayle.cardImg}>
        <img src={props.image} alt={props.firstName} />
      </div>
      <h1>{props.firstName}</h1>
      <h2>{props.teamIds}</h2>
    </div>
  );
};
export default Card;

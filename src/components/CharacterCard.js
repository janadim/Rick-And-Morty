import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.eachChar.id}`}>
      
        
      <div className="card">
        <img
          src={props.eachChar.image}
          alt={props.eachChar.name}
          title={props.eachChar.name}
          className="card__img"
        />
        <h4 className="card__charName">{props.eachChar.name}</h4>
        <p className="card__charSpec">{props.eachChar.species}</p>
      </div>
        
      
    </Link>
  );
};
export default CharacterCard;

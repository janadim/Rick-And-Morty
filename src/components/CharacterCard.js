import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.eachChar.id}`}>
      
        
      <div className="card">
        <img
          src={props.eachChar.image}
          alt={props.eachChar.name}
          title={props.eachChar.name}
          className="li-img"
        />
        <h4 className="charName">{props.eachChar.name}</h4>
        <p className="charSpec">{props.eachChar.species}</p>
      </div>
        
      
    </Link>
  );
};
export default CharacterCard;

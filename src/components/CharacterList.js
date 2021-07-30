import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  let charElement = (
    <p>Sorry, but there are no coincidences with your search</p>
  );
  if (props.chars.length !== 0) {
    charElement = props.chars.map((eachChar) => {
      return (
        <li key={eachChar.id} className="charItem change">
          <CharacterCard eachChar={eachChar} />
        </li>
      );
    });
  }
  return (
    <section>
      <ul className="charList">{charElement}</ul>
    </section>
  );
};
export default CharacterList;

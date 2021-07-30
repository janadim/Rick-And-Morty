const getApiData = () => {
  return fetch("https://rickandmortyapi.com/api/character/?results=20")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          name: character.name,
          id: character.id,
          image: character.image,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          episodes: character.episode.length,
        };
      });

      return cleanData;
    });
};

export default getApiData;

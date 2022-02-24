import React, { useState, useEffect } from "react";
import GaleryItems from "../GaleryItems/GaleryItems";

interface MortyData {
  name: string;
  id: number;
  image: string;
  location: {
    name: string;
  };
  status: string;
  species: string;
  type: string;
  gender: string;
}

interface MortyInfo {
  next: string | null;
  prev: string | null;

}

function Galery() {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([] as Array<MortyData>);
  const [info, setInfo] = useState({} as MortyInfo);


  
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
        setFilter("");
      })
      .catch(() => console.log("blöd"));
  }, [page]);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={filter}
        onChange={(ev) => {
          setFilter(ev.target.value);
        }}
        className={"gallerySearch"}
      />
      {info.next && <button onClick={() => setPage(page + 1)}>next</button>}
      {info.prev && <button onClick={() => setPage(page - 1)}>back</button>}
      <div className={"galleryBox"}>
        {characters.length > 0 ? (
          characters
            .filter((character) =>
              character.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((character) => (
              <GaleryItems
                key={character.id}
                name={character.name}
                image={character.image}
                location={character.location.name}
                status={character.status}
                species={character.species}
                type={character.type}
                gender={character.gender}
              />
            ))
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
}

export default Galery;

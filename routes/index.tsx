import Axios from "npm:axios";

type Character = {
  id: number;
  name: string;
};

type Data = {
  results: Character[];
};

export default async function Home() {
  try {
    const characters = await Axios.get<Data>(
      "https://rickandmortyapi.com/api/character",
    );
    return (
      <div>
        <h1>Personajes de Rick & Morty</h1>
        <ul>
          {characters.data.results.map((ch) => {
            return <li key={ch.id}>{ch.name}</li>;
          })}
        </ul>
      </div>
    );
  } catch (e) {
    return (
      <div>
        Ha ocurrido un error
      </div>
    );
  }
}

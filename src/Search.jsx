import { useState } from "react";

const Search = () => {
  const [pokemonName, setPokemonName] = useState('')

  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-full p-4 h-1/6">
      <form className="basis-4/6">
        <div className="w-full">
          <label
            className="block"
            htmlFor="pokemon-name">
            <input
              className="block border-2 border-cyan-800 text-cyan-800 text-2xl rounded p-8 w-full h-20"
              id="pokemon-name"
              type="search"
              name="pokemon-name"
              placeholder="Type a Pokemon name or ID to search for it"
              value={pokemonName}
              onChange={(event) => setPokemonName(event.target.value)} />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Search;

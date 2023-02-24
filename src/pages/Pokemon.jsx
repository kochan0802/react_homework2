import { useState } from "react";
import axios from "axios";

export const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    
    
    const getPokemons = async (keyword) => {
        const url = "https://pokeapi.co/api/v2/pokemon-species/";
        const results = await axios.get(`${url}${name}`);
        console.log(results.data);
        setPokemons(results.data.items ?? []);
    };

    
    return (
        <>
            <p>ポケモン言えるかな</p>
            <input type="text" onChange={(e) => getPokemons(e.target.value)} />
         <table>
        <thead>
          <tr>
            <th></th>
            <th>ポケモンの名前</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((x, i) => (
            <tr key={i}>
              <td>
                <button type="button">選択</button>
              </td>
              <td>{x.volumeInfo.title}</td>
              <td>{x.volumeInfo.publisher}</td>
              <td>{x.volumeInfo.publishedDate}</td>
              <td>
                <a
                  href={x.volumeInfo.infoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
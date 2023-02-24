import { useEffect, useState } from "react";
import axios from "axios";


export const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
            async function fetchData() {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
            setPokemons(response.data.results);
            }
    
            fetchData();
        },[]);

    
    return (
        <div>
            <p>ポケモン言えるかな</p>
            <ul>
                {pokemons.map(p => (
                    <li key={p.name} >{p.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default Pokemon;
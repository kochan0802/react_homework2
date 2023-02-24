import { useEffect, useState } from "react";
import axios from "axios";


export const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState('');
    // const [japaneseNames, setJapanseNames] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
            setPokemons(response.data.results);
        }
        fetchData();

    }, []);

    const filteredPokemons = pokemons.filter(p => p.name.includes(search));
    
    // useEffect(() => {
    //     async function fetchJapaneseNames() {
    //         const newJapaneseNames = {};
    //         for (const p of pokemons) {
    //             const response = await axios.get(p.url);
    //             newJapaneseNames[p.name] = response.data.names.find(n => n.language.name === 'ja-Hrkt').name;
    //         }
    //         setJapanseNames(newJapaneseNames);
    //     }
    //     fetchJapaneseNames();
    // }, [pokemons]);


    // const filteredPokemon = pokemons.filter(p => japaneseNames[p.name].includes(search));
        
    return (
        <div>
            <p>ポケモン言えるかな</p>
            <input type="text" placeholder="ポケモン名で検索" onChange={e =>setSearch(e.target.value)} />
            <ul>
                {filteredPokemons.map(p => (
                    <li key={p.name}>{p.name}</li>
                ))}
                {/* {filteredPokemon.map(p => (
                    <li key={p.name} >{japaneseNames[p.name]}</li>
                ))} */}
            </ul>
            
        </div>
    );
}
export default Pokemon;
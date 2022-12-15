import axios from "axios";
export default class PokeApi {
  async buscarTodosOsPokemonsGen1() {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    return response.data.results;
  }

  async buscarTodosOsPokemonsGen2() {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"
    );
    return response.data.results;
  }
  async buscarTodosOsPokemonsGen3() {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"
    );
    return response.data.results;
  }
  async buscarPokemonsTipos(url) {
    const response = await axios.get(url);
    return response.data;
  }

  async buscarTodosOsPokemons() {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    return response.data.results;
  }
  async buscarPokemonsDetalhes(url) {
    const response = await axios.get(url);
    return response.data;
  }
}

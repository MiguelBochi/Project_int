<script>
import PokeApi from "@/api/pokemons.js";
const pokeApi = new PokeApi();
export default {
  data() {
    return {
      pokemon: {
        name: "",
        url: "",
        id: "",
      },
      pokemons: [],
    };
  },
  async created() {
    const t_pokemons = await pokeApi.buscarTodosOsPokemonsGen3();
    for (const t_poke of t_pokemons) {
      const poke = await pokeApi.buscarPokemonsTipos(t_poke.url);
      console.log(poke);
      this.pokemons.push({
        id: poke.id,
        ...t_poke,
        game_indices: { ...poke.game_indices },
        sprites: { ...poke.sprites },
      });
    }
  },
};
</script>

<template>
  <h1 class="titulo">Pokedex Gen 3</h1>
  <div class="pokemonlist-area">
    <div class="pokemon-area" v-for="pokemon in pokemons" :key="pokemon">
      <div class="img-area">
        <img class="pokemon-img" :src="pokemon.sprites.front_default" />
      </div>
      <div class="nome-area">{{ pokemon.name }} | {{ pokemon.id }}</div>
    </div>
  </div>
</template>

<style>
.pokemonlist-area {
  display: flex;
  justify-content: center;
  gap: 1%;
  padding: 20px;
  height: 100%;
  min-height: auto;
  flex-wrap: wrap;
}

h1 {
  text-align: center;
  height: 100%;
}
.pokemon-area {
  height: 280px;
  width: 280px;
  background-color: rgb(160, 151, 139);
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
}
.nome-area {
  text-align: center;
  align-items: center;
  color: black;
  font-size: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.img-area {
  width: 100%;
  height: 80%;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.pokemon-img {
  width: 100%;
  height: 100%;
}
</style>

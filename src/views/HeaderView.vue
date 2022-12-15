<script>
import PokemonSearch from "../components/PokemonSearch.vue";
import { RouterLink } from "vue-router";
export default {
  components: { PokemonSearch, RouterLink },
};
</script>

<template>
  <header>
    <div class="area-button">
      <RouterLink to="/" class="link-button"
        ><input type="button" class="button1"
      /></RouterLink>
      <RouterLink to="/gen2" class="link-button"
        ><input type="button" class="button2"
      /></RouterLink>
      <RouterLink to="/gen3" class="link-button"
        ><input type="button" class="button3"
      /></RouterLink>
    </div>
    <div class="area-pesquisa"><PokemonSearch /></div>
  </header>
</template>

<style>
header {
  width: 100%;
  height: 75px;
  display: flex;
  padding: 20px;
  background-color: #dc0a2d;
}
.area-button {
  display: flex;
  width: 75%;
}

.link-button {
  width: 15%;
  height: 100%;
  margin-right: 8%;
  border-radius: 15px;
}
.button1 {
  background-color: #9c001b;
  border-color: #dc0a2d;
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
.button2 {
  background-color: #bea611;
  border-color: #dc0a2d;
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
.button3 {
  background-color: #336b3c;
  border-color: #dc0a2d;
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
.area-pesquisa {
  display: flex;
  width: 25%;
  border-radius: 15px;
}
</style>

<script>
import PokemonDetail from "../components/PokemonDetail.vue";
import { RouterView } from "vue-router";

export default {
  components: { PokemonDetail, RouterView },
};
</script>
<template>
  <article>
    <RouterView />
  </article>
</template>

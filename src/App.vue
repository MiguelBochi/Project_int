<script>
import HeaderView from "./views/HeaderView.vue";
import PokedexView from "./views/PokedexView.vue";
export default {
  components: { HeaderView, PokedexView },
};
</script>

<template>
  <HeaderView />
  <main><PokedexView /></main>
</template>
<style>
main {
  padding: 20px;
}
</style>

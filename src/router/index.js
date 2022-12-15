import { createRouter, createWebHistory } from "vue-router";
import Gen1 from "../components/PokemonListGen1.vue";
import Gen2 from "../components/PokemonListGen2.vue";
import Gen3 from "../components/PokemonListGen3.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "gen1",
      component: Gen1,
    },
    {
      path: "/gen2",
      name: "gen2",
      component: Gen2,
    },
    {
      path: "/gen3",
      name: "gen3",
      component: Gen3,
    },
  ],
});

export default router;

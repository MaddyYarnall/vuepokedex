<template>
  <div class="container-fluid">
    <div class="row">
      <Pokemon v-for="p in pokemon" :key="p.name" :pokemon="p" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { pokemonService } from '../services/PokemonService.js'
import { AppState } from '../AppState.js'
export default {
  setup() {
    onMounted(async () => {
      await pokemonService.getAllPokemon()
    })
    return {
      pokemon: computed(() => AppState.pokemon)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>

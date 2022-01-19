<template>
  <div class="component" v-if="activePokemon.sprites">
    <h1>{{ activePokemon.name }}</h1>
    <img :src="activePokemon.sprites.front_default" alt="pokemonimage" />
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { onMounted } from '@vue/runtime-core'
import { pokemonService } from '../services/PokemonService.js'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    onMounted(async () => {
      await pokemonService.getByName(route.params.name)
    })
    return {
      activePokemon: computed(() => AppState.activePokemon)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
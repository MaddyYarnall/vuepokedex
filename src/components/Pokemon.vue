<template>
  <div class="col-2">
    <button class="btn btn-info" @click="pokemonDetails()">
      {{ pokemon.name }}
    </button>
  </div>
</template>


<script>
import { useRouter } from 'vue-router'
import { pokemonService } from '../services/PokemonService.js'
import { logger } from '../utils/Logger.js'
export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    return {
      router,
      async pokemonDetails() {
        try {
          await pokemonService.getByName(props.pokemon.name)
          router.push({
            name: 'PokemonDetails',
            params: { name: props.pokemon.name }
          })
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class PokemonService {

  async getAllPokemon() {
    const res = await api.get('')
    console.log(res.data)
    AppState.pokemon = res.data.results
  }

  async getByName(name) {
    const res = await api.get(name)
    console.log(res.data)
    AppState.activePokemon = res.data
  }
}

export const pokemonService = new PokemonService
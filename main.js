class Pokemon {
  constructor(name) {
    this.name = name
    this.hp = null
    this.atk = null
    this.def = null
  }
}

class Trainer {
  constructor() {
    this.name = 'Ramata'
    this.team = []
  }

  addPokemon(name) {
  }

  fetchPokemon =  async () => {
    let mewtwo = await fetch('https://fizal.me/pokeapi/api/v2/id/150.json').JSON()
    let blaziken = await fetch('https://fizal.me/pokeapi/api/v2/id/257.json').JSON()
    let pikachu = await fetch('https://fizal.me/pokeapi/api/v2/id/250.json').JSON()
  }
}

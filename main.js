class Pokemon {
  constructor(name) {
    this.name = name
    this.stats = {
      hp: null,
      atk: null,
      def: null
    }
    this.abilities = []
  }
}

class Trainer {
  constructor() {
    this.name = 'Ramata'
    this.team = []
  }

  all() {
    return this.team
  }

  addPokemon(name) {
      let fetched = this.fetchPokemon(name).then((acquired) => {
      let pokemon = new Pokemon(acquired.name)
      pokemon.stats.hp = acquired.stats[5]["base_stat"]
      pokemon.stats.atk = acquired.stats[4]["base_stat"]
      pokemon.stats.def = acquired.stats[3]["base_stat"]
      for (let ability of acquired.abilities) {
        pokemon.abilities.push(ability.ability.name)
      }
      this.team.push(pokemon)
        let li = document.querySelectorAll('#mewtwoStatsOpen')
        let li2 = document.querySelector('#mewtwoStatsOpen')
        // let li3 = document.querySelector('#mewtwoStatsOpen')
        li.innerHTML = pokemon.stats.hp
        li2.innerHTML = pokemon.stats.atk
        // li3.innerHTML = acquired.stats[3]["base_stat"]
        li.appendChild(document.createElement('li'))
        // li2.appendChild(document.createElement('li'))
        // li3.appendChild(document.createElement('li'))
        // li3.appendChild.push(document.createElement('li'))
    })
  }
  //
  // this.abilities = [...array]
  // list3 = [...list1, ...list2]
  // let li = document.createElement("li");
  // document.getElementById('#mewtwoStats').appendChild(li);

  fetchPokemon = (name) => {
    let fetched = fetch(`https://fizal.me/pokeapi/api/v2/name/${name}.json`)
      .then((data) => data.json())
    return fetched
  }
}

let t = new Trainer()
t.addPokemon('mewtwo')
let mewtwo = t[0]
t.addPokemon('pikachu')
t.addPokemon('blaziken')
let mewtwoStats = document.getElementById('mewtwoStatsOpen')


// function statsList() {
//   let li = document.createElement("li");
//   // var stats = document.addElement(`${this.stats}`);
//   // li.appendChild(stats);
//   li.innerText = acquired.stats[5]["base_stat"]
//   document.getElementById("#mewtwoStats").appendChild(li);
// }

$("#mewtwoStats").click(function(event){
  $("#mewtwoStatsOpen").slideToggle(300)
})


// for(let i = 0; i<2; i++){
  //   let li = document.createElement('li')
  //   li.innerHTML = `${Object.keys(mewtwo.stats)[0]}: ${mewtwo.stats[i]}`
  //   mewtwoStats.appendChild(li)
  // }


//
// mewtwoStats.innerHTML = `<li>HP: ${t.all()[0].hp}</li>\n`
// mewtwoStats.innerHTML += `<li>ATK: ${t.all()[0].atk}</li>\n`
// mewtwoStats.innerHTML += `<li>DEF: ${t.all()[0].def}</li>`

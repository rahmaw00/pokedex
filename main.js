// // Trainer class containing pokemons
// class Trainer{
//   constructor(){
//     this.pokemon=[];
//   }
//   all(){
//     return this.pokemon;
//   }
//   add(pokemons){
//     this.pokemon.push(pokemons);
//   }
//   get(name){
//     for(let i=0; i<this.pokemon.length; i++){
//       if (name === this.pokemon[i].name){
//         return this.pokemon[i];
//       }
//     }
//   }
// }
// // Pokemon class with the main properties
// class Pokemon {
//   constructor(name, sprite, hp, attack, defense, ability, page) {
//     this.name= name;
//     this.sprite= sprite;
//     this.hp= hp;
//     this.attack= attack;
//     this.defense= defense;
//     this.ability= ability;
//     this.page = page
//     this.container = document.querySelector('#pokemonStats'+page);
//     this.element = document.createElement("div")
//   }
//   display(){
//     let pokeImage = document.getElementById('Img'+ this.page);
//     pokeImage.src = this.sprite;
//     let name = document.createElement('h2')
//     name.innerHTML = "Name: " + this.name
//     this.element.appendChild(name)
//     this.container.appendChild(this.element)
//     let hp = document.createElement('h3')
//     hp.innerHTML = "HP: " + this.hp
//     this.element.appendChild(hp)
//     this.container.appendChild(this.element)
//     let attack = document.createElement('h3')
//     attack.innerHTML = "Attack: " + this.attack
//     this.element.appendChild(attack)
//     this.container.appendChild(this.element)
//     let defense = document.createElement('h3')
//     defense.innerHTML = "Defense: " + this.defense
//     this.element.appendChild(defense);
//     this.container.appendChild(this.element)
//     let ability = document.createElement('h3')
//     ability.innerHTML = "Ability: " + this.ability
//     this.element.appendChild(ability)
//     this.container.appendChild(this.element)
//     console.log(this.ability);
//   }
// }
// axios.get("https://fizal.me/pokeapi/api/v2/name/gengar.json")
//   .then(function (answer){
//   console.log(answer);
//   let page = '1'
//   let name = answer.data.name;
//   let sprite = answer.data.sprites.front_default;
//   let hp = answer.data.stats[5].base_stat;
//   let attack =  answer.data.stats[4].base_stat;
//   let defense = answer.data.stats[3].base_stat;
//   let ability =answer.data.abilities[0].ability.name
//   let Pangoro = new Pokemon( name, sprite, hp, attack ,defense, ability,page );
//   Pangoro.display();
//   mukete = new Trainer()
//   mukete.add(Pangoro)
// })

class Pokemon {
  constructor(name, sprite, hp, attack, defense, ability, page) {
    this.name = name
    this.stats = {
      hp: null,
      atk: null,
      def: null,
    }
    this.container = document.querySelector('#mewtwoStats'+page);
    this.element = document.createElement('div')
    this.abilities = []
  }
}

class Trainer {
  constructor() {
    this.name = 'Ramata'
    this.team = []
  }

  display() {
    let name = document.createElement('h3')
    name.innerHTML = "Name: " + this.name
    this.element.appendChild(name)
    this.container.appendChild(this.element)
    let hp = document.createElement('li')
    hp.innerHTML = "HP: " + this.hp
    this.element.appendChild(hp)
    this.container.appendChild(attack)

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
        // li.innerHTML = pokemon.stats.hp
        // li2.innerHTML = pokemon.stats.atk
        let c = document.getElementById('hp')
        let atk = document.getElementById('atk')
        let def = document.getElementById('def')
        let abil = document.getElementById('abil')
        // li3.innerHTML = acquired.stats[3]["base_stat"]
        c.innerText = pokemon.stats.hp
        atk.innerText = pokemon.stats.atk
        def.innerText = pokemon.stats.def
        abil.innerText = pokemon.abil
        console.log(pokemon)

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

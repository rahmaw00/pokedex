class Ramata {
  constructor(name) {
    this.name = name
  }
}

class Stat {
  constructor(name) {
    this.name = undefined
    this.hp = null
    this.atk = null
    this.def = null
    this.spd = null
    this.total = null
  }
}

class Blaziken extends Stat {
  constructor(name) {
    super(name)
    this.hp = 80
    this.atk = 120
    this.def = 70
    this.spd = 80
    this.total = {
      total: this.hp + this.atk + this.def + this.spd
    }
  }
}
console.log(this.total)

class Mewtwo extends Stat {
  constructor(name) {
    super(name)
    this.hp = 106
    this.atk = 110
    this.def = 90
    this.spd = 130
  }
}

class Pikachu extends Stat {
  constructor(name) {
    super(name)
    this.hp = 35
    this.atk = 55
    this.def = 40
    this.spd = 90
  }
}

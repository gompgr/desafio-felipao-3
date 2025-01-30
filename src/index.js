class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  tipoHeroi() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
    }
    return ataque;
  }

  atacar() {
    let ataque = this.tipoHeroi();
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

let classeHeroi = new heroi("Dalai Lamma", 169, "monge");
classeHeroi.atacar();

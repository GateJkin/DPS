class Obj {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  getName() {
    return this.nome;
  }
  alert() {
    window.alert(this.getName());
  }
}

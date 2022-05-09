function Pessoa(nome, sobrenome){
this.nome = nome;
this.sobrenome= sobrenome;

this.methodo = function(){
    console.log(sobrenome + ': Esse é um método')
}}

const p1 = new Pessoa('Renan', 'felix')
const p2 = new Pessoa('Maria','Moura')

p2.methodo();
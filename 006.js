/*function criaConta(multiplacor){
return function(n){return n * multiplacor}
}   
const multiplica = criaConta(2)
const triplica = criaConta(3)
const quadruplica = criaConta(4)

console.log(multiplica(2))
console.log(triplica(2))
console.log(quadruplica(2))
*/

/*function randon(min = 1000, max = 2000) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function f1(callback) {
    setTimeout(function() {
        if(callback) {callback();}
        console.log('eu gosto de  bale')
},randon())
}
function f2(calback) {
    setTimeout(function(){console.log('o renan e legal3ft')
    if(calback) {calback();}
},randon())
}

function f39(calsback){
    setTimeout(function(){console.log('flavia')
    if(calsback) {calsback();}
},randon())
}


//f1 (function() {f2(function(){f39(function(){console.log('aee')})})})

f1(f1callback);

function f1callback(){
    f2(f2callback)
} 
function f2callback(){
    f39(f39callback)
}
function f39callback(){
console.log('')
}
*/

function criaPessoa(nome,
    sobrenome,
    Idade) {
    return {
        nome,
        sobrenome,
        Idade,
        fala: function (assunto) {
            return `${nome} ${sobrenome} com ${Idade} anos ${assunto}`;
        }
    };

}


const p1 = criaPessoa('Renan', 'Felix', 21)
console.log(p1.fala('está falando sobre JS'))


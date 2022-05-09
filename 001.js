/*const horas = 60 * 60 * 3 * 1000
const umDia = 60 * 60 * 24 * 1000
const data = new Date(0 + horas - umDia);*/
//const data = new Date(2022, 3);
/*const data = new Date(1643991683380)
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('minuto', data.getMinutes());
console.log('minuto', data.getSeconds());
console.log('dia da semana', data.getDay());
console.log(data.toString());*/
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}
function formataData (data) {
const dia = zeroAEsquerda(data.getDate());
const mes = zeroAEsquerda(data.getMonth() + 1);
const ano = zeroAEsquerda(data.getFullYear());
const hora = zeroAEsquerda(data.getHours ());
const min = zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds ());

return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
const data = new Date ()
const dataBrasil = formataData(data)
console.log(dataBrasil)
const tentativa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numeros of tentativa)   {
    if (numeros === 2) {
        console.log('pulei o 2');
        continue;
    }
    console.log(numeros);
}

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('Deu ruim')
    } return x + y;
}

try {
    console.log(soma(2, 3))

} catch (e) {
    console.log("dessa vez fomos nós que erramos")
    console.log(e)

}
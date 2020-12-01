function solution(S, K) {
    let dias = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const verificarDia = (element) => element == S;

    //console.log(dias.findIndex(verificarDia));
    let posicionDia = dias.findIndex(verificarDia);
    for (let i = 0; i < K; i++) {
        posicionDia++;
        if (posicionDia > 6) {
            posicionDia = 0;
        }

        //console.log(posicionDia);
    }

    console.log('El dia es:' + dias[posicionDia]);
}

solution('Mon', 33);
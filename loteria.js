/* 3) Crie um sistema de loteria onde ao iniciar o programa são gerados 6 números aleatórios entre 1 e 100. Pergunte ao apostador quais são os 6 números da sua aposta. Ao final mostrar se o apostador acertou a sena (6 números corretos), quina (5 números corretos), quadra (4 números corretos), terno(3 números corretos) ou se não ganhou nada (menos que 3 números corretos). (3 pontos)

- Gerar números aleatórios (1,0)
- Cadastrar / receber números da aposta (1,0)
- Mostrar resultado ao apostador da forma correta (1,0)*/

let numerosAposta = []
let numero
let numeroAleatorioVetor = []
let acertou = 0

for (i = 0; i < 6; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 100)
    numeroAleatorioVetor.push(numeroAleatorio)
}
alert(numeroAleatorioVetor)

for (n = 0; n < 6; n++) {
    numero = Number(prompt("Digite número"))
    numerosAposta.push(numero)
}

for (n = 0; n < 6; n++) {

    for (m = 0; m < 6; m++) {

        if (numerosAposta[n] == numeroAleatorioVetor[m]) {

            acertou++
        }

    }

}
switch (acertou) {

    case 6:
        alert("voce acertou a sena")
        break

    case 5:
        alert("voce acertou a quina")
        break

    case 4:
        alert("voce acertou a quadra")
        break

    case 3:
        alert("voce acertou a terno")
        break

    default:
        alert("voce nao ganhou nada")

}
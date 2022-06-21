/* 1) Uma pizzaria deseja emitir notas dos seus pedidos. Crie um sistema que pergunte ao cliente a quantidade de pizzas do pedido e para cada pizza cadastre o sabor, tamanho e preço. Ao final, mostre na tela os dados do pedido (sabores, tamanhos e preços) com o total a pagar. (2 pontos)

- Cadastro das pizzas (0,5)
- Lista com dados e total (1,5)*/
let quantidadePizza, tamanhoPizza, saborPizza, precoPizza
let sabores = []
let tamanhos = []
let precos = []
let somaPreco = 0


quantidadePizza = Number(prompt("Quantas pizzas deseja comprar? "))

for (i = 0; i < quantidadePizza; i++) {

    saborPizza = prompt(`Qual sabor da ${i + 1}ª pizza? `)
    sabores.push(saborPizza)
    tamanhoPizza = prompt("Qual tamanho? ")
    tamanhos.push(tamanhoPizza)
    precoPizza = Number(prompt("Digite o preço: "))
    precos.push(precoPizza)

    somaPreco = somaPreco + precos[i]

}

alert(`Seu pedido de pizzas contém:\n\nSabores: ${sabores.join(', ')}\nTamanhos: ${tamanhos.join(', ')}\nPreços: ${precos.join(', ')}\nO Total a pagar é: R$ ${somaPreco}.`)

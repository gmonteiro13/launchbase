const users = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },

    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },

    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
]

function somaNumeros(numeros) {
    let soma = 0

    for (i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i]
    }

    return soma
}

// utilizar let ... of ... na funcao somaNumeros

function calculaSaldo(receitas, despesas) {
    return (somaNumeros(receitas) - somaNumeros(despesas))
}

for (let user of users) {
    const saldo = calculaSaldo(user.receitas, user.despesas)

    if (saldo < 0) {
        console.log(`${user.nome} possui um saldo NEGATIVO de ${saldo}`)
    } else {
        console.log(`${user.nome} possui um saldo POSITIVO de ${saldo}`)
    }
}
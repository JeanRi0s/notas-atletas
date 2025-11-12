let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMediaAtletas(listaAtletas) {
  for (let i = 0; i < listaAtletas.length; i++) {
    let atleta = listaAtletas[i];
    let notas = atleta.notas;

    // Ordena as notas em ordem crescente
    let notasOrdenadas = notas.sort((a, b) => a - b);

    // Elimina a menor (primeiro índice) e a maior (último índice)
    let notasComputadas = notasOrdenadas.slice(1, 4);

    // Calcula a média das três notas do meio
    let soma = 0;
    notasComputadas.forEach(function(nota) {
      soma += nota;
    });

    let media = soma / notasComputadas.length;

    // Exibe o resultado formatado
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notasOrdenadas.join(",")}`);
    console.log(`Média Válida: ${media}`);
    console.log(""); // linha em branco para separar
  }
}

// Executa a função
calcularMediaAtletas(atletas);

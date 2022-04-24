const data = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",
    sexo: "F",
    salario: 8350.25,
  },
];

// 4 - Imprima no console a soma do salario de todos as pessoas do sexo Masculino

const pessoasMasc = data.filter((pessoa) => pessoa.sexo == "M");

const somaSalario = pessoasMasc.reduce((curr, next) => curr + next.salario, 0);
console.log(somaSalario);

const _ = require('lodash')

const alunos = [
  {
    nome: "João",
    nota: 7.6
  },
  {
    nome: "Maria",
    nota: 6.8
  },
  {
    nome: "Pedro",
    nota: 9.0
  }
]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)

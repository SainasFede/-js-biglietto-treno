let output;

const kmUtente = prompt('Quanti Km deve percorrere?')
const etàUtente = prompt('Quanti anni ha?')
const costoPerKm = 0.21

let costoBenzina = kmUtente * 0.21
const scontoAnziani = costoBenzina * 0.40
const scontoMinorenni = costoBenzina * 0.20

if (etàUtente >= 65) {
  costoKmUtente = ((kmUtente * 0.21) - scontoAnziani)
} else if (etàUtente <= 18) {
  costoKmUtente = ((kmUtente * 0.21) - scontoMinorenni)
} else {
  costoKmUtente = kmUtente * 0.21
}

output = `
${costoKmUtente.toFixed(2)}€
`
console.log(output);

document.getElementById('costobiglietto').innerHTML += output;
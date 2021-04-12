/* lanzar el dado y anotarlo, lanzar el dado y anotarlo y 
sumar esos dos valores repetir esto 100 veces y 
decir cuantas veces cayo cada posible suma */
class Dado {
	lanzar() {
		return Math.ceil(Math.random() * 6)
	}
}

class Jugador {
	constructor() {
		this.suma = 0
	}

	lanzarDado(dado) {
		return dado.lanzar()
	}
}

let dado = new Dado()

let j1 = new Jugador()
let j2 = new Jugador()

let dos = 0
let tres = 0
let cuatro = 0
let cinco = 0
let seis = 0
let siete = 0
let ocho = 0
let nueve = 0
let diez = 0
let once = 0
let doce = 0
let suma = 0

for (let i = 0; i < 100; i++) {
	suma = j1.lanzarDado(dado) + j2.lanzarDado(dado)

	switch (suma) {
		case 2:
			dos++
			break

		case 3:
			tres++
			break

		case 4:
			cuatro++
			break

		case 5:
			cinco++
			break

		case 6:
			seis++
			break

		case 7:
			siete++
			break

		case 8:
			ocho++
			break

		case 9:
			nueve++
			break

		case 10:
			diez++
			break

		case 11:
			once++
			break

		case 12:
			doce++
			break
	}
}

console.log('total de sumas igual a dos: ' + dos)
console.log('total de sumas igual a tres: ' + tres)
console.log('total de sumas igual a cuatro: ' + cuatro)
console.log('total de sumas igual a cinco: ' + cinco)
console.log('total de sumas igual a seis: ' + seis)
console.log('total de sumas igual a tres: ' + siete)
console.log('total de sumas igual a ocho: ' + ocho)
console.log('total de sumas igual a nueve: ' + nueve)
console.log('total de sumas igual a diez: ' + diez)
console.log('total de sumas igual a once: ' + once)
console.log('total de sumas igual a doce: ' + doce)

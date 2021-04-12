/*leer 10 calificaciones y mostrar el promedio
y las calificaciones mayores al promedio.*/

let a = [10, 10, 9, 8, 7, 8, 9, 10, 6, 5]

function sum(array) {
	let suma = 0
	for (var elements of array) {
		suma += elements
	}
	return suma
}
let promedio = sum(a) / a.length
let mayorPromedio = a.filter(function (a) {
	return a > promedio
})
console.log(sum(a))
console.log(promedio)
console.log(mayorPromedio)

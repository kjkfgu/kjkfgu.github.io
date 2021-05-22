let cars = {"toyota mark 2":"50k$", "nissan skyline":"35k$", "toyota SUPRA":"40k$", "mitsubisi eclipse":"25k$"}
function getPrice(){
	let car = document.querySelector("select")
console.log(car.value)
let price = document.querySelector("#price")
price.innerHTML = cars[car.value]}
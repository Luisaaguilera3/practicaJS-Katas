
//Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
let myFavoriteHero= "Hulk";

//Crea una variable llamada x, asigna el valor 50 a ella.
let x= 50;

// Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
let h=5;
let y =10;

//Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
let z= "h + y";

//Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age:25};

//Declara 3 variables con los nombres y valores siguientes:
let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 

//Muestralos por consola de esta forma: 
console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`);
//console.log('Soy + "firstName" + "lastName", + tengo + "age" + años y me gustan los lobos');
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.' //MAL REVISAR NO SALE EN CONSOLA

//Dado el siguiente código, imprime con un console.log la suma del precio de ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price)

//Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 75000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 95000};

// Multiplica 10 por 5 y muestra el resultado mediante console.
const num1 = 10;
const num2 = 5;

console.log (num1 * num2)

 // Divide 10 por 2 y muestra el resultado en un console.
const num3 = 2;

console.log (num1 / num3)

//Muestra mediante un console el resto de dividir 15 por 9.
 console.log (15 % 9)

//Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.
let p= 10;
let j= 5;

let = p + j


//1.5 Usa el correcto operador de asignación que resultará en i = 50, teniendo dos variables c = 10 y m = 5.

let c = 10;
let m = 5;

let i = c * m

//Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0])

//Cambia el primer elemento de avengers a "IRONMAN"
const avengersnew = avengers.unshift ("IRONMAN")
console.log(avengers)

//console numero de elementos en el array usando la propiedad correcta de Array.
console.log(avengers.length) 


//Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push ("Morty", "Summer");
console.log(rickAndMortyCharacters[4])

//Elimina el último elemento del array y muestra el primero y el último por consola.
rickAndMortyCharacters.pop("Summer");
console.log(rickAndMortyCharacters[0]);
console.log (rickAndMortyCharacters[3]);


//Elimina el segundo elemento del array y muestra el array por consola.
rickAndMortyCharacters.splice("Beth");
console.log(rickAndMortyCharacters);


const number1 = 10; 
const number2 = 20;
const number3 = 2;

//ejemplo
if(number1 === 10){
   console.log('number1 es estrictamente igual a 10')
}

if(number2/number1 == 2){
 console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3*5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3*5 == number1 && number1*2 ==number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2/2 == number1 || number1/5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}


//Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
let g= 0;
while (i<9) {
  i++;
  console.log(i);
}

//Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.
let f= 0;
while (f<9) {
  f++;
  console.log(f%2);
}
//Crea un bucle para conseguir dormir contando ovejas. Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
//Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle y cambia el mensaje en la décima vuelta a 'Dormido!'.

for (let i = 0; i < 10; i++) {
  console.log("Intentando dormir 🐑");
  if (i === 9) {
      console.log("Dormido!");
  }
}


function sum(numberOne , numberTwo) {
  return (numberOne + numberTwo);
}

let total = sum (6 , 3)
console.log (sum(6 , 3))


const avengers1 = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  for (let i = 0; i < param.length; i++) {
    if (param[i].length > longestWord.length) {
    
      longestWord = param[i];
    }
  }
  return longestWord;
}

let longestWord = "";
console.log(findLongestWord(avengers1)); 


const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumAll(numbers)); 


const numbers1 = [12, 21, 38, 5, 45, 37, 6]
function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(average(numbers1));


//Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
//pista (typeof)
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(elements) {
  let totalSum = 0;
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === 'number') {
      totalSum += elements[i];
    } else if (typeof elements[i] === 'string') {
      totalSum += elements[i].length;
    }
  }
  return totalSum / elements.length;
}

console.log(averageWord(mixedElements));


//Ejercicio 12: valores unicos
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(duplicates) {
  const uniqueElements = [];
  const seenElements = {};

  for (let i = 0; i < duplicates.length; i++) {
    if (!seenElements[duplicates[i]]) {
      uniqueElements.push(duplicates[i]);
      seenElements[duplicates[i]] = true;
    }
  }

  return uniqueElements;
}

console.log(removeDuplicates(duplicates));


//Ejercicio 13: buscador de nombres
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(nameFinder) {
  for (let i = 0; i < nameFinder.length; i++) {
    if (nameFinder[i] === nameFinder) {
      return {includes: true, position: i}
    }
      return {includes: false}
  }
 
}
console.log(finderName(nameFinder));


//Ejercicio 14: contador de repeticiones
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(counterWords) {
  const counter = {}
  for (let word of counterWords)
  if (counter[word]){
    counter[word]++;
  } else {
    counter[word] = 1;
  }

  return counter

}
console.log (repeatCounter(counterWords));


//Ejercicio 15: Uses includes
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let i = 0; i < products.length; i++){
  if (products[i].toUpperCase().includes('CAMISETA')){
    console.log(products[i])
  }
}

//Ejercicio 16: Use ForOf
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const places of placesToTravel) {
  console.log(places);
}

//Ejercicio 17: Use ForIn
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const people in alien) {
  console.log(people)
}

//Ejericio 18: Use For. Delete "11 and 40"
const citiesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
let eliminados = 0 ;

for (let i = citiesToTravel.length - 1; i >= 0; i--) {
  if (citiesToTravel[i].id === 11 || citiesToTravel[i] === 40 ) {
    citiesToTravel.splice(i, 1);
    eliminados++;
  }
  if (eliminados >=2) {
    break;
  }
}
console.log(citiesToTravel);

//Ejercicio 19: Mix For and includes. Delete "gato"
const toys = [
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
  ]
  let remove = 0

  for (let i = toys.length - 1; i >= 0; i--){
    if (toys[i].name.includes('gato')) {
      toys.splice(i, 1);
      remove++;
    }
    if (remove >= 2) {
      break;
    }
  }
  console.log(toys)

  //Ejercicio 20: ForOf avanzado
  const popularToys = [];
  const juguetes = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
for (const juguete of juguetes) {
  console.log(juguete);
  if (juguete.sellCount > 15){
    popularToys.push(juguetes)
  }

}
console.log(popularToys)


//Ejercicio 21: Usuarios menores de edad
const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

for (const user of users) {
  if (user.years < 18){
    console.log(`Usuarios menores de edad: ${user.name}`)
  }

  else {
    console.log(`Usuarios mayores de edad: ${user.name}`)
  }
}


//Ejercicio 22: Use For
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let frutasUsables = [];
for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    for (let p = 0; p < fruits.length; p++) {
      if (!frutasUsables.includes(fruits[i])){
        foodSchedule[i] = {name: fruits[p], isVegan: true};
        frutasUsables.push(fruits[p]);
        break;
      }
    }
  }
}
console.log(foodSchedule)


//Ejercicio 23: 
const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

let corta = [];
let mediana = [];
let larga = [];

for (let i = 0; i<movies.length; i++) {
  if (movies[i].durationInMinutes < 100){
    corta.push(movies[i]);
  } else if (movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes < 200) {
    mediana.push(movies[i]);
  } else if (movies[i].durationInMinutes >= 200) {
    larga.push(movies[i]);
  }
}
console.log("Peliculas pqueñas:", corta);
console.log("Peliculas medianas:", mediana);
console.log("Peliculas grandes:", larga);


//Ejercicio 24: sum sellCount
const RandomProducts = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let totalRandomProductos = 0;

for (let i = 0; i <RandomProducts.length; i++) {
  totalRandomProductos += RandomProducts[i].sellCount;
}
console.log("Total:", totalRandomProductos);


//Ejercicio 25: Usando el array anterior: const RandomProducts
for (let i = 0; i < RandomProducts.length; i++) {
  totalRandomProductos += RandomProducts[i].sellCount;
}
const mediasellCount = totalRandomProductos / RandomProducts.length;

console.log("Media de las ventas:", mediasellCount);


//Ejercicio 26: Clasificar productos:
const goodProducts = [];
const badProducts = [];
const products2 = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

for (let i = 0; i < products2.length; i++) {
  if (products2[i].sellCount > 20) {
    goodProducts.push(products2[i]);
  }
  else {
    badProducts.push(products2[i])
  }
}
console.log("Productos buenos:", goodProducts);
console.log("Productos malos", badProducts);




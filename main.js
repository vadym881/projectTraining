
//console.log('hello')
//alert('hello')
// const userInput = prompt('Enter your name')
// console.log(userInput)
// const title = document.getElementById('title')
// const header = document.getElementsByName('header')
// title.textContent = 'My title'
// header[0].textContent = `Hello ${userInput}`

const array = ['Paul', 'Julia', 'Vadym', 'Irina']
console.log(typeof array)
const namesHeader = document.getElementById('names')
console.log(namesHeader.textContent)

const Vadym = {
    personName: 'Vadym',
    age: 15,
    nickname: 'shitload'
}

// for (el of array) {
//     console.log(el)
// }

for (key in Vadym) {
    console.log(`${key} - ${Vadym[key]}`)
}

const insert = 'person'
let i=0
for (el of array) {
    const p = namesHeader.appendChild(document.createElement("p"));
    p.id=`${insert}-${array[i]}`
    p.textContent = array[i] 
    i+=1; 
}

const VadymIndex = array.indexOf('Vadym')
const VadymHtmlEl = document.getElementById(`${insert}-${array[VadymIndex]}`)
let y=0
for (key in Vadym) {
    const h2 = namesHeader.appendChild(document.createElement("h2"));
    h2.id = key
    h2.textContent = Vadym[key]
}

// const p = namesHeader.appendChild(document.createElement("p"))
// p.textContent = array[0]

// const array2 = array.map(el=>el.length*2)

// console.log(array)
// console.log(array2)

let x =5;
let n =x;
x+=1;
console.log(x)
console.log(n)

const clone = Vadym
Vadym.nickname = 'great shitload'
console.log(Vadym)
console.log(clone)






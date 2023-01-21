// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
let newCats = []

function destructivelyAppendCat (name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop(cats.length - 1);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    return [...cats,name];
}

function prependCat(name){
    return [name, ...cats]
}
function removeLastCat(){
   return cats.slice(0,-1);
}
function removeFirstCat(){
   return cats.slice(1);
}
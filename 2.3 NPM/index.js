// var generateName=require("sillyname")it is for commonjs
// import generateName from "sillyname" //this is for module
// var silly=generateName();

// console.log(`my name is ${silly}`)

import generateName from "superheroes"
const name=generateName.random()

console.log(`i am a ${name}`)
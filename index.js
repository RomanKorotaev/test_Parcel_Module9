
import data from "./defaultexport";


console.log(" Это файл index.js")
console.log("data from ./defaultexport =  ", data)


import {functionOne,functionTwo, functionThree, x as value, y  } from "./namedexport";

functionOne();
functionTwo();
functionThree();

//console.log(`x  from ./namedexport = ${x}`)
console.log(`x has name in our local file  value  from ./namedexport = ${value}`)
console.log(`y  from ./namedexport = ${y}`)


import * as apiService from "./namespace_export"

apiService.function4();

console.log(`apiService.function5 = ${apiService.function5}`)

console.log('apiService.t = ', apiService.t);

console.log('apiService.d = ',apiService.d )







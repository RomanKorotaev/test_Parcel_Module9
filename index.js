
import data from "./defaultexport";

import {functionOne,functionTwo, functionThree, x, y  } from "./namedexport";


console.log(" Это файл index.js")
console.log("data from ./defaultexport =  ", data)

functionOne();
functionTwo();
functionThree();

console.log(`x  from ./namedexport = ${x}`)
console.log(`y  from ./namedexport = ${y}` )








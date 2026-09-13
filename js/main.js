// import { add, sub } from "./module/math";
// import * as math from "./module/math";
// import { add as addition, sub as subtraction } from "./module/math";

// import User from "./module/user";

import { add, sub, User } from "./module/index";

import "./module/default-init";
import { config } from "./module/config";

console.log(`1 + 2 = ${add(1, 2)}`);
console.log(`5 - 2 = ${sub(5, 2)}`);

// console.log(`1 + 2 = ${math.add(1, 2)}`);
// console.log(`5 - 2 = ${math.sub(5, 2)}`);

// console.log(`1 + 2 = ${addition(1, 2)}`);
// console.log(`5 - 2 = ${subtraction(5, 2)}`);

let user1 = new User("Tom");
console.log(user1.name);

console.log(`Config is ${JSON.stringify(config, null, 2)}`);

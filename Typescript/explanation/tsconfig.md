## the tsconfig file

- The tsconfig file has a bunch of options that you can change to change the compilation process.

Some of these include
 
#  target

The target option in a tsconfig.json file specifies the ECMAScript target version to which the TypeScript compiler will compile the TypeScript code.
To try it out, try compiling the following code for target being ES5 and es2020
const greet = (name: string) => `Hello, ${name}!`;

Output for ES5
Output for ES2020
"use strict";
const greet = (name) => `Hello, ${name}!`;

# rootDir
Where should the compiler look for .ts files. Good practise is for this to be the src folder

# outDir
Where should the compiler look for spit out the .js files.

(done in settingUp)
- "rootDir": "./src",
- "outDir": "./dist",

# noImplicitAny
Try enabling it and see the compilation errors on the following code - 
const greet = (name) => `Hello, ${name}!`;
<!-- implicitany : false related to any (name : String) diya to acha hai par nhi diya to any ata hai aur kinda error show karta hai par flase kiya to kuc error nahi ayaga NTW bydefault true raha tha tabhi error ata hai -->

Then try disabling it

# removeComments
Weather or not to include comments in the final js file
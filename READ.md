# How To Use TypeScript With Express & Node

https://www.youtube.com/watch?v=qy8PxD3alWw

# SETUP & BASIC WORKFLOW

*** 
dep:
npm i @types/express @types/nodes

***
create tsconfig.json:
npx tsc --init

*** 
uncomment output directory for .js -Files and change name of folder (i.e /dist)
"outDir": "./dist",  

***
to create folder, run: 
npx tsc

***
now you can run:
node dist/index.js

***
in package.json

  "scripts": {
    <!-- npm run build is doing the transpiling -->
    "build":"npx tsc", 
    <!-- npm run start is running the transpiled .ts file as .js -->
    "start":"node dist/index.js",
    <!-- npm run dev is running watches typscript and paralelle watching transpiled .js-code-->
    "dev":"tsc -w & nodemon dist/index.js"

  },
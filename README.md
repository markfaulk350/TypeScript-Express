# TypeScript-Express
The purpose of this project is to create a simple example on how to setup an express API using TypeScript. There are tons of tutorials and articles out there but none of them are complete or consistent.


# Project Setup
1. Create a package.json file
```bash
npm init -y
```

2. Generate a tsconfig.json file
```bash
tsc --init
```

3. Create 2 folders in root directory, src & dist
```bash
mkdir src dist
```

4. Configure src and dist directory in tsconfig.json
```json
    // tsconfig.json

    "outDir": "./dist",     // JavaScript
    "rootDir": "./src",     // Typescript
    "moduleResolution": "node",
```

5. Configure Typescript and Nodemon to hot compile and reload with concurrently. The start command & the dev command do the exact same thing. They run multiple commands concurrently but with different syntax. I'm just showing you the 2 ways to write scripts with concurrently.
```json
    // package.json

  "main": "index.js",
  "scripts": {
    "start:build":"tsc -w",
    "start:run":"nodemon dist/index.js",
    "start":"concurrently npm:start:*",
    "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""
  },
```

6. Create an index.ts file inside of src folder
```bash
touch index.ts
```

7. Install main dependencies
```bash
npm i express body-parser
```

8. Install type definition files as development dependencies
```bash
npm i -D @types/node @types/express @types/body-parser
```

9. Install development dependencies
```bash
npm i -D nodemon concurrently typescript
```
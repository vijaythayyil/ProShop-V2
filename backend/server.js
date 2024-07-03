// Use ES modules (type: module) instead of CommonJS
// This allows us to use modern JavaScript features and syntax
//rather than the CommonJS require() function.
// as well as benefit from static imports and exports.
// This is a new feature in Node.js 12 and higher.
// To enable ES modules, we need to change the file extension from .js to .mjs
// and add "type": "module" to the package.json file.
// We can also use the .cjs extension for CommonJS files.
// We can also use the .mjs extension for ES modules.
// We can also use the .js extension for either CommonJS or ES modules.

import dotenv from "dotenv"; //import dotenv
dotenv.config(); //initialize dotenv
import express from "express"; //import express
import products from "./data/products.js"; //since we are using ES modules, we need to add the .js extension

const port = process.env.PORT || 5000; //initialize port

const app = express(); //initialize express

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  res.json(product);
});

//what is npm i -D
//npm i -D is short for npm install --save-dev. It installs a package locally for development purposes.
//The package won't be included in the production build.

//creating first route
app.get("/", (req, res) => {
  //get request
  res.send("API is running...");
});

app.listen(port, () => console.log(`Server running on port ${port}`)); //listen to port
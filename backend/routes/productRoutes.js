import express from "express";
const rourer = express.Router(); //initialize express router
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js"; //import getProducts and getProductById functions from productController
rourer.route("/").get(getProducts); //route to get all products
rourer.route("/:id").get(getProductById); //route to get product by id

export default rourer; //export router

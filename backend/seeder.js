import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import reviews from "./data/reviews.js";
import Review from "./models/reviewModel.js";
import cart from "./data/cart.js";
import cartModel from "./models/cartModel.js";
import wishlist from "./data/wishlist.js";
import wishlistModel from "./models/wishlistModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await wishlistModel.deleteMany();
    await cartModel.deleteMany();
    await Review.deleteMany();
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const cartWithUsers = cart.map((cart) => {
      return { ...cart };
    });

    const wishlistWithUsers = wishlist.map((wishlist) => {
      return { ...wishlist };
    });

    const reviewsWithUsers = reviews.map((review) => {
      return { ...review };
    });

    const sampleProducts = products.map((product) => {
      //map through the products array and for each product, return a new object with the product and the admin user
      return { ...product, user: adminUser }; //the ...product is a spread operator that copies the product object
    });

    await Product.insertMany(sampleProducts);
    await cartModel.insertMany(cartWithUsers);
    await wishlistModel.insertMany(wishlistWithUsers);
    await Review.insertMany(reviewsWithUsers);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Review.deleteMany();
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

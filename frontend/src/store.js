//store.js is a file that contains the store configuration for the frontend of the application.
// It is used to manage the state of the application and handle actions and reducers.
//The store.js file is typically used in conjunction with the Redux library to manage the state of the application.
//In this file, you can define the initial state of the application, create the store, and export the store for use in other parts of the application.
//The store.js file is an important part of the frontend architecture and is used to manage the state of the application in a centralized location.
//this is the entry point of redux in the frontend of the application. It is used to create the store and export it for use in other parts of the application.

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export default store;

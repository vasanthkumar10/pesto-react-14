const { configureStore } = require("@reduxjs/toolkit");
const { rootReducer } = require("./rootReducer");

const store = configureStore(rootReducer);

module.exports = { store };

// Les constructeurs devront être importés.
/**
 * Initializing the whole cart and commande system, calling GuiBuilder constructor and classes CartManager (cart.js) and ProductsRepository (products.js)
 */
const gui = require("gui.js");
const cart = require("cart.js");
const products = require("products.js");

const builder = new gui.GuiBuilder(
  new cart.CartManager(),
  new products.ProductsRepository()
);
// Initialisation de l'interface graphique.
builder.initialize();

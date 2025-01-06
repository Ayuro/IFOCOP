// à exporter...

/**
 * Creating and managing the cart of the user (adding and removing items from it)
 * @class
 */
class CartManager {

  constructor () {
    this.cart = [];
  }

  /**
   * Récupère le panier courrant
   * @returns (*)
   * @memberof CartManager
   */
  getCart () {
    return this.cart;
  }

  /**
   * Ajoute un item au panier courrant
   * @param {
   * id: number
   * price: number
   * name: string
   *  } item 
   * @returns 
   * @memberof CartManager
   */
  addItem (item) {
    for (let i = 0; i < this.cart.length; i++) {
      if (item === this.cart[i].item) {
        this.cart[i].quantity++;
        return this;
      }
    }
    this.cart.push({
      quantity: 1,
      item: item
    });
    return this;
  }

  /**
   * Retire un item du panier
   * @param {*} item 
   * @returns
   * @memberof CartManager
   */
  removeItem (item) {
    for (let i = 0; i < this.cart.length; i++) {
      this.cart.quantity = this.cart.quantity || 0;
      if (item === this.cart[i].item) {
        this.cart[i].quantity--;
        if (this.cart[i].quantity < 1) {
          this.cart.splice(i, 1);
        }
      }
    }
    return this;
  }
};

// module.exports = {cart: CartManager};
export default CartManager;
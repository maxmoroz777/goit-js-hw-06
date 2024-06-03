class Storage {
  #items;
  constructor(params) {
    this.#items = params.items;
  }

  getItems() {
    return this.#items;
  }
  // addItem(newItem) {
  //   this.#items = newItem;
   
  // }
  // removeItem(itemToRemove) {
    
  // }

}



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
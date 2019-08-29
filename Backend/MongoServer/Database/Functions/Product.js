const getDb = require("../DBConnection").getDb;

module.exports = class Product {
  constructor(product_name,price) {
    this.product_name = product_name;
    this.price = price;
  }

  save() {
    console.log("save");
    const db = getDb();
    return db
      .collection("products")
      .insertOne(this)
      .then(result => {
        console.log("result" + result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  static fetchAll() {
    console.log("fetching...");
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log(error);
      });
  }
};

const Product = require("../Database/Functions/Product");

exports.postAddProduct = (req, res, next) => {
  console.log("save");
  console.log(req.body);
  const product = new Product(req.body.product_name, req.body.price);
  product
    .save()
    .then(result => {
      console.log("product added");
      res.send(JSON.stringify(result));
    })
    .catch(error => {
      console.log("error admin controllpage" + error);
    });
};

//getting products on admin side
exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.send(JSON.stringify(products));
    })
    .catch(error => {
      console.log("error");
    });
};

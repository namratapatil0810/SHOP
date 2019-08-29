const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./Routes/AdminRoutes");
const shopRoutes = require("./Routes/ShopRoutes");
const path = require("path");
const app = express();
const mongoConnect = require("./Database/DBConnection").mongoConnect;

app.use((req, res, next) =>{
  next();
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

mongoConnect(client => {
  app.listen(8000);
});

const Product = require("../models/product");

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  console.log("You are viewing a product " + productId);

  Product.findById(productId, (product) => {
    console.log(product.title);
    console.log(product.amount);
    if (!product.title) return res.send("No product file");

    let htmlstr = `<div class="product-details">
            <h2>${product.title}</h2>
            <div class="product-image">
              <img src="${product.image}" alt="${product.title}" style="height: 200px; width: 200px; display: block; margin-bottom: 10px;">
            </div>
            <div class="product-info">
              <p><strong>Price:</strong> ${product.amount}</p>
              <p><strong>Description:</strong> ${product.description}</p>
              <form action="/cart" method="POST" >
              <button style="width: 75px; height: 40px; text-decoration: none; border:none; text:20px;  background-color: yellow;" action="Submit" >Add to Cart</button>
              <input type="hidden" name="productId" value=${product.id}>
              </form>
              </div>
          </div>`;
    res.send(htmlstr);
  });
};

const path = require("path");
const rootDir = require("../util/path");
const Product = require('../models/product');

exports.shopController = (req, res, next) => {
    Product.fetchAll((prod) => {
        let productsHtml = "";
        prod.forEach(product => {
            productsHtml += `
                <li>${product.title}</li>
            `;
        });

        console.log("Prod html " + productsHtml); // Debugging line to see the generated HTML

        let html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Shop</title>
                <style>
                    body {
                        margin: 0;
                    }
                    nav {
                        background-color: yellowgreen;
                        margin: 0;
                        top: 0;
                        width: 100%;
                    }
                    nav ul {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                    }
                    li {
                        list-style: none;
                        color: black;
                    }
                    li a {
                        text-decoration: none;
                    }
                    form {
                        margin-top: 10px;
                        margin-left: 20%;
                    }
                    button {
                        background-color: rgb(147, 239, 90);
                        border: none;
                    }
                </style>
            </head>
            <body>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Shop</a></li>
                            <li><a href="/admin/add-product">Add Product</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <h1>My Product</h1>
                    <p>List of all products...</p>
                    <ul>
                        ${productsHtml}
                    </ul>
                </main>
            </body>
            </html>`;

        res.send(html);
    });
};

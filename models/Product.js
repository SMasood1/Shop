const products = [
  {
    id: "p1",
    ownerId: "u1",
    title: "Red Shirt",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg",
    description: "A red t-shirt, perfect for days with non-red weather.",
    price: 29.99
  }
];

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.ownerId = 'u1';
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    this.id = Math.random().toString();
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
  static deleteById(id) {
    const product = products.find(prod => prod.id === id);
    products.splice(product, 1);
  }
};

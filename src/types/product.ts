class Product {
    itemId: string;
    itemVariantId: string;
    name: string;
    brand: string;
    category: string;
    price: number;
    currency: string;
    imageUrl: string;
    productUrl: string;
  
    constructor(
      itemId: string,
      itemVariantId: string,
      name: string,
      brand: string,
      category: string,
      price: number,
      currency: string,
      imageUrl: string,
      productUrl: string
    ) {
      this.itemId = itemId;
      this.itemVariantId = itemVariantId;
      this.name = name;
      this.brand = brand;
      this.category = category;
      this.price = price;
      this.currency = currency;
      this.imageUrl = imageUrl;
      this.productUrl = productUrl;
    }
  
    // Method to display the product info
    displayInfo(): string {
      return `${this.name} - ${this.brand} (${this.category})\nPrice: ${this.currency} ${this.price.toFixed(2)}\nMore info: ${this.productUrl}`;
    }
  
    // Optional: Add additional methods like formatting price, etc.
    formatPrice(): string {
      return `${this.currency} ${this.price.toFixed(2)}`;
    }
  }

export default Product;
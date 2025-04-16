import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from "../components/ProductCard";
import Product from '../types/product';

function Collection() {
    const products: Product[] = [
        new Product(
          "8042553868388", 
          "45690452672612", 
          "Custom Faroe Islands Football Polo Shirt Go Champion Blue Version LT18", 
          "Wonder Print Shop", 
          "Polo Shirt", 
          39.99, 
          "$", 
          "//www.wonderprintshop.com/cdn/shop/files/lt18-11042503_polo-shirt-1_1200x.jpg?v=1744436617", 
          "/products/custom-faroe-islands-football-polo-shirt-go-champion-blue-version-1"
        ),
        new Product(
          "8042553868389", 
          "45690452672613", 
          "Custom Faroe Islands Football Polo Shirt Go Champion Red Version LT19", 
          "Wonder Print Shop", 
          "Polo Shirt", 
          42.99, 
          "$", 
          "//www.wonderprintshop.com/cdn/shop/files/lt18-11042503_polo-shirt-1_1200x.jpg?v=1744436617", 
          "/products/custom-faroe-islands-football-polo-shirt-go-champion-red-version-1"
        ),
        new Product(
          "8042553868390", 
          "45690452672614", 
          "Custom Faroe Islands Football Polo Shirt Go Champion Green Version LT20", 
          "Wonder Print Shop", 
          "Polo Shirt", 
          45.99, 
          "$", 
          "//www.wonderprintshop.com/cdn/shop/files/lt18-11042503_polo-shirt-1_1200x.jpg?v=1744436617", 
          "/products/custom-faroe-islands-football-polo-shirt-go-champion-green-version-1"
        ),
        new Product(
          "8042553868391", 
          "45690452672615", 
          "Custom Faroe Islands Football Polo Shirt Go Champion Yellow Version LT21", 
          "Wonder Print Shop", 
          "Polo Shirt", 
          48.99, 
          "$", 
          "//www.wonderprintshop.com/cdn/shop/files/lt18-11042503_polo-shirt-1_1200x.jpg?v=1744436617", 
          "/products/custom-faroe-islands-football-polo-shirt-go-champion-yellow-version-1"
        ),
      ];

    return ( <>
    <Container>
      <Row>
      {products.map((product) => (
          <Col xs={6} md={4} lg={3} key={product.itemId} className='product-card-title'>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>

    </>
    );
  }
    
  export default Collection;
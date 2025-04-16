import { Card } from 'react-bootstrap';
import Product from '../types/product';
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product; // Định nghĩa props là một object kiểu Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={product.productUrl} className="product-card-link">
        <Card className="product-card">
      {/* Sử dụng ảnh sản phẩm từ product */}
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body style={{ padding: '4px'}}>
        <Card.Title className='product-card-title'>{product.name}</Card.Title>
        <Card.Text style={{ textAlign: 'left', fontWeight: 'bold', paddingBottom: '4px', fontSize: '14px', marginBottom: '0px' }}>
          {product.formatPrice()}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    
  );
}

export default ProductCard;

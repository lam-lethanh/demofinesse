import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface CulturalCategory {
    imageUrl: string;
    collectionUrl: string;
  }
  
  interface CategoryProps {
    categories: CulturalCategory[];
  }
  
  function CulturalCategory({ categories }: CategoryProps) {
    return (
      <>
      <div className="row py-3">
        {categories.map((category, index) => (
          <Link to={category.collectionUrl} className="product-card-link product-card-link col-12 col-md-4 py-2" key={index}>
            <Card className="product-card">
              <Card.Img variant="top" src={category.imageUrl} className="rounded-bottom"/>
              <Card.Body style={{ padding: '4px', textAlign: 'center'}} className="py-2">
                <button type="button" className="btn btn-outline-secondary btn-lg">SHOP NOW</button>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
        
      </>
    );
  }
  
  export default CulturalCategory;
  
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Product {
    productImg: string;
    productPrice: number;
    priceCurrency: string;
    productUrl: string;
    productName: string;
  }
  
interface GalleryProductProps {
    products: Product[];
    info: GalleryInfo;
  }

interface GalleryInfo {
    title: String;
    subtitle: String;
    description: String;
  }

function GalleryProduct({ products, info }: GalleryProductProps) {
    return (
      <div className="row py-3">
        <Link to={"#"} className=" col-lg-3 md-12 " >
            <Card className="product-card h-100 ">
              <Card.Body style={{ padding: '4px' }} className="row align-items-center">
                <div className="col text-center">
                    <div className='h2'>{info.title}</div>
                    <Card.Text style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>
                    {info.title}
                    </Card.Text>
                </div>
                
              </Card.Body>
            </Card>
          </Link>
        {products.map((product, index) => (
          <Link to={product.productUrl} className="product-card-link col-6 col-md-4 col-lg-3 mb-4" key={index}>
            <Card className="product-card position-relative rounded-4" >
              <Card.Img variant="top" src={product.productImg} className="rounded-4" style={{height: "300px", objectFit: "cover"}} />
                <Card.Text style={{ textAlign: 'left', fontWeight: 'bold', backgroundColor:"White", paddingBottom:"4px", fontSize: '14px', position: 'absolute', bottom: '8px', left: '8px', padding: '4px', borderRadius: "8px" }}>
                  {product.priceCurrency} {product.productPrice.toLocaleString()}
                </Card.Text>
            </Card>
          </Link>
        ))}
        <Card className="product-card col-6 col-md-4 col-lg-3 mb-4 d-lg-block d-none">
            <Card.Body style={{ padding: '4px', cursor: 'default'}}>
                <Card.Text style={{ textAlign: 'justify', paddingBottom: '4px', fontSize: '15px' }} dangerouslySetInnerHTML={{ __html: info.description }}>
                </Card.Text>
            </Card.Body>
        </Card>

      </div>
    );
  }

export default GalleryProduct;

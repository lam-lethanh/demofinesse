import { useState } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';

type Review = {
  name: string;
  avatar: string;
  content: string;
  rating: number;
};

const reviews: Review[] = [
  {
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/100?img=1',
    content: 'The hoodie quality is amazing! Highly recommend.',
    rating: 5,
  },
  {
    name: 'Emily Tran',
    avatar: 'https://i.pravatar.cc/100?img=2',
    content: 'Fast delivery and great customer service.',
    rating: 4,
  },
  {
    name: 'Liam Nguyen',
    avatar: 'https://i.pravatar.cc/100?img=3',
    content: 'Loved the print, will definitely buy again.',
    rating: 5,
  },
];

export default function CustomerReviewCarousel() {
  const [loaded, setLoaded] = useState<number[]>([0]);

  const handleSlide = (index: number) => {
    if (!loaded.includes(index)) {
      setLoaded(prev => [...prev, index]);
    }
  };

  return (
    <div className="container py-5">
      <h3 className="text-center mb-4">What Our Customers Say</h3>
      <Carousel onSlide={handleSlide} data-bs-theme="dark">
        {reviews.map((review, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex flex-column align-items-center text-center px-4" style={{ minHeight: 300 }}>
              {!loaded.includes(idx) ? (
                <Spinner animation="border" variant="secondary" />
              ) : (
                <>
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="rounded-circle mb-3"
                    width={80}
                    height={80}
                  />
                  <h5>{review.name}</h5>
                  <p className="text-muted">{review.content}</p>
                  <div className="text-warning">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                </>
              )}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

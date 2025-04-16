import { Link } from "react-router-dom";
import CarouselComponent from "../components/Carousel";
import HomeCategory from "../components/HomeCategory";
import GalleryProduct from "../components/GalleryProduct";
import CulturalCategory from "../components/CulturalCategory";
import CustomerReviewCarousel from "../components/HomeCustomerReview";
import { motion } from "framer-motion";



function Homepage () {
  const slidesData = [
    {
      image: "https://gachoiletuan.com/imgs/slide1.jpg",
      caption: "First slide label",
      description: "Some description for the first slide."
    },
    {
      image: "https://gachoiletuan.com/imgs/slide2.jpg",
      caption: "Second slide label",
      description: "Some description for the second slide."
    },
    {
      image: "https://gachoiletuan.com/imgs/slide3.jpg",
      caption: "Third slide label",
      description: "Some description for the third slide."
    }
  ];
  const galleryProducts1 = [
    {
      productImg: "//www.wonderprintshop.com/cdn/shop/files/gif_male_3_1200x.jpg?v=1738551077",
      productPrice: 64.99,
      priceCurrency: "$",
      productUrl: "/product/polo-basic-black",
      productName: "Polo Basic Black",
    },
    {
      productImg: "//www.wonderprintshop.com/cdn/shop/files/gif_male_3_1200x.jpg?v=1738551077",
      productPrice: 59.99,
      priceCurrency: "$",
      productUrl: "/product/polo-slim-fit-white",
      productName: "Polo Slim Fit White",
    },
    {
      productImg: "//www.wonderprintshop.com/cdn/shop/files/gif_male_3_1200x.jpg?v=1738551077",
      productPrice: 54.99,
      priceCurrency: "$",
      productUrl: "/product/polo-sport-navy",
      productName: "Polo Sport Navy",
    },
    {
      productImg: "//www.wonderprintshop.com/cdn/shop/files/gif_male_3_1200x.jpg?v=1738551077",
      productPrice: 54.99,
      priceCurrency: "$",
      productUrl: "/product/polo-striped-grey",
      productName: "Polo Striped Grey",
    },
    {
      productImg: "//www.wonderprintshop.com/cdn/shop/files/gif_male_3_1200x.jpg?v=1738551077",
      productPrice: 69.99,
      priceCurrency: "$",
      productUrl: "/product/polo-casual-green",
      productName: "Polo Casual Green",
    },
    {
      productImg: "//www.wonderprintshop.com/cdn/shop/files/gif_male_3_1200x.jpg?v=1738551077",
      productPrice: 64.99,
      priceCurrency: "$",
      productUrl: "/product/polo-classic-red",
      productName: "Polo Classic Red",
    },
  ];
  const galleryInfo = {
    title: "Hoodie Collection 2025",
    subtitle: "Find unique and stylish hoodies ➡",   
    description: `<i>Stay warm, look cool — our exclusive <b>hoodie</b> collection has you covered.</i> <br /><br />
                  Whether you're braving chilly game nights, hanging with friends, or repping your team around town, 
                  these hoodies are made for <b>comfort</b>, <b>style</b>, and serious <b>team pride</b>.`

  }
  const CulturalCategories = [
    {
      imageUrl: "https://www.wonderprintshop.com/cdn/shop/files/african_400x.jpg?v=1683550526",
      collectionUrl: "/collections/african-culture"
    },
    {
      imageUrl: "https://www.wonderprintshop.com/cdn/shop/files/african_400x.jpg?v=1683550526",
      collectionUrl: "/collections/traditional-wear"
    },
    {
      imageUrl: "https://www.wonderprintshop.com/cdn/shop/files/african_400x.jpg?v=1683550526",
      collectionUrl: "/collections/cultural-icons"
    }
  ];
    
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <CarouselComponent slides={slidesData} />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <HomeCategory/>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <Link to="/pages/find-your-country">
          <img src="/img/FinessePrint_FindYourCountry.png" alt="FindYourCountry" className="w-100 h-100 rounded-4 home-find-country" />
        </Link>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <GalleryProduct products={galleryProducts1} info={galleryInfo}/>
      </motion.div>

      <motion.div className="title text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <span> CULTURAL PRIDE </span>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <CulturalCategory categories={CulturalCategories}/>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <GalleryProduct products={galleryProducts1} info={galleryInfo}/>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <CustomerReviewCarousel/>
      </motion.div>
    </>
  )
}
export default Homepage


 
import { Link } from "react-router-dom";

function HomeCategory () {
    const categories = [
        { label: "HOODIE", img: "src/assets/Cate_Hoodie.png", url: "/collections/hoodie" },
        { label: "POLO SHIRT", img: "src/assets/Cate_Polo.png", url: "/collections/polo-shirt" },
        { label: "T-SHIRT", img: "src/assets/Cate_TShirt.png", url: "/collections/t-shirt" },
        { label: "HAWAIIAN SHIRT", img: "src/assets/Cate_Hawaiian_Shirt.png", url: "/collections/hawaiian-shirt" },
        { label: "JERSEY", img: "src/assets/Cate_Jersey.png", url: "/collections/jersey" },
        { label: "HOCKEY JERSEY", img: "src/assets/Cate_Hockey_Jersey.png", url: "/collections/hockey-jersey" },
        { label: "LONG SLEEVE BUTTON", img: "src/assets/Cate_Long_Sleeve_Button.png", url: "/collections/long-sleeve-button" },
        { label: "SKIRT", img: "src/assets/Cate_Skirt.png", url: "/collections/skirt" },
        { label: "SHOES", img: "src/assets/Cate_Shoes.png", url: "/collections/shoes" },
        { label: "BEDDING SET", img: "src/assets/Cate_Bedding_Set.png", url: "/collections/bedding-set" },
        { label: "LUGGAGE COVER", img: "src/assets/Cate_Luggage_Cover.png", url: "/collections/luggage-cover" },
        { label: "TUMBLER", img: "src/assets/Cate_Tumbler.png", url: "/collections/tumbler" }
      ];
      

    return (
        <>
        <div className="container py-4">
        <div className="title text-center mt-4"> <span> SHOP BY CATEGORY </span> </div>
            <div className="row">
                {categories.map((cat, i) => (
                <div key={i} className="col-6 col-md-4 col-lg-3 mb-4 " >
                    <Link to={cat.url} className={`p-2 text-center rounded `}>
                    <img
                        src={cat.img}
                        alt={cat.label}
                        className="img-fluid rounded-4 home-cate"
                    />
                    </Link>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default HomeCategory
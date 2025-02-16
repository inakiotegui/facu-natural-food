import pic1 from "../../../assets/food/gallery1.png"
import pic2 from "../../../assets/food/gallery2.png"
import pic3 from "../../../assets/food/gallery3.png"
import pic4 from "../../../assets/food/gallery4.png"
import "./ProductsGallery.css";

import ProductDisplay from "../ProductDisplay";

const products = [
    {
        title: "VEGGIE BURGER",
        image: pic1,
        titleColor: "#7a8358",
        subtitleColor: "#85903f",
        backgroundColor: "#e0e0a9",
        description: [
            { value: "336 kcal", name: "Energy value" },
            { value: "61.3%", name: "Carbohydrates" },
            { value: "16.3%", name: "Protein" },
            { value: "4.9%", name: "Total fat" },
            { value: "0.6", name: "Satured fat" },
            { value: "13.3%", name: "Dietary fiber" },
            { value: "22.2", name: "Sodium (mg)" },
            { value: "66.2", name: "Cholesterol (mg)" }
        ],
        textColor: "#4c5933",
    },
    {
        title: "HUMMUS",
        image: pic2,
        titleColor: "#a77b21",
        subtitleColor: "#d3a52f",
        backgroundColor: "#fcd681",
        description: [
            { value: "364 kcal", name: "Energy value" },
            { value: "38-45%", name: "Carbohydrates" },
            { value: "19-21%", name: "Protein" },
            { value: "25%", name: "Total fat" },
            { value: "15%", name: "Satured fat" },
            { value: "9%", name: "Dietary fiber" },
            { value: "11.7%", name: "Sodium" }
        ],
        textColor: "#8c6217",
    },
    {
        title: "FRIED PEAS",
        image: pic3,
        titleColor: "#265553",
        subtitleColor: "#508f8a",
        backgroundColor: "#addbd7",
        description: [
            { value: "336 kcal", name: "Energy value" },
            { value: "61.3%", name: "Carbohydrates" },
            { value: "16.3%", name: "Protein" },
            { value: "4.9%", name: "Total fat" },
            { value: "0.6%", name: "Satured fat" },
            { value: "13.3%", name: "Dietary fiber" },
            { value: "22.2", name: "Sodium (mg)" },
            { value: "66.2", name: "Cholesterol (mg)" }
        ],
        textColor: "#265553",
    },
    {
        title: "FALAFEL",
        image: pic4,
        titleColor: "#762022",
        subtitleColor: "#af7d6b",
        backgroundColor: "#cea89d",
        description: [
            { value: "364 kcal", name: "Energy value" },
            { value: "58-62%", name: "Carbohydrates" },
            { value: "19-21%", name: "Protein" },
            { value: "6%", name: "Total fat" },
            { value: "16%", name: "Satured fat" },
            { value: "9%", name: "Dietary fiber" },
            { value: "1.1%", name: "Sodium" }
        ],
        textColor: "#762022",
    },
];

const ProductsGallery = () => {
    return (
        <div className="products-gallery">
            {products.map((product, index) => (
                <ProductDisplay key={index} {...product} />
            ))}
        </div>
    );
};

export default ProductsGallery;
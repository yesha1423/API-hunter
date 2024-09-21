import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProductPage = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState({}); 
  const [loading, setLoading] = useState(true); 
  const fetchProduct = () => {
    axios
      .get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
      .then((response) => {
        console.log(response.data.data)
        setProduct(response.data.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Failed to fetch product:", error); 
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []); 


  return (
    <div className="product-container">
      <h1 data-testid="product-brand">{product.brand}</h1>
      <img
        data-testid="product-image"
        src={product.img}
        alt={product.brand}
      />
      <p data-testid="product-category" className="product-category">
        Category: {product.category}
      </p>
      <p data-testid="product-price" className="product-price">
        Price: {product.price}
      </p>
      <p data-testid="product-details" className="product-details">
        {product.details}
      </p>
    </div>
  );
};

export default SingleProductPage;

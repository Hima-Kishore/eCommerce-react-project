import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from "../../components/Header.jsx";
import { ProductsGrid } from './ProductsGrid.jsx';
import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadHomePage = async () => {
      try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    }  catch (error) {
      console.error("Error loading products:", error);
    }};
    loadHomePage();
  }, []);
  

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart}/>

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}

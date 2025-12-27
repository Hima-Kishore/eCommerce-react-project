import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from "../../components/Header.jsx";
import { formatMoney } from '../../utils/money.js';
import { ProductsGrid } from './ProductsGrid.jsx';
import "./HomePage.css";

export function HomePage({ cart }) {
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
        <ProductsGrid products={products} formatMoney={formatMoney}/>
      </div>
    </>
  );
}

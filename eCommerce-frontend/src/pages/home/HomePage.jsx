import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from "../../components/Header.jsx";
import { formatMoney } from '../../utils/money.js';
import { ProductsGrid } from './productsGrid.jsx';
import "./HomePage.css";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then((response)=>{
        setProducts(response.data);
      });
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

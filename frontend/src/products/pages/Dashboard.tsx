import React from "react";
import styled from "styled-components";
import { ProductInterface } from "../interfaces/Product";
import fetchProducts from "../core/fetchProducts";

const ProductsContainer = styled.div`
    padding: 20px;
    background-color: rgba(10,10,10,0.2);
`;

const Dashboard = () => {
  const [products, setProducts] = React.useState<
    Array<ProductInterface>
  >([]);

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const products: Array<ProductInterface> = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductsContainer>
      {products && products.length > 0
        ? <ul>
          {products.map((product) => (<li>
            {product.id}
            {product.description}
          </li>))}
        </ul>
        : <div>
          There are no products
        </div>}
    </ProductsContainer>
  );
};

export default Dashboard;

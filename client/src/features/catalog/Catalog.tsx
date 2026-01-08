import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import Spinner from "../../app/layout/Spinner";
import type { Product } from "../../app/models/products";
import ProductList from "./ProductList";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Store.list()
      .then((products) => setProducts(products.content))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  if (!products) return <h3>Unable to load Products</h3>;
  if (loading) return <Spinner message="Loading Products..."></Spinner>;
  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
};

export default Catalog;

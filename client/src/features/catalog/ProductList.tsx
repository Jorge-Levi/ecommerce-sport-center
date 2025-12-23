import { Grid } from "@mui/material";
import type { Product } from "../../app/models/products";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => {
        <ProductCard product={product}></ProductCard>;
      })}
    </Grid>
  );
};

export default ProductList;

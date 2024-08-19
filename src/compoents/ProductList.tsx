import { productType } from "../callShopAPI";
import { ProductDetails } from "./ProductDetails";

interface IProps {
  allProducts: productType[];
  addToBasket: (product: productType) => void;
}

export const ProductList = ({ allProducts, addToBasket }: IProps) => {
  return (
    <div>
      {allProducts?.map((product, index) => (
        <ProductDetails
          key={index}
          product={product}
          addToBasket={addToBasket}
        />
      ))}
    </div>
  );
};

import { productType } from "../callShopAPI";
import { ProductDetails } from "./ProductDetails";

interface IProps {
  productsInBasket: productType[];
}

export const ProductBasket = ({ productsInBasket }: IProps) => {
  return (
    <div>
      BASKET
      {productsInBasket?.map((product, index) => (
        <ProductDetails key={index} product={product} />
      ))}
    </div>
  );
};

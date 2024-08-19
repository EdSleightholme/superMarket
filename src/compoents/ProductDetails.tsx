import { productType } from "../callShopAPI";

interface IProps {
  product: productType;
  addToBasket?: (product: productType) => void;
}

export const ProductDetails = ({ product, addToBasket }: IProps) => {
  return (
    <div className="flex flex-col p-2">
      <div>
        {product.name} ${product.price}
      </div>
      <div>
        {product.description}{" "}
        {addToBasket && (
          <button onClick={() => addToBasket(product)}>Add to Basket</button>
        )}
      </div>
    </div>
  );
};

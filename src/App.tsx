import { useEffect, useState } from "react";
import { callShopApi, productType } from "./callShopAPI";
import { Header } from "./compoents/Header";
import { ProductList } from "./compoents/ProductList";
import { ProductBasket } from "./compoents/Basket";

function App() {
  const [allProducts, setAllProducts] = useState<productType[]>([]);
  const [displayBasket, setDisplayBasket] = useState(false);
  const [basket, setBasket] = useState<productType[]>([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchAllCats();
  }, []);
  const fetchAllCats = async () => {
    setLoading(true);
    const fetchedProducts = await callShopApi().catch((error) =>
      console.log(error)
    );
    setAllProducts(fetchedProducts);
    setLoading(false);
  };

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <Header
        setDisplayBasket={setDisplayBasket}
        displayBasket={displayBasket}
      />
      {displayBasket ? (
        <ProductBasket productsInBasket={basket} />
      ) : allProducts.length === 0 ? (
        <div>Could not load products</div>
      ) : (
        <ProductList
          addToBasket={(product) =>
            setBasket((basket) => {
              const newBasket = [...basket];
              newBasket.push(product);
              return newBasket;
            })
          }
          allProducts={allProducts}
        />
      )}
    </div>
  );
}

export default App;

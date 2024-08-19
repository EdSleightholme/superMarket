export interface productType {
  description: string;
  id: number;
  name: string;
  price: number;
}
export const callShopApi = async () => {
  const productData = await fetch(
    "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json"
  );

  const productDataJSON = await productData.json();
  // const catsData: catType[] = catsJSON.data;
  return productDataJSON;
};

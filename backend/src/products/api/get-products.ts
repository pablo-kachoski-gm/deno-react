import { Context, log } from "../../deps.ts";
import { Product } from "../interfaces/entity.ts";

const getProducts = (ctx: Context<Record<string, any>>) => {
  const products: Array<Product> = [
    {
      id: 1,
      name: "product1",
      description: "This is a product description for id 1",
      stock: 10,
    },
    {
      id: 2,
      name: "product2",
      description: "This is a product description for id 2",
      stock: 20,
    },
    {
      id: 3,
      name: "product3",
      description: "This is a product description for id 3",
      stock: 30,
    },
  ];
  ctx.response.body = products;
  log.info(`getProducts: ${JSON.stringify(products)}`);
};

export default getProducts;

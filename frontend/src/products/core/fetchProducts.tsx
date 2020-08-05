import FetchAPI from "../../commons/core/fetchAPI";
import APIMethods from "../../commons/types/APIMethods";
const fetchProducts = async () => {
  return await FetchAPI({ endpoint: "/products", method: APIMethods.GET });
};
export default fetchProducts;

import FetchAPI from "../../commons/core/fetchAPI";
import APIMethods from "../../commons/types/APIMethods";
const fetchUsers = async () => {
  return await FetchAPI({ endpoint: "/users", method: APIMethods.GET });
};
export default fetchUsers;

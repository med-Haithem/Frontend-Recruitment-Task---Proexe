import { I_USER } from "../../../types/user";

class UserService {
  baseApi =
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

  getAllUsers = async () => {
    const response = await fetch(this.baseApi);
    if (!response.ok) return Promise.reject();
    const users: I_USER[] = await response.json();
    return users;
  };
}

export default new UserService();

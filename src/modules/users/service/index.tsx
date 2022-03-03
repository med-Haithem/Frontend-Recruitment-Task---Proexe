import { I_USER } from "../../../types/user";

class UserService {
  baseApi =
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderd/data";

  getAllUsers = () => {
    return new Promise<I_USER[]>((resolve, reject) =>
      fetch(this.baseApi)
        .then((res) => {
          if (!res.ok) return reject();
          return res
            .json()
            .then((response: I_USER[]) => {
              resolve(response);
            })
            .catch((err) => reject());
        })
        .catch((err) => reject())
    );
  };
}
export default new UserService();

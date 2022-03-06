import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { addNewUser } from "../..";
import { useAppDispatch } from "../../../../common";
import { UserForm } from "../form";

export const UsersAdd = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (values: any) => {
    dispatch(addNewUser(values));
    notification.open({
      message: "User added successfully",
      type: "success",
    });
    navigate("/users");
  };

  return <UserForm formSubmit={handleSubmit} title={`Add new User`} />;
};

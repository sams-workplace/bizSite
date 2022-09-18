import MyButton from "./MyButton";

import { useNavigate } from "react-router-dom";

const UserGroupChange = ({
  titleText1,
  titleText2,
  nav1,
  nav2,
  userGroupType,
}) => {
  const navigate = useNavigate();

  return (
    <div className="user_group_change">
      <MyButton text={titleText1} onClick={() => navigate(nav1)} />
      <MyButton text={titleText2} onClick={() => navigate(nav2)} />

      {userGroupType === "Member" && (
        <MyButton text={"신규가입"} onClick={() => navigate("/CreateMember")} />
      )}
      {userGroupType === "Biz" && (
        <MyButton text={"신규가입"} onClick={() => navigate("/CreateBiz")} />
      )}
      {userGroupType === "Admin" && (
        <MyButton text={"신규가입"} onClick={() => navigate("/CreateAdmin")} />
      )}
    </div>
  );
};

export default UserGroupChange;

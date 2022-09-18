import { useNavigate } from "react-router-dom";

import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";
import UserInfoEdit from "../../components/UserInfoEdit";

const CreateMember = () => {
  const navigate = useNavigate();

  return (
    <div className="create_biz-wrapper">
      <MyHeader
        headText={"신규사업장등록"}
        leftChild={<MyButton text={"뒤로가기"} onClick={() => navigate(-1)} />}
      />
      <UserInfoEdit userGroupType={"Biz"} />
    </div>
  );
};

export default CreateMember;

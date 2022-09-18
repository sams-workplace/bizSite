import { useNavigate } from "react-router-dom";

import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";
import UserInfoEdit from "../../components/UserInfoEdit";

const CreateMember = () => {
  const navigate = useNavigate();

  return (
    <div className="create_member-wrapper">
      <MyHeader
        headText={"신규회원등록"}
        leftChild={<MyButton text={"뒤로가기"} onClick={() => navigate(-1)} />}
      />
      <UserInfoEdit userGroupType={'Member'}/>
    </div>
  );
};

export default CreateMember;

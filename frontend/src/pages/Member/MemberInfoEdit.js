// 회원 정보 수정 페이지
import MyButton from "../../components/MyButton";
import MyHeader from "../../components/MyHeader";
import UserInfoEdit from "../../components/UserInfoEdit";

import { useLocation, useNavigate } from "react-router-dom";

const MemberInfoEdit = () => {
  const navigate = useNavigate();

  return (
    <div className="member_info_edit_wrapper">
      <MyHeader
        headText={<b>회원정보수정</b>}
        leftChild={<MyButton text={"뒤로가기"} onClick={() => navigate(-1)} />}
      />
      <UserInfoEdit actionType={"edit"} userGroupType={"Member"} />
    </div>
  );
};

export default MemberInfoEdit;

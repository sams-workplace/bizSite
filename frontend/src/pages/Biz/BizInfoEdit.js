// 사업장 정보 수정 페이지
import MyButton from "../../components/MyButton";
import MyHeader from "../../components/MyHeader";
import UserInfoEdit from "../../components/UserInfoEdit";

import { useLocation, useNavigate } from "react-router-dom";

const BizInfoEdit = () => {
  const navigate = useNavigate();

  return (
    <div className="member_info_edit_wrapper">
      <MyHeader
        headText={<b>사업장정보수정</b>}
        leftChild={<MyButton text={"뒤로가기"} onClick={() => navigate(-1)} />}
      />
      <UserInfoEdit actionType={"edit"} userGroupType={"Biz"} />
    </div>
  );
};

export default BizInfoEdit;

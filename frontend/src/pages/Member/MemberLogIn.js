import LogInInput from "../../components/LogInInput";
import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";

import { useNavigate } from "react-router-dom";

const MemberLogIn = () => {
  const navigate = useNavigate();

  return (
    <div className="login_wrapper">
      <MyHeader
        headText={<b>Screen Golf Reverse Bidding</b>}
        leftChild={<MyButton text={"뒤로가기"} onClick={() => navigate(-1)} />}
      />
      <LogInInput titleText={"사용자로그인"} typeOfLogIn={"Member"} />
    </div>
  );
};

export default MemberLogIn;

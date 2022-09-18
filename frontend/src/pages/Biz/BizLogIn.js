import LogInInput from "../../components/LogInInput"
import MyHeader from "../../components/MyHeader"
import MyButton from "../../components/MyButton";

import { useNavigate } from "react-router-dom";

const BizLogIn = () => {

  const navigate = useNavigate();

  return (

    <div className="login_wrapper">

      <MyHeader
        headText ={<b>Screen Golf Reverse Bidding</b>}
        leftChild = { <MyButton text= {"뒤로가기"} onClick ={() => navigate(-1)}/>}
      />
      <LogInInput
        titleText = {"사업장로그인"}
        typeOfLogIn = {"Biz"}
      />

    </div>

  )
}

export default BizLogIn;
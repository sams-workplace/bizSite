import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useLocation, useNavigate } from "react-router-dom";
import MyBizList from "../components/MyBizList";

const BizList = () => {

  const navigate = useNavigate();

  const bizList = useLocation().state;

  console.log("bizList : ", bizList);

  return (
    <div>
      <MyHeader
        headText={"비딩사업장리스트 보기"}
        leftChild = { <MyButton text= {"뒤로가기"} onClick ={() => navigate(-1)}/>}
      />
      <MyBizList bizlist={bizList}/>

    </div>

  )
};

export default BizList;
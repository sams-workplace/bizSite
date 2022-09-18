import { useLocation, useNavigate } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";


const Pay = () => {

  const bizInfo = useLocation().state;

  const navigate = useNavigate();

  // const status = 'SUC';

  return (
    <div className="pay">
      <MyHeader
      headText ={"결제하기"}
      leftChild = { <MyButton text= {"뒤로가기"} onClick ={() => navigate(-1)}/>}
      />
      <div className="biz_info_wrapper">

        <div className="biz_info_title">
          <h2 className="title">예약 내용</h2>
        </div>

        {/* 예약 사업장명 */}
        <div className="biz_info">
            <h4 className="biz_info_label">예약 사업장명 : &nbsp;</h4>
            <p className="biz_info_content">{bizInfo.bizName}</p>
        </div>

        {/* 예약 날짜와 시간 */}
        <div className="biz_info">
            <h4 className="biz_info_label">예약 날짜/시간 : &nbsp;</h4>
            <p className="biz_info_content">{new Date(bizInfo.reservedDate).toLocaleString([], { year: "numeric", month: "numeric", day: "numeric", hour: '2-digit', minute:'2-digit'})}</p>
        </div>

        {/* 금액 */}
        <div className="biz_info">
          <h4 className="biz_info_label">요금 : &nbsp;</h4>
          <p className="biz_info_content">{bizInfo.totalPrice.toLocaleString('ko-KR')}원</p>
        </div>

        {/* 인원 */}
        <div className="biz_info">
          <h4 className="biz_info_label">인원 : &nbsp;</h4>
          <p className="biz_info_content">{bizInfo.numberOfPeople}명</p>
        </div>

        {/* 추가혜택 */}
        <div className="biz_info">
          <h4 className="biz_info_label">추가혜택 : &nbsp;</h4>
          <p className="biz_info_content">{bizInfo.additionalBenefit}</p>
        </div>
      </div>

      <div className="btn_pay_wrapper">
        <MyButton
          text={bizInfo.totalPrice.toLocaleString('ko-KR') +"원 결제하기"}
          type={'negative'}
           onClick = {()=>navigate('/paymentnoti')}
          // onClick={()=> navigate("/paymentnoti", {state: status})}
        />
      </div>

    </div>
  )
}

export default Pay;
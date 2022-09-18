import MyMessage from "../components/MyMessage";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useLocation, useNavigate } from "react-router-dom";

// 결제 성공, 실패에 따라 다른 메세지 내용을 보여주게 한다.
const PaymentNoti = () => {

   const headText = '결제 성공';
   const navigate = useNavigate();

   const status = useLocation().state;

  return (

    <div className="PaymentNoti">
      <div>
        <MyHeader
          headText={headText}
          // leftChild = { <MyButton text= {"흠으로"} onClick ={() => navigate(-1)}/>}
        />
       {/* Message 내용 */}
       <div className="mymessage_content_wrapper">
        <MyMessage
            messageTitle = {'결제가 성공하였습니다.'}
            messageContent = {'스크린 골프 예약 결제가 완료되었습니다. 이용해 주셔서 감사합니다.'}
            status = {status}
          />
        </div>
      </div>
      {/* Home으로 이동 버튼 */}
      <div className="btn_paymentnoti">
        <MyButton
            text={"Home으로 이동하기"}
            type={'positive'}
            onClick = {() => navigate('/Home')}
          />
      </div>
    </div>

  )
};

export default PaymentNoti;
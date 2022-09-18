import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useLocation, useNavigate } from "react-router-dom";

const BizItem = ({id, bizName, totalPrice, reservedDate, additionalBenefits, numberOfPeople}) => {

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL ||"";

  const strDate = new Date(parseInt(reservedDate)).toLocaleString([], { year: "numeric", month: "numeric", day: "numeric", hour: '2-digit', minute:'2-digit'});

  const navigate = useNavigate();

  const data = useLocation().state;

  console.log(data);

  //결제 페이지로 이동 시 선택한 사업장의 정보를 넘겨준다.
  const selectBiz = () => {

    // const bizInfo = {
    //   id: 1,
    //   bizName: '1st 골프존',
    //   totalPrice: 40000,
    //   reservedDate: 1660049116772,
    //   additionalBenefits: '주차 가능, 음료 무한 리필',
    //   numberOfPeople: 4,
    // };

    const bizInfo = data.find((it) => parseInt(it.id) === parseInt(id));

    navigate('/Pay',{state: bizInfo});

  };

  return (
    <div className="BizItem">
      <div className="biz_snoopy_logo_wrapper">
        <img src={process.env.PUBLIC_URL + `/snoopy_logo.png`} />
      </div>
      <div className="info_wrapper">
        <div className="reservation_date">
          사업장명: {bizName}
        </div>
        <div className="reservation_content_review">
          <div className="reservation_biz_name_wrapper">
            요금: {totalPrice}
          </div>
          <div className="reservation_number_of_people_preview">
            예약 가능 시간: {strDate}
          </div>
          <div className="reservation_additional_request_wrapper">
            추가 혜택: {additionalBenefits.slice(0,35) + '...'}
          </div>
        </div>
      </div>

      <div className="btn_wrapper">
        <MyButton
          text={"영업장선택하기"}
          // 버튼 클릭 시 해당 row의 정보를 가지고 계산 페이지로 이동
          onClick = {selectBiz}
        />
      </div>

    </div>
  )
};

export default BizItem;
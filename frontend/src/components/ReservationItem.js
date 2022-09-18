import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";


const ReservationItem = ({id, status, numberOfPeople, createdDate, additionalRequest, bizName}) => {

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL ||"";

  const strDate = new Date(parseInt(createdDate)).toLocaleString();

  const navigate = useNavigate();

  //예약 목록 확인하기에서 이미지나 상세 내용 클릭 시 reservation 상세로 이동
  const goReservationDetail = () => {
    navigate(`/reservationlist/${id}`);
  }



  const getBizList = () => {
    //1. 사업장리스트 가져오는 로직 추가 필요. 일단 더미 데이터....
    const dummyBizData = [
      {
        id: 1,
        reservationId: 4567898,
        bizName: '1st 골프존',
        totalPrice: 40000,
        reservedDate: 1660001577055,
        additionalBenefits: "주차 가능"

      },
      {
        id: 2,
        reservationId: 4567898,
        bizName: '2st 골프존',
        totalPrice: 45000,
        reservedDate: 1660001677055,
        additionalBenefits: "주차 가능, 음료 제공"
      }
    ];

    const reservationId = dummyBizData[0].reservationId;

    //2. 사업장 리스트 navigate로 전달
    //navigate('/ReservationList',{state: dummyData});
    navigate(`../BizList/${reservationId}`, {state: dummyBizData});

  }

  return(
    <div className="ReservationItem">
      <div className={["status_img_wrapper", `status_img_wrapper_${status}`].join(" ")}>
        <img src={process.env.PUBLIC_URL + `/statusicons/status_${status}.png`} />
      </div>
      <div className="info_wrapper">
        <div className="reservation_date">
          예약 요청 시간: {strDate}
        </div>
        <div className="reservation_content_review">
          <div className="reservation_biz_name_wrapper">
            사업장명: {bizName}
          </div>
          <div className="reservation_number_of_people_preview">
            인원수: {numberOfPeople}
          </div>
          <div className="reservation_additional_request_wrapper">
            추가 요청사항: {additionalRequest.slice(0,35) + '...'}
          </div>
        </div>
      </div>
      {/* PRG 상태인 것만 진행 버튼 보여주기 */}
      {status === 'PRG' &&
        <div className="btn_wrapper">
          <MyButton
            text={"비딩진행하기"}
            // Biz사업장 가져오는 함수 만들기
            onClick = {getBizList}
          />
        </div>
      }
      {status === 'PAY' &&
        <div className="btn_wrapper">
        <MyButton
          text={"정산요청하기"}
          // Biz사업장 가져오는 함수 만들기
          onClick = {getBizList}
        />
      </div>
      }

    </div>
  )
};

export default ReservationItem;

// 8. 경매 정보 페이지/사업장(종료)-
import LogInInput from "../../components/LogInInput";
import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";
import BiddingInfoDetail from "../../components/BiddingInfoDetail";

import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";

function lpad(str, padLen, padStr) {
  str += "";
  padStr += "";
  while (str.length < padLen)
     str = padStr + str;
  str = str.length >= padLen ? str.substring(0, padLen) : str;
  return str;
}

function getTime(){
  var yyyy = new Date().getFullYear();
  var mm = new Date().getMonth()+1;
  var dd = new Date().getDate();
  var hh = new Date().getHours();
  var mi = new Date().getMinutes();
  var ss = new Date().getSeconds();
  var time = yyyy + "-" + lpad(mm,2,"0") + "-" + lpad(dd,2,"0") + " " + lpad(hh,2,"0") + ":" + lpad(mi,2,"0") + ":" + lpad(ss,2,"0") ;

  return time;
}

const BiddingInfo = ({ status }) => {

  const navigate = useNavigate();
  const data = useLocation().state;
  const [gameReservationData, setGameReservationData] = useState([]);
  const [biddingAmount, setBiddingAmount] = useState(""); // 응찰금액
  const handleChangeBiddingAmount = (event) => { setBiddingAmount(event.target.value)};

  useEffect(() => {
    fetch(`/gameReservation/${data}`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            setGameReservationData(res);
        })
        .catch((error) =>{
            console.log(error);
        });
  }, []);

  const attendBidding = () => {

    // private Long id;
    // private String biddingId;
    // private String gameReservationId;
    // private String businessId;        // 사업장ID
    // private String businessName;      // 사업장명
    // private String businessPhoneNum;  // 사업장연락처
    // private String biddingAmount;     // 응찰금액
    // private String biddingStatus;     // 진행상태

    // 추가필드정의(사업장 별도 관리)
    // private String bizSiteReqDttm;    // 경매전송일자
    // private String bizSiteAtendDttm;  // 경매응찰일자
    // private String bizSiteProcDttm;   // 경매결과수신일자

    var time = getTime();

    axios({
       method: 'patch',
       url: `/gameReservation/${data}`,
       data: {
                businessId: `BizUser01`,
                businessName: `사업장01`,
                businessPhoneNum: '010-000-0000',
                biddingAmount: biddingAmount,
                reservationStatus: `PROGRESSED`,
                bizSiteAtendDttm: time,
             }
        }).then(function (response) {

          if (response.data != null) {
              alert(`경매 응찰 하였습니다.`);
          } else {
              alert(`경매 응찰에 실패하였습니다.`);
          }
          console.log(response.data);

        }).catch(function(err) {
          alert(`에러가 발생하였습니다.`);
        });

        navigate(`/biddinginfolist`);
    }

  return (
    <div className="bidding_ info_wrapper">
      <MyHeader
        headText={<b>경매 정보 {data} </b>}
        leftChild={<MyButton text={"뒤로가기"} onClick={() => navigate(-1)} />}
      />
      <div className="bidding_info_body">
      <div className="bidding_info_detail_wrapper">
      <table className="tb_bidding_info_detail_form">
        <tbody>
          <tr>
              <th>게임아이디&nbsp;&nbsp;</th>
              <td>{gameReservationData.gameReservationId}</td>
          </tr>
          <tr>
              <th>진행상태&nbsp;&nbsp;</th>
              {gameReservationData.reservationStatus === "REQUESTED" && (
                  <td>진행중</td>
              )}
              {gameReservationData.reservationStatus === "PROGRESSED" && (
                  <td>응찰</td>
              )}
              {gameReservationData.reservationStatus === "CONFIRMED" && (
                  <td>예약확정</td>
              )}
              {gameReservationData.reservationStatus === "CANCELED" && (
                  <td>취소</td>
              )}
          </tr>
          <tr>
              <th>예약시간&nbsp;&nbsp;</th>
              <td>{gameReservationData.reservationTime}</td>
          </tr>
          <tr>
              <th>인원&nbsp;&nbsp;</th>
              <td>{gameReservationData.memberCount}</td>
          </tr>
          <tr>
              <th>고객요청사항&nbsp;&nbsp;</th>
              <td>{gameReservationData.clientRequest}</td>
          </tr>
          <tr>
              <th>응찰금액</th>
              {gameReservationData.reservationStatus === "REQUESTED" && (
                  <td><input className="input_field" type={"text"} value={biddingAmount} placeholder="응찰금액 입력" onChange={handleChangeBiddingAmount} /></td>
              )}
              {gameReservationData.reservationStatus === "PROGRESSED" && (
                  <td>{gameReservationData.biddingAmount}</td>
              )}
              {gameReservationData.reservationStatus === "CONFIRMED" && (
                   <td>{gameReservationData.biddingAmount}</td>
              )}
              {gameReservationData.reservationStatus === "CANCELED" && (
                  <td>{gameReservationData.biddingAmount}</td>
              )}
          </tr>
          {gameReservationData.reservationStatus === "CONFIRMED" && (
              <tr><th>최종낙찰금액</th> <td>{gameReservationData.paymentAmount}</td></tr>
          )}
          {gameReservationData.reservationStatus === "CANCELED" && (
              <tr><th>최종낙찰금액</th> <td>{gameReservationData.paymentAmount}</td></tr>
          )}
        </tbody>
      </table>
      </div>
      <div className="bid_btn">
          {gameReservationData.reservationStatus === "REQUESTED" && (
              <MyButton className="bid_btn_bid" text={"응찰"} type={"positive"} onClick={() => attendBidding()} />
          )}
          <MyButton className="bid_btn_cancel" text={"목록"} type={"negative"} onClick={() => navigate("/biddinginfolist")} />
      </div>
      </div>
    </div>
  );
};

export default BiddingInfo;

import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const BiddingInfoDetail = ({ status }) => {
  const navigate = useNavigate();

  return (
    <div className="bidding_info_detail_wrapper">
      <table className="tb_bidding_info_detail_form">
        <tbody>
          <tr>
            <th className="form_th">게임아이디</th>
            <td className="form_td">
              <div className="form_info_detail" id="gameId">
                202208160001
              </div>
            </td>
          </tr>
          <tr>
            <th className="form_th">진행상태</th>
            <td className="form_td">
              <div className="form_info_detail" id="status">
                진행중
              </div>
            </td>
          </tr>
          <tr>
            <th className="form_th">예약시간</th>
            <td className="form_td">
              <div className="form_info_detail" id="reservationTime">
                2022-08-16 19:00
              </div>
            </td>
          </tr>
          <tr>
            <th className="form_th">인원</th>
            <td className="form_td" id="numberOfMember">
              <div className="form_info_detail" id="numberOfMember">
                4
              </div>
            </td>
          </tr>
          <tr>
            <th className="form_th">고객요청사항</th>
            <td className="form_td" id="requestOfCustmer">
              <div className="form_info_detail" id="requestOfCustmer">
                하우스 채 2세트 렌탈
              </div>
            </td>
          </tr>
          {status === "end" && (
            <tr>
              <th className="form_th">응찰금액</th>
              <td className="form_td" id="bid_amount">
                <div className="form_info_detail" id="bid_amount">
                  55,000
                </div>
              </td>
            </tr>
          )}
          {status === "end" && (
            <tr>
              <th className="form_th">최종낙찰금액</th>
              <td className="form_td" id="final_bid_amount">
                <div className="form_info_detail" id="final_bid_amount">
                  45,000
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BiddingInfoDetail;

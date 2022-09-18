// 7. 경매 정보 페이지/사업장(진행중)-
import LogInInput from "../../components/LogInInput";
import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";
import BiddingInfoDetail from "../../components/BiddingInfoDetail";

import { useNavigate } from "react-router-dom";

const BiddingInfoEnd = () => {
  const navigate = useNavigate();

  return (
    <div className="bidding_ info_wrapper">
      <MyHeader
        headText={<b>경매 정보(종료)</b>}
        leftChild={<MyButton text={"뒤로가기"} onClick={() => navigate(-1)} />}
      />
      <div className="bidding_info_body">
        <BiddingInfoDetail status={"end"} />
        <div className="bid_btn">
          <MyButton
            className="bid_btn_cancel"
            text={"취소"}
            type={"negative"}
          />
        </div>
      </div>
    </div>
  );
};

export default BiddingInfoEnd;

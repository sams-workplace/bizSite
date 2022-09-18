// 6. 경매 정보 목록(사업장)

import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";
import SearchCondition from "../../components/SearchCondition";
import BiddingBizList from "../../components/BiddingBizList";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import React, {useState, useEffect} from "react";

const BiddingInfoList = () => {
  const navigate = useNavigate();

  //const biddingInfoData = [];
  const  [ biddingInfoData, setBiddingInfoData ] = useState([]);

  useEffect(() => {
    //  axios.get(`/bizSiteMngs`).then(response => {
    //    setBizInfoData(response.data);
    //  });
    //fetchBizInfo();

        fetch('/gameReservation')
            .then((res) => res.json())
            .then((res) => {
                console.log(res);

                //setBizInfoData(bizInfoData);
                setBiddingInfoData(res._embedded.gameReservation);

                // if( biddingInfoData.length > 0 ){
                //   console.log("0 이상 입니다.");
                //   console.log(biddingInfoData.length);

                //   console.log(new Date().getFullYear());
                //   console.log(new Date().getMonth()+1);
                //   console.log(new Date().getDate());
                //   console.log(new Date().toLocaleTimeString());
                // }
            })
            .catch((error) =>{
                console.log(error);
            });
    }, []);

  return (
    <div className="bidding_info_list_wrapper">
      <MyHeader
        headText={<b>경매정보목록</b>}
        leftChild={<MyButton text={"뒤로가기"} onClick={() => navigate(-1)} />}
      />
      <div className="bidding_biz_info_list_body_wrapper">
        <SearchCondition userGrouptype={"Biz"} />
        <BiddingBizList
          userGrouptype={"Biz"}
          BiddingBizInfoData={biddingInfoData}
        />
      </div>
    </div>
  );
};

export default BiddingInfoList;

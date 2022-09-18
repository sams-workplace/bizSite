import { ReservationStateContext } from "../App";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import MyReservationList from "../components/MyReservationList";

const ReservationList = () => {

    const {memberId} = useParams();

    console.log(memberId);

    // reservationList 가공할 데이터셋
    const [data, setData] = useState([]);

    const [curDate, setCurDate] = useState(new Date());

    const reservationList = useLocation().state;

    console.log("reservation List in ReservationList : ", reservationList);


    //const headText = `${curDate.getFullYear()}년 ${curDate.getMonth()+1}월`;
    const headText = "예약 목록 확인하기";



    const [isMenuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    return (
      <div>
        <MyHeader
          headText={headText}
          leftChild = { <MyButton text= {"뒤로가기"} onClick ={() => navigate(-1)}/>}
        />
        {/* my reservation list  */}
        <MyReservationList reservationList={reservationList}/>


      </div>

    );

}

export default ReservationList;
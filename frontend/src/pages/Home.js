import { useContext, useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import MyHeader from './../components/MyHeader';

import MyButton from './../components/MyButton';
import ContentMenuButton from './../components/ContentMenuButton';
import { ReservationStateContext } from "../App";



const Home = () => {

  const navigate = useNavigate();

  // 1. 예약 등록 화면 이동
  const onClickRegistry = () => {
    navigate('/Registry');
  }

  // 2. 예약 목록 화면 이동 - 버튼 클릭 시 데이터를 가져와서 ReservationList에 넘긴다?
  const onClickReservationList = () => {
    // 1) 백엔드에서 데이터 가져오기 - 로직 구현 필요. 일단 더미 데이터로 테스트

    const memberId = 1234321;

    const dummyData = [
      {
        id: 1,
        userId: '12345',
        numberOfPeople: 1,
        location: 1,
        createdDate: 1659921378703,
        bizName:'1st 골프존',
        additionalRequest:'골프장비 필요',
        status: 'CNL',
      },
      {
        id: 2,
        userId: '12345',
        numberOfPeople: 2,
        location: 1,
        createdDate: 1659921478703,
        bizName:'2st 골프존',
        additionalRequest:'골프장비 필요',
        status: 'CFM', //캔슬
      },
      {
        id: 3,
        userId: '12345',
        numberOfPeople: 3,
        location: 1,
        createdDate: 1659921578703,
        bizName:'3st 골프존',
        additionalRequest:'골프장비 필요가 2세트 필요합니다. 그리고 주차가 되는 지도 확인 부탁드립니다.',
        status: 'FAL', //실패
      },
      {
        id: 4,
        userId: '12345',
        numberOfPeople: 4,
        location: 1,
        createdDate: 1659921678703,
        bizName:'4st 골프존',
        additionalRequest:'골프장비 필요',
        status: 'PAY',
      },
      {
        id: 5,
        userId: '12345',
        numberOfPeople: 5,
        location: 1,
        createdDate: 1659921328703,
        bizName:'1st 골프존',
        additionalRequest:'골프장비 필요',
        status: 'PRG', //진행중
      },
    ];
    // 2) 가져온 데이터 ReservationList에 넘기기 (아래는 참고 소스)
    // navigate('/test2', {
    //   state: {
    //     id: 1,
    //     job: '개발자'
    //   }
    // });

    console.log('dummyData : ', dummyData);
    //memberId를 파라미터로 넘긴다.
    navigate(`/ReservationList/${memberId}`,{state: dummyData});
  }

  return (
    <div>
      <MyHeader
        headText={<b>Screen Golf Reverse Bidding</b>}
        // rightChild = {<MyButton text={'>'}  onClick = {increaseMonth}/>}
        rightChild = {<MyButton text={'로그인'} onClick ={() => navigate('/memberlogin')}/>}
      />
      <img className = 'scg_img' src={process.env.PUBLIC_URL + `/screengolf/snoopyGolf2.jpg`} />

      <row1 className="main_icon_group">
      <button type="button" class="btn_image" id="img_btn1" onClick={onClickRegistry}><img  src={process.env.PUBLIC_URL + `/screengolf/mainIcons/Reservation.png`} /></button>
      <button type="button" class="btn_image" id="img_btn2" onClick={onClickReservationList}><img  src={process.env.PUBLIC_URL + `/screengolf/mainIcons/ReservationList.png`} /></button>
      <button type="button" class="btn_image" id="img_btn3"><img  src={process.env.PUBLIC_URL + `/screengolf/mainIcons/Calculation.png`} /></button>
      </row1>
      <row2 className="main_icon_group">
      <button type="button" class="btn_image" id="img_btn4"><img  src={process.env.PUBLIC_URL + `/screengolf/mainIcons/Event.png`} /></button>
      <button type="button" class="btn_image" id="img_btn5"><img  src={process.env.PUBLIC_URL + `/screengolf/mainIcons/Telinfo.png`} /></button>
      <button type="button" class="btn_image" id="img_btn6"><img  src={process.env.PUBLIC_URL + `/screengolf/mainIcons/AboutUs.png`} /></button>
      </row2>
    </div>

  );
};

export default Home;

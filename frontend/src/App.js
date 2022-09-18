import React, { useReducer, useRef } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Registry from "./pages/Registry";
import ReservationList from "./pages/ReservationList";
import BizList from "./pages/BizList";
import Pay from "./pages/Pay";

import PaymentNoti from "./pages/PaymentNoti";

// 로그인
import MemberLogIn from "./pages/Member/MemberLogIn";
import AdminLogIn from "./pages/Admin/AdminLogIn";
import BizLogIn from "./pages/Biz/BizLogIn";

// 신규가입
import CreateMember from "./pages/Member/CreateMember";
import CreateBiz from "./pages/Biz/CreateBiz";
//import CreateAdmin from "./pages/Admin/CreateAdmin";

// 수정
import MemberInfoEdit from "./pages/Member/MemberInfoEdit";
import BizInfoEdit from "./pages/Biz/BizInfoEdit";
//import AdminInfoEdit from "./pages/Admin/AdminInfoEdit";

//경매정보
import BiddingInfo from "./pages/Biz/BiddingInfo";
import BiddingInfoEnd from "./pages/Biz/BiddingInfoEnd";
import BiddingInfoList from "./pages/Biz/BiddingInfoList";

//사업장정보
import BizInfoList from "./pages/Admin/BizInfoList";

import BizInfo from "./pages/Admin/BizInfo";

const reducer = (state, action) => {
  let newState = [];

  switch (action.type) {
    case "INIT": {
      return action.data;
      break;
    }

    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }

    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }

    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }

    default:
      return state;
  }
  return newState;
};

export const ReservationStateContext = React.createContext();
export const ReservationDispatchContext = React.createContext();

// ReservationList 더미데이터..리스트가 제대로 나오는 지 확인을 위함
const dummyData = [
  {
    id: 1,
    userId: "12345",
    numberOfPeople: 1,
    location: 1,
    createdDate: 1659921378703,
    bizName: "1st 골프존",
    additionalRequest: "골프장비 필요",
  },
];

// 로그인 후 userId 받아오는 로직 구현 필요
const reservationUserId = "12345";

function App() {
  console.log(new Date().getTime());

  const [data, dispatch] = useReducer(reducer, [dummyData, reservationUserId]);

  const dataId = useRef(0);

  //CREATE
  const onCreate = (
    createdDate,
    numberOfPeople,
    location,
    additionalRequest
  ) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        createdDate: new Date(createdDate).getTime(),
        location,
        additionalRequest,
      },
    });
    dataId.current += 1;
  };

  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  //EDIT
  const onEdit = (
    targetId,
    createdDate,
    numberOfPeople,
    location,
    additionalRequest
  ) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        createdDate: new Date(createdDate).getTime(),
        numberOfPeople,
        location,
        additionalRequest,
      },
    });
  };

  return (
    <ReservationStateContext.Provider value={data}>
      <ReservationDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/registry" element={<Registry />} />
              {/* 예약목록확인을 위해 memberId를 넘긴다. */}
              <Route
                path="/reservationlist/:memberId"
                element={<ReservationList />}
              />
              {/* <Route path='/reservationlist/' element={<ReservationList />} /> */}
              {/* 비딩사업장리스트 조회를 위해 reservationId를 넘긴다. */}
              <Route path="/bizlist/:reservationId" element={<BizList />} />
              {/* <Route path='/bizlist' element={<BizList />} /> */}
              <Route path="/pay" element={<Pay />} />
              <Route path="/paymentnoti" element={<PaymentNoti />} />
              {/* 로그인 */}
              <Route path="/memberlogin" element={<MemberLogIn />} />
              <Route path="/adminlogin" element={<AdminLogIn />} />
              <Route path="/bizlogin" element={<BizLogIn />} />
              {/* 신규가입 */}
              <Route path="/createmember" element={<CreateMember />} />
              <Route path="/createbiz" element={<CreateBiz />} />
              {/* id보내서 백엔드에서 데이터 가져오는 로직 구현 후 아래 url 삭제 필요 */}
              <Route path="/memberinfoedit" element={<MemberInfoEdit />} />
              <Route
                path="/memberinfoedit/:memberId"
                element={<MemberInfoEdit />}
              />
              <Route path="/bizinfoedit" element={<BizInfoEdit />} />
              <Route path="/bizinfoedit/:bizId" element={<BizInfoEdit />} />

              {/* Bidding Info - 7. 사업장 경매 정보(진행중)*/}
              <Route path="/biddinginfo" element={<BiddingInfo />} />
              <Route path="/biddinginfo/:gameId" element={<BiddingInfo />} />

              {/* Bidding Info - 8. 사업장 경매 정보(종료) */}
              <Route path="/biddinginfoend" element={<BiddingInfoEnd />} />
              <Route
                path="/biddinginfoend/:gameId"
                element={<BiddingInfoEnd />}
              />
              <Route path="/biddinginfolist" element={<BiddingInfoList />} />
              <Route path="/bizinfolist" element={<BizInfoList />} />

              {/* 4.사업장 정보(가입/탈퇴/관리) */}
              <Route path="/bizinfo/:bizId" element={<BizInfo />} />

              {/*
              1. 사업장로그인 : http://localhost:3000/BizLogIn
              2. 사업장등록 : http://localhost:3000/createbiz
              3. 사업장정보(등록/탈퇴/관리) http://localhost:3000/bizinfolist
              4. 사업장정보 - 상세(가입/탈퇴/관리) : http://localhost:3000/bizinfo/1
              5. 사업장 정보 관리 - 사업장 : http://localhost:3000/bizinfoedit/1 - 탈퇴버튼 추가 필요
              6. 경매정보 : http://localhost:3000/biddinginfolist
              7. 경매정보-상세/사업장(진행중) : http://localhost:3000/biddinginfo/1
              8. 경매정보-상세/사업장(종료) : http://localhost:3000/biddinginfoend/1
              */}
            </Routes>
          </div>
        </BrowserRouter>
      </ReservationDispatchContext.Provider>
    </ReservationStateContext.Provider>
  );
}

export default App;

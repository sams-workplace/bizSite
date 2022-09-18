// 사업장 정보와 경매 정보 페이지에서 사용하는 목록 컴포넌트

import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const BiddingBizList = ({ userGrouptype, BiddingBizInfoData }) => {
  const navigate = useNavigate();

  return (
    <div className="bidding_biz_list_wrapper">
      <table>
        <thead>
          {userGrouptype === "Admin" && (
            <tr>
              <th>상태</th>
              <th>아이디</th>

              <th>사업장명</th>
              <th>지역</th>
              <th>연락처</th>

              <th>요청일시</th>
              <th>처리일시</th>
              <th>{/* <MyButton text={"관리"} type={"positive"} /> */}</th>
            </tr>
          )}
          {userGrouptype === "Biz" && (
            <tr>
              <th>상태</th>
              <th>게임아이디</th>

              <th>지역</th>
              <th>인원</th>

              <th>요청일시</th>
              <th>처리일시</th>
              <th>{/* <MyButton text={"관리"} type={"positive"} /> */}</th>
            </tr>
          )}
        </thead>

        {/* var temp = "http://localhost:8081/gameReservation/1"
        alert(temp.lastIndexOf("/"));
        alert(temp.substring(temp.lastIndexOf("/")+1));
        item._links.gameReservation.href.substring(item._links.gameReservation.href.lastIndexOf("/")+1) */}

        <tbody>
          {BiddingBizInfoData && BiddingBizInfoData.map((item) => (
            // <tr key={item._links.gameReservation.href.replaceAll('http://localhost:8081/gameReservation/','' )}>
            <tr key={item._links.gameReservation.href.substring(item._links.gameReservation.href.lastIndexOf("/")+1)}>
                  {item.reservationStatus === "REQUESTED" && (
                      <td>진행중</td>
                  )}
                  {item.reservationStatus === "PROGRESSED" && (
                      <td>응찰</td>
                  )}
                  {item.reservationStatus === "CONFIRMED" && (
                      <td>예약확정</td>
                  )}
                  {item.reservationStatus === "CANCELED" && (
                      <td>취소</td>
                  )}
                 <td>{item.gameReservationId}</td>
                 <td>{item.location}</td>
                 <td>{item.memberCount}</td>
                 <td>{item.reservationTime}</td>
                 <td>{item.bizSiteProcDttm}</td>
              <td>
                 {/* <MyButton text={"관리"} onClick={()=>{navigate(`/biddinginfo/${item._links.gameReservation.href.replaceAll('http://localhost:8081/gameReservation/','' )}`,{
                                                                    state:`${item._links.gameReservation.href.replaceAll('http://localhost:8081/gameReservation/','' )}`
                                                                  });
                                                                }
                                                             } /> */}
                  <MyButton text={"관리"} onClick={()=>{navigate(`/biddinginfo/${item._links.gameReservation.href.substring(item._links.gameReservation.href.lastIndexOf("/")+1)}`,{
                                                    state:`${item._links.gameReservation.href.substring(item._links.gameReservation.href.lastIndexOf("/")+1)}`
                                                  });
                                                }
                                              } />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BiddingBizList;

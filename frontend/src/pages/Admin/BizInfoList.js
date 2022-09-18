//3. 사업장 정보 목록 (Admin)
// 사업장 정보를 백엔드로부터 받아와서 BiddingBizList로 넘겨준다.

import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";
import SearchCondition from "../../components/SearchCondition";

import { renderMatches, useNavigate } from "react-router-dom";
import BiddingBizList from "../../components/BiddingBizList";

import axios from "axios";
import React, {useState, useEffect} from "react";

const BizInfoList = () => {
  const navigate = useNavigate();

  // 테스트용 데이터 - axios로 데이터 받아오는 부분 작성 필요
  /*
  const bizInfoData = [
    {
      id: 1,
      status: "등록요청",
      BizId: "golf1",
      BizName: "스크린골프1",
      location: "종로",
      phoneNumber: "010-0000-1111",
      requestDate: "2022-08-15",
      processingDate: "2022-08-15",
    },
    {
      id: 2,
      status: "탈퇴요청",
      BizId: "golf2",
      BizName: "스크린골프2",
      location: "종로",
      phoneNumber: "010-1111-2222",
      requestDate: "2022-08-15",
      processingDate: "2022-08-15",
    },
  ];
  */


  // const [bizInfoData, setBizInfoData] = useState();

  // const fetchBizInfo = async () => {
  //   const response = await fetch("http://localhost:3000/bizInfolist");
  //   const responseJson = await response.json();

  //   setBizInfoData(responseJson);
  // };

  // useEffect(() => {
  //   fetchBizInfo();
  // }, []);




  //const  [ bizInfoData, setBizInfoData ] = useState([]);
  const  [ bizInfoData, setBizInfoData ] = useState([]);

  // const fetchBizInfo = async () => {
  //    const response = await fetch("/bizSiteMngs");
  //    const responseJson = await response.json();
  //    setBizInfoData(responseJson);
  // };

  useEffect(() => {
  //  axios.get(`/bizSiteMngs`).then(response => {
  //    setBizInfoData(response.data);
  //  });
  //fetchBizInfo();

      fetch('/bizSiteMngs')
          .then((res) => res.json())
          .then((res) => {
              console.log(res);
              //setBizInfoData(bizInfoData);
              setBizInfoData(res._embedded.bizSiteMngs);

              //alert( res._embedded.bizSiteMngs._links.bizSiteMng.href ) ;

              //console.log( res._embedded.bizSiteMngs._links.bizSiteMng.href )

              if( bizInfoData.length > 0 ){
                console.log("0 이상 입니다.");
                console.log(bizInfoData.length);

                console.log(new Date().getFullYear());
                console.log(new Date().getMonth()+1);
                console.log(new Date().getDate());
                console.log(new Date().toLocaleTimeString());
              }
          })
          .catch((error) =>{
              console.log(error);
          });
  }, []);

  //}, []);

  return (
      <div className="biz_info_list_wrapper">
        <MyHeader
          headText={<b>사업장정보목록(등록/탈퇴/관리)</b>}
          leftChild={<MyButton text={"뒤로가기"} onClick={() => navigate(-1)} />}
        />
      <div className="bidding_biz_list_wrapper">
        <table>
          <thead>
              <tr>
                <th>상태</th>
                <th>아이디</th>

                <th>사업장명</th>
                <th>지역</th>
                <th>연락처</th>

                <th>요청일시</th>
                <th>처리일시</th>
                <th></th>
              </tr>
          </thead>
          <tbody>
            {bizInfoData && bizInfoData.map((item) => (
             // <tr key={item._links.bizSiteMng.href.replaceAll('http://localhost:8081/bizSiteMngs/','' )}>
                <tr key={item._links.bizSiteMng.href.substring(item._links.bizSiteMng.href.lastIndexOf("/")+1)}>
                  <td>{item.statusDesc}</td>
                  <td>{item.bizSiteId}</td>
                  <td>{item.bizSiteName}</td>
                  <td>{item.bizSiteLocation}</td>
                  <td>{item.bizSitePhoneNum}</td>
                  <td>{item.stateChngDttm}</td>
                  <td>{item.authProcDttm}</td>
                  <td>
                    {/* <MyButton text={"관리"} onClick={()=>{navigate(`/bizinfo/${item._links.bizSiteMng.href.replaceAll('http://localhost:8081/bizSiteMngs/','' )}
                    `,{
                                                                    state:`${item._links.bizSiteMng.href.replaceAll('http://localhost:8081/bizSiteMngs/','' )}`
    `                                                               });
                                                         }
                                                    } /> */}
                  <MyButton text={"관리"} onClick={()=>{navigate(`/bizinfo/${item._links.bizSiteMng.href.substring(item._links.bizSiteMng.href.lastIndexOf("/")+1)}`,{
                                                    state:`${item._links.bizSiteMng.href.substring(item._links.bizSiteMng.href.lastIndexOf("/")+1)}`
                                                  });
                                                }
                                              } />
                  </td>
                </tr>

            ))}
          </tbody>
        </table>

      </div>
      </div>
    );
}

export default BizInfoList;

import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, {useParam, useState, useEffect} from "react";

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

  const ApproveBizInfo = ({ actionType, userGroupType, data }) => {
  const navigate = useNavigate();

  //alert('data : ' + data);

//  const data = useLocation().state;
//   authProcDttm: yyyy + "-" + mm + "-" + dd + ' ' + time,
//   authProcId: `Admin`,
//   authProcNm: `관리자`,
//   status: `02`,

  //const location = useLocation();
  //const key = location.state.id;

  //const { id } = route.params;

  //const { navigation } = this.props;
  //const id = navigation.getParam('id', 'NO-ID');


  // 승인데이터
  const [authProcId      , setauthProcId   ] = useState("");
  const [authProcNm      , setauthProcNm   ] = useState("");
  const [authProcDttm    , setauthProcDttm ] = useState("");
  const [status          , setstatus       ] = useState("");
  const [statusDesc      , setstatusDesc   ] = useState("");

  // 기존 데이터 조회
  const [ bizInfoData    , setBizInfoData   ] = useState([]);

  useEffect(() => {
       fetch(`/bizSiteMngs/${data}`)
           .then((res) => res.json())
           .then((res) => {
               console.log(res);
               setBizInfoData(res);
           })
           .catch((error) =>{
               console.log(error);
           });
   }, []);

   const execProc = (statusCd) => {
      var time = getTime();
      var params = ``;

      // 02 등록승인
      if( statusCd == "02" ){
          params = { authProcId: `Admin`,authProcNm: `관리자`,authProcDttm: time,status: `02`,statusDesc: `등록승인` } ;
      }
      // 03 등록거부
      else if( statusCd == "03" ){
         params = { authProcId: `Admin`,authProcNm: `관리자`,authProcDttm: time,status: `03`,statusDesc: `등록거부` } ;
      }
      // 05 탈퇴요청
      else if( statusCd == "05" ){
         params = { authProcId: ``,authProcNm: ``,authProcDttm: ``,stateChngDttm: time,status: `05`,statusDesc: `탈퇴요청` } ;
      }
      // 06 탈퇴승인
      else if( statusCd == "06" ){
         params = { authProcId: `Admin`,authProcNm: `관리자`,authProcDttm: time,status: `06`,statusDesc: `탈퇴승인`,delFlag:true } ;
      }
      // 07 탈퇴거부
      else if( statusCd == "07" ){
         params = { authProcId: `Admin`,authProcNm: `관리자`,authProcDttm: time,status: `07`,statusDesc: `탈퇴거부` } ;
      }

      axios({
         method: 'patch',
         url: `/bizSiteMngs/${data}`,
         data: params
         }).then(function (response) {
            if (response.data != null) {
               alert(params.statusDesc + ` 처리 성공`);
            } else {
               alert(params.statusDesc + ` 처리 실패`);
            }
            console.log(response.data);

         }).catch(function(err) {
            alert(`에러가 발생하였습니다.`);
         });
         navigate(`/bizinfolist`);
      }

//   const handleSubmit = (event) => {
//    };

  return (

//    <form onSubmit={handleSubmit} >
      <div className="user_info_edit_wrapper">
         <table className="tb_member_create_form">
         <tbody>
            {userGroupType === "Admin" && (
               // <>
               // <tr>
               // <th className="form_th"><span className="mandatory_mark">*</span> 아이디</th>
               // <td className="form_td"><input className="input_field" type={"text"} placeholder="아이디 입력"/></td>
               // </tr>
               // <tr>
               //    <th className="form_th"><span className="mandatory_mark">*</span> 사업장명</th>
               //    <td className="form_td"><input className="input_field" type={"text"} placeholder="사업장명 입력" /></td>
               // </tr>
               // <tr>
               //    <th className="form_th"><span className="mandatory_mark">*</span> 지역</th>
               //    <td className="form_td"><input className="input_field" type={"select"} /></td>
               // </tr>
               // <tr>
               //    <th className="form_th"><span className="mandatory_mark">*</span> 사업자번호</th>
               //    <td className="form_td"><input className="input_field" type={"text"} placeholder="사업자번호 입력" /></td>
               // </tr>
               // <tr>
               //    <th className="form_th"><span className="mandatory_mark">*</span> 핸드폰번호(-없이입력)</th>
               //    <td className="form_td"><input className="input_field" placeholder="핸드폰번호 입력"/></td>
               // </tr>
               // <tr>
               //    <th className="form_th"><span className="mandatory_mark">*</span> 정산계좌번호</th>
               //    <td className="form_td"><input className="input_field" type={"text"} placeholder="정산계좌번호 입력" /></td>
               // </tr>
               // <tr>
               //    <th className="form_th"><span className="mandatory_mark">*</span> 요청일자</th>
               //    <td className="form_td"><input className="input_field" type={"email"} /></td>
               // </tr>
               // <tr>
               //    <th className="form_th"><span className="mandatory_mark">*</span> 처리일자</th>
               //    <td className="form_td"><input className="input_field" type={"email"} /></td>
               // </tr>
               // </>

               // <td>{item.statusDesc}</td>
               // <td>{item.bizSiteId}</td>
               // <td>{item.bizSiteName}</td>
               // <td>{item.bizSiteLocation}</td>
               // <td>{item.bizSitePhoneNum}</td>
               // <td>{item.stateChngDttm}</td>
               // <td>{item.authProcDttm}</td>

               <>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 아이디</th>
                  <td>{bizInfoData.bizSiteId}</td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 사업장명</th>
                  <td>{bizInfoData.bizSiteName}</td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 진행상태</th>
                  <td>{bizInfoData.statusDesc}</td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 사용여부</th>
                  <td>
                      {bizInfoData.delFlag && (<>N</>)}{!bizInfoData.delFlag && (<>Y</>)}
                  </td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 지역</th>
                  <td>{bizInfoData.bizSiteLocation}</td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 사업자번호</th>
                  <td>{bizInfoData.bizSiteNo}</td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 핸드폰번호(-없이입력)</th>
                  <td>{bizInfoData.bizSitePhoneNum}</td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 정산계좌번호</th>
                  <td>{bizInfoData.settleAccountNo}</td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 요청일자</th>
                  <td>{bizInfoData.stateChngDttm}</td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 처리일자</th>
                  <td>{bizInfoData.authProcDttm}</td>
               </tr>
               </>
            )}
         </tbody>
         </table>
         <div className="btn_save">
         {/* 관리자, 등록요청 상태 : 01 */
         userGroupType === "Admin" && bizInfoData.status === "01" && (
            <>
            <MyButton text={"가입승인"} type={"positive"} onClick={() => execProc("02")} />
            <MyButton text={"가입거부"} type={"negative"} onClick={() => execProc("03")} />
            </>
         )}
         {/* 사업장 담당자, 등록승인 상태 : 02 */
         //userGroupType === "Biz" && bizInfoData.status === "02" && (
         userGroupType === "Admin" && bizInfoData.status === "02" && (
            <>
            <MyButton text={"탈퇴요청"} type={"positive"} onClick={() => execProc("05")} />
            </>
         )}
         {/* 관리자, 탈퇴요청 상태 : 05 */
         userGroupType === "Admin" && bizInfoData.status === "05" && (
            <>
            <MyButton text={"탈퇴승인"} type={"positive"} onClick={() => execProc("06")} />
            <MyButton text={"탈퇴거부"} type={"negative"} onClick={() => execProc("07")} />
            </>
         )}
         <>
            &nbsp;
            <>
            <MyButton text={"목록"} type={"default"} onClick={() => navigate("/bizinfolist")} />
            </>
         </>
         </div>
      </div>
//    </form>
  );
};

export default ApproveBizInfo;

import MyButton from "./MyButton";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import React, {useState} from "react";

   function lpad(str, padLen, padStr) {
      str += "";
      padStr += "";
      while (str.length < padLen)
         str = padStr + str;
      str = str.length >= padLen ? str.substring(0, padLen) : str;
      return str;
   }

  const UserInfoEdit = ({ actionType, userGroupType }) => {
  const navigate = useNavigate();

  const [bizSiteId      , setBizSiteId      ] = useState("");
  const [bizSitePassword, setBizSitePassword] = useState("");
  const [bizSiteName    , setBizSiteName    ] = useState("");
  const [bizSiteLocation, setBizSiteLocation] = useState("");
  const [bizSiteNo      , setBizSiteNo      ] = useState("");
  const [bizSitePhoneNum, setBizSitePhoneNum] = useState("");
  const [settleAccountNo, setSettleAccountNo] = useState("");

  const handleChangeBizSiteId       = (event) => { setBizSiteId(event.target.value)      };
  const handleChangeBizSitePassword = (event) => { setBizSitePassword(event.target.value)};
  const handleChangeBizSiteName     = (event) => { setBizSiteName(event.target.value)    };
  const handleChangeBizSiteLocation = (event) => { setBizSiteLocation(event.target.value)};
  const handleChangeBizSiteNo       = (event) => { setBizSiteNo(event.target.value)      };
  const handleChangeBizSitePhoneNum = (event) => { setBizSitePhoneNum(event.target.value)};
  const handleChangeSettleAccountNo = (event) => { setSettleAccountNo(event.target.value)};

  const isFlag = false;

  const handleSubmit = (event) => {

      //      if (`${bizSiteId}`       === ``) alert(`아이디를 입력해 주세요`);
      // else if (`${bizSitePassword}` === ``) alert(`비밀번호를 입력해 주세요`);
      // else if (`${bizSiteName}`     === ``) alert(`사업장명을 입력해 주세요`);
      // else if (`${bizSiteLocation}` === ``) alert(`지역을 입력해 주세요`);
      // else if (`${bizSiteNo}`       === ``) alert(`사업자번호를 입력해 주세요`);
      // else if (`${bizSitePhoneNum}` === ``) alert(`헨드폰번호를 입력해 주세요`);
      // else if (`${settleAccountNo}` === ``) alert(`정산계좌번호를 입력해 주세요`);
      // else isFlag = true;

      // if( isFlag === false ) return ;

      var yyyy = new Date().getFullYear();
      var mm = new Date().getMonth()+1;
      var dd = new Date().getDate();
      var hh = new Date().getHours();
      var mi = new Date().getMinutes();
      var ss = new Date().getSeconds();
      var time = yyyy + "-" +
                 lpad(mm,2,"0") + "-" +
                 lpad(dd,2,"0") + " " +
                 lpad(hh,2,"0") + ":" +
                 lpad(mi,2,"0") + ":" +
                 lpad(ss,2,"0") ;

      axios({
         method: 'post',
         url: '/bizSiteMngs',
         data: {
               bizSiteId: bizSiteId,
               bizSiteName: bizSiteName,
               bizSiteNo: bizSiteNo,
               bizSitePassword: bizSitePassword,
               bizSiteLocation: bizSiteLocation,
               bizSitePhoneNum: bizSitePhoneNum,
               settleAccountNo: settleAccountNo,
               delFlag: false,
               status: `01`,
               statusDesc: `등록요청`,
               stateChngDttm: time
         }
      }).then(function (response) {

         if (response.data != null) {
            alert(`신규 사업자 등록 신청 완료하였습니다.`);
         } else {
            alert(`신규 사업자 등록 신청 실패하였습니다.`);
         }
         console.log(response.data);

      }).catch(function(err) {
         alert(`에러가 발생하였습니다.`);
      });

      navigate(`/bizinfolist`);
   };

  return (

    <form onSubmit={handleSubmit} >
      <div className="user_info_edit_wrapper">
         <table className="tb_member_create_form">
         <tbody>
            {userGroupType === "Admin" && (
               <>
               <tr>
               <th className="form_th"><span className="mandatory_mark">*</span> 아이디</th>
               <td className="form_td"><input className="input_field" type={"text"} placeholder="아이디 입력"/></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 사업장명</th>
                  <td className="form_td"><input className="input_field" type={"text"} placeholder="사업장명 입력" /></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 지역</th>
                  <td className="form_td"><input className="input_field" type={"select"} /></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 사업자번호</th>
                  <td className="form_td"><input className="input_field" type={"text"} placeholder="사업자번호 입력" /></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 핸드폰번호(-없이입력)</th>
                  <td className="form_td"><input className="input_field" placeholder="핸드폰번호 입력"/></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 정산계좌번호</th>
                  <td className="form_td"><input className="input_field" type={"text"} placeholder="정산계좌번호 입력" /></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 요청일자</th>
                  <td className="form_td"><input className="input_field" type={"email"} /></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 처리일자</th>
                  <td className="form_td"><input className="input_field" type={"email"} /></td>
               </tr>
               </>
            )}
            {userGroupType === "Member" && (
               <>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 아이디</th>
                  <td className="form_td"><input className="input_field" type={"text"} placeholder="아이디 입력" /></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 비밀번호</th>
                  <td className="form_td"><input className="input_field" type={"password"} placeholder="비밀번호 입력" /></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 이름</th>
                  <td className="form_td"><input className="input_field" type={"text"} placeholder="이름 입력" /></td>
               </tr>
               <tr>
                  <th className="form_th">&nbsp; 생년월일</th>
                  <td className="form_td"><input className="input_field" type={"date"} placeholder="이름 입력"/></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 이메일</th>
                  <td className="form_td"><input className="input_field" type={"email"} placeholder="이메일 입력"/></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 핸드폰번호(-없이입력)</th>
                  <td className="form_td"><input className="input_field" placeholder="핸드폰번호 입력"/></td>
               </tr>
               </>
            )}
            {userGroupType === "Biz" && (
               <>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 아이디</th>
                  <td className="form_td"><input className="input_field" type="text" value={bizSiteId} placeholder="아이디 입력" onChange={handleChangeBizSiteId} /></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 비밀번호</th>
                  <td className="form_td"><input className="input_field" type="password" value={bizSitePassword} placeholder="비밀번호 입력" onChange={handleChangeBizSitePassword} /></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 사업장명</th>
                  <td className="form_td"><input className="input_field" type="text" value={bizSiteName} placeholder="사업장명 입력" onChange={handleChangeBizSiteName} /></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 지역</th>
                  <td className="form_td"><input className="input_field" type="select" value={bizSiteLocation} placeholder="지역 입력"  onChange={handleChangeBizSiteLocation} /></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 사업자번호</th>
                  <td className="form_td"><input className="input_field" type="text" value={bizSiteNo} placeholder="사업자번호 입력" onChange={handleChangeBizSiteNo} /></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 핸드폰번호(-없이입력)</th>
                  <td className="form_td"><input className="input_field" type="text" value={bizSitePhoneNum} placeholder="핸드폰번호 입력" onChange={handleChangeBizSitePhoneNum} /></td>
               </tr>
               <tr>
                  <th className="form_th"><span className="mandatory_mark">*</span> 정산계좌번호</th>
                  <td className="form_td"><input className="input_field" type="text" value={settleAccountNo} placeholder="정산계좌번호 입력" onChange={handleChangeSettleAccountNo} /></td>
               </tr>
               </>
            )}
         </tbody>
         </table>
         <div className="btn_save">
         {/* 상태값에 따라 버튼이 다르게 나타나게 한다. */}
         {userGroupType === "Admin" && (
            <>
            <MyButton text={"가입승인"} type={"positive"} onClick={() => navigate(-1)} />
            <MyButton text={"가입거부"} type={"negative"} onClick={() => navigate(-1)} />
            <MyButton text={"탈퇴승인"} type={"positive"} onClick={() => navigate(-1)} />
            <MyButton text={"탈퇴거부"} type={"negative"} onClick={() => navigate(-1)} />
            </>
         )}
         {userGroupType === "Member" && actionType === "edit" && (
            <MyButton text={"회원탈퇴"} type={"negative"} onClick={() => navigate(-1)} />
         )}

         <MyButton text={"저장"} type={"submit"} />&nbsp;&nbsp;
         <MyButton text={"취소"} type={"negative"} onClick={() => navigate(-1)} />
         </div>
      </div>
    </form>
  );
};

export default UserInfoEdit;

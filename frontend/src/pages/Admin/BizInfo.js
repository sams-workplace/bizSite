// 4. 사업장 정보 - 상세 / Admin
import MyButton from "../../components/MyButton";
import MyHeader from "../../components/MyHeader";
import ApproveBizInfo from "../../components/ApproveBizInfo";

import { useLocation, useNavigate, useParams  } from "react-router-dom";
import React, {useState, useEffect} from "react";

const BizInfo = ({route}) => {
  const navigate = useNavigate();

  //const data = this.props.getParam("data");

  // const data  = route.params.data ;

  //console.log( data );

  //const sendedData = route.params.data

  //let { id } = useParams();

  const data = useLocation().state;

  //alert( 'data : ' + data );
  //alert( route.params );

  return (
    <div className="member_info_edit_wrapper">
      <MyHeader
        headText={<b>사업장정보(가입/탈퇴/관리)</b>}
        leftChild={<MyButton text={"뒤로가기"} onClick={() => navigate(-1)} />}
      />
      <ApproveBizInfo actionType={"edit"} userGroupType={"Admin"} data={data} />
    </div>
  );
};

export default BizInfo;

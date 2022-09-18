import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import MyButton from "./MyButton";
import MyHeader from "./MyHeader"


const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const getStringTime = (time) => {
  const hours = ('0' + time.getHours()).slice(-2);
  const minutes = ('0' + time.getMinutes()).slice(-2);
  const timeStr = hours + ':' + minutes ;

  return timeStr;

};

const RegistryEditor = () => {

  const navigate = useNavigate();

  const [date, setDate] = useState(getStringDate(new Date()));
  const [time, setTime] = useState(getStringTime(new Date()));
  const [request, setRequest] = useState("");


  // 등록버튼 기능 -38:40 (추가 변경 필요...onCreate......)
  const handleSubmit = () => {
    if(request.length < 1){
      request.current.focus();
      return;
    }
  }

  const requestRef = useRef();

  return (
    <div className="RegistryEditor">
      <MyHeader
      headText ={"예약 등록하기"}
      leftChild = { <MyButton text= {"뒤로가기"} onClick ={() => navigate(-1)}/>}
      />
      <div>
        <h4> 예약 날짜와 시간을 정해주세요</h4>
        <section>
            <div className = "input_box">
              <input
                className ='input_date'
                type = "date"
                value = {date}
                onChange = {(e) => setDate(e.target.value)}
              />
            </div>
            <div className = "input_box">
              <input
                className ='input_time'
                type = "time"
                value = {time}
                onChange = {(e) => setTime(e.target.value)}
              />
            </div>
        </section>
        <h4> 예약 인원을 선택해 주세요</h4>
        <section>
          <div>
            <select className="number_of_people">
                <option value="num1">1 명</option>
                <option value="num2">2 명</option>
                <option value="num3">3 명</option>
                <option value="num4">4 명</option>
            </select>
          </div>
        </section>
        <h4> 예약할 지역을 선택해 주세요</h4>
        <section>
          <div>
            <select className="location_si">
                <option value="seoul">서울시</option>
            </select>
            <select className="location_gu">
                <option value="junggu">중구</option>
            </select>
            <select className="location_dong">
                <option value="1">소공동</option>
                <option value="2">중림동</option>
                <option value="3">회현동</option>
                <option value="4">명동</option>
                <option value="5">필동</option>
                <option value="6">을지로1가동</option>
                <option value="7">을지로2가동</option>
                <option value="8">을지로3가동</option>
                <option value="9">을지로4가동</option>
                <option value="10">을지로5가동</option>
                <option value="11">광희동</option>
                <option value="12">장충동</option>
                <option value="13">황학동</option>
            </select>
          </div>
        </section>
        <h4> 추가 요청 사항을 적어주세요</h4>
        <section className="addtional_request">
          <textarea
            placeholder="추가 요청 사항이 있으시면 적어주세요"
            ref={requestRef}
            value = {request}
            onChange = {(e) => setRequest((e.target.value))}
          />
        </section>
        <section>
          <div className="registry_btn1">
            <MyButton id = 'registry_btn1'  text ={'등록하기'} type = {"positive"}  onClick = {() => {}}/>
          </div>
            <MyButton text ={'취소하기'} type = {'negative'}  onClick = {() => navigate(-1)}/>
        </section>
      </div>
    </div>
  )
};

export default RegistryEditor;
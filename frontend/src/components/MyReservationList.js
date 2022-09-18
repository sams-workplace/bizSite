import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import MyButton from './MyButton';
import ReservationItem from "./ReservationItem";
import ControlMenu from './ControlMenu';

//필터
const sortOptionList = [
  {value:"latest", name:"최신순"},
  {value:"oldest", name:"오래된순"},
];

const filterOptionList = [
  {value:"PRG", name:"비딩진행"},
  {value:"CFM", name:"예약완료"},
  {value:"CAL", name:"정산완료"},
  {value:"PAY", name:"계산완료"},
  {value:"CNL", name:"취소"},
  {value:"FAL", name:"실패"},
  {value:"ALL", name:"전부"},
];


const MyReservationList = ({reservationList}) => {

  const navigate = useNavigate();

  // 최신순, 오래된 순
  const [sortType, setSortType] = useState('latest');

  // status 필터
  const [filter, setFilter] = useState("PRG");


  const getProcessedReservationList = () => {

    //상태 변경 함수
    const filterCallBack = (item) => {
      if(filter ==='PRG'){
        return item.status === 'PRG';
      }else if(filter === 'CNL'){
        return item.status === 'CNL';
      }else if(filter === 'FAL'){
        return item.status === 'FAL';
      }else if(filter === 'CAL'){
        return item.status === 'CAL';
      }else if(filter === 'PAY'){
        return item.status === 'PAY';
      }else{
        return item.status === 'CFM';
      }

    }

    // 두 날짜 비교 함수
    const compare = (a,b) => {
      if(sortType ==='latest'){
        return parseInt(b.createdDate) - parseInt(a.createdDate);
      }else{
        return parseInt(a.createdDate) - parseInt(b.createdDate);
      }
    };

    // 리스트를 문자열로 변경 후 다시 json으로 변경해서 복사
    const copyList = JSON.parse(JSON.stringify(reservationList));

    const filteredList = filter ==='ALL'? copyList : copyList.filter((it) => filterCallBack(it));
    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className='MyReservationList'>

      <div className='menu-wrapper'>
        <div className='left_col'>
          <ControlMenu
            value = {sortType}
            onChange = {setSortType}
            optionList = {sortOptionList}
          />
          <ControlMenu
            value = {filter}
            onChange = {setFilter}
            optionList = {filterOptionList}
          />
        </div>
      </div>

      {getProcessedReservationList().map((it) => (
        <ReservationItem
          key={it.id}
          {...it}
        />
      ))}

      <div className='reservation_registry'>
        <MyButton
        type = 'positive'
        text = '새로운 예약 등록하기'
        onClick={()=> navigate("/registry")}
        />
      </div>

    </div>



  );
};

MyReservationList.defaultProps = {
  reservationList: [],
}

export default MyReservationList;


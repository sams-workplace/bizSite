import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MyButton from './MyButton';
import ReservationItem from "./ReservationItem";
import ControlMenu from './ControlMenu';
import BizItem from './BizItem';

//필터
const sortPriceOptionList = [
  {value:"mostexpensive", name:"가격이 높은순"},
  {value:"cheapest", name:"가격이 낮은순"},
];

const sortTimeOptionList = [
  {value:"latest", name:"시간이 빠른순"},
  {value:"oldest", name:"시간이 늦은순"},
];

const MyBizList = ({bizlist}) => {

  console.log(bizlist)

  const onClickReload = () => {
    navigate(0);
  }

  const navigate = useNavigate();

    // 최신순, 오래된 순
    const [sortPriceType, setSortPriceType] = useState('cheapest');

    // 가격 필터
    const [sortTimeType, setSortTimeType] = useState("latest");

    const getProcessedBizList = () => {

      // 시간비교함수
      const compareTime = (a,b) => {
        if(sortTimeType ==='latest'){
          return parseInt(b.reservedDate) - parseInt(a.reservedDate);
        }else{
          return parseInt(a.reservedDate) - parseInt(b.reservedDate);
        }
      };

      //가격비교함수
      const comparePrice = (a,b) => {
        if(sortPriceType ==='cheapest'){
          return parseInt(a.totalPrice) - parseInt(b.totalPrice);

        }else{

          return parseInt(b.totalPrice) - parseInt(a.totalPrice);
        }
      };

      const copyList = JSON.parse(JSON.stringify(bizlist))

      // const sortedTimeList = copyList.sort(compareTime);
      // const sortedPriceList = sortedTimeList.sort(comparePrice);
      const sortedTimeList = copyList.sort(compareTime);
      const sortedPriceList = copyList.sort(comparePrice);

      return sortedPriceList;

  };


    return (
      <div className='MyBizList'>

        <div className='menu-wrapper'>
          <div className='left_col'>
            <ControlMenu
              value = {sortPriceType}
              onChange = {setSortPriceType}
              optionList = {sortPriceOptionList}
            />
            {/* <ControlMenu
              value = {sortTimeType}
              onChange = {setSortTimeType}
              optionList = {sortTimeOptionList}
            /> */}
          </div>
        </div>

        {getProcessedBizList().map((it) => (
          <BizItem
            key={it.id}
            {...it}
          />
        ))}

      <div className='btn_reload'>
        <MyButton
        type = 'positive'
        text = '리로드하기'
        onClick={onClickReload}
        />
      </div>

      </div>
    )

};

export default MyBizList;
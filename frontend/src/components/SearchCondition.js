// 6. 검색 (경매 정보 목록, 사업장 정보 목록에서 사용)

// import MyButton from "../../components/MyButton";

import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const SearchCondition = ({ userGrouptype }) => {
  const navigate = useNavigate();

  return (
    <div className="search_condition_wrapper">
      <div className="tb_search_condition">
        <table>
          {userGrouptype === "Biz" && (
          <tr>
            <th>경매진행상태</th>
            <td>
               <div>
                  <input type={"text"} />
               </div>
            </td>
            <th>게임아이디</th>
            <td>
              <div>
                <input type={"text"} />
              </div>
            </td>
          </tr>
          )}
          {userGrouptype === "Admin" && (
            <tr>
              <th>지역</th>
              <td>
                <div>
                  <input type={"text"} />
                </div>
              </td>
              <th>연락처</th>
              <td>
                <div>
                  <input type={"text"} />
                </div>
              </td>
            </tr>
          )}
          {userGrouptype === "Admin" && (
            <tr>
              <th>사업장명</th>
              <td>
                <div>
                  <input type={"text"} />
                </div>
              </td>
              <th>요청일자</th>
              <td>
                <div>
                  <input type={"date"} />
                </div>
              </td>
            </tr>
          )}
        </table>
        <MyButton text={"검색"} type={"negative"} />
      </div>
      <div className="table_line"></div>
    </div>
  );
};

export default SearchCondition;

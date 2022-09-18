import MyButton from "./MyButton";
import UserGroupChange from "./UserGroupChange";

const LogInInput = ({ titleText, typeOfLogIn }) => {
  return (
    <div className="login_input_wrapper">
      <div className="login_input_title">
        <h2 className="title">{titleText}</h2>
      </div>
      <div className="input_row">
        <input className="id" type="text" placeholder="아이디" title="아이디" />
      </div>
      <div className="input_row">
        <input
          className="pw"
          type="password"
          placeholder="패스워드"
          title="패스워드"
        />
      </div>

      <div className="input_row">
        <MyButton
          id="member_login_btn"
          text={"로그인"}
          type={"positive"}
          onClick={() => {}}
        />
      </div>
      {typeOfLogIn === "Member" && (
        <UserGroupChange
          titleText1={"사업장로그인"}
          titleText2={"관리자로그인"}
          nav1={"/BizLogIn"}
          nav2={"/AdminLogIn"}
          userGroupType={"Member"}
        />
      )}
      {typeOfLogIn === "Admin" && (
        <UserGroupChange
          titleText1={"사용자로그인"}
          titleText2={"사업장로그인"}
          nav1={"/MemberLogIn"}
          nav2={"/BizLogIn"}
          userGroupType={"Admin"}
        />
      )}
      {typeOfLogIn === "Biz" && (
        <UserGroupChange
          titleText1={"사용자로그인"}
          titleText2={"관리자로그인"}
          nav1={"/MemberLogIn"}
          nav2={"/AdminLogIn"}
          userGroupType={"Biz"}
        />
      )}
    </div>
  );
};

export default LogInInput;

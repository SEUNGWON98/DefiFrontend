import "../styles/Navigation.css";
import logo from "../images/logo.png";

function navigation() {
  return (
    <div className="navigation">
      <header>
        <div className="logo_box">
          <img src={logo} alt="logo" className="logo" />
          <p>New protocol</p>
        </div>
        <div className="menu">
          <div>내 자산</div>
          <div>환전</div>
          <div>예치</div>
          <div>빌리기</div>
          <div>문서</div>
        </div>
        <button className="connect_wallet">지갑 연결</button>
      </header>
    </div>
  );
}

export default navigation;

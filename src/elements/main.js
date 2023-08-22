import "../styles/Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main_description">
        New protocol은 클레이튼 체인 내에서 환전, 예치 및 대출을 할 수 있는
        서비스 입니다.
      </div>
      <div className="exchange_pool">
        <div className="mint_box">
          To USDT
          <button className="mint_button">Mint</button>
        </div>
        <div className="mint_box">
          WON
          <button className="mint_button">Mint</button>
        </div>
      </div>
    </div>
  );
}

export default Main;

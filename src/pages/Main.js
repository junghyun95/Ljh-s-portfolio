import MainCSS from "./Main.module.css";
import $ from "jquery";

function Main() {
  return (
    <>
      <div className={MainCSS.firstBox}>
        <div className={MainCSS.title}>INTRODUCE</div>
      </div>
      <div className={MainCSS.intro}>
        <div className={MainCSS.intro1}>
          <div className={MainCSS.introBox}>
            <p className={MainCSS.cssTyping}>
              안녕하세요 웹 프론트엔드 개발자 이정현입니다.
            </p>

            <p className={MainCSS.cssTyping}>
              새로운 트렌드를 중요시하며, 도전하는것에 대해 두려움이 없고,
              배움을 즐거워 합니다.
            </p>
            <p className={MainCSS.cssTyping}>
              사용자를 위한 사용자를 위해 항상 생각하고 소통하며 개발하고
              싶습니다.
            </p>
            <p className={MainCSS.cssTyping}>
              앞으로 더 많은 경험과, 배움을 통해 완벽한 개발자가 되기위해
              노력하겠습니다.
            </p>
          </div>

          <div className={MainCSS.introImg}>
            <img src="static/images/개발1.gif" alt="개발자" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

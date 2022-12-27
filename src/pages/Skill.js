import SkillCSS from "./Skill.module.css";
import $ from "jquery";

function Skill() {
  // 슬라이드 배너 코드
  let interval;
  let activeIndex = 1;

  $(document).on("ready", function () {
    interval = setInterval(changeActiveIndex, 2500);
    $(".listButtonItem").on("click", function () {
      // list button의 색상 변경
      const index = $(this).index();
      activeIndex = index;
      changeActiveIndex();
      clearInterval(interval);
      // animation 재설정을 위해 animation을 잠시 제거한다.
      $(".banner").css("animation", "none");
      // animation 재설정
      $(".banner").animate({ marginLeft: `${-100 * index}%` }, 1, function () {
        //1초의 시간 여유(해당 이미지로 이동하는 animation을 위한 시간)를 두고 다시 animation을 설정한다.
        setTimeout(function () {
          $(".banner").css("animation", `animation${index + 1} 10s infinite`);

          interval = setInterval(changeActiveIndex, 2500);
        }, 1000);
      });
    });
  });

  function changeActiveIndex() {
    if (activeIndex > 3) {
      activeIndex %= 4;
    }
    changeActiveBtn();
    activeIndex += 1;
  }

  function changeActiveBtn() {
    $(".listButtonItem").removeClass("active");
    $(`.listbutton span:eq(${activeIndex})`).addClass("active");
  }

  return (
    <>
      <div className={SkillCSS.firstBox}>
        <div className={SkillCSS.title}>Skill</div>

        {/* 슬라이드 영역 */}
        <div className={SkillCSS.slidebox}>
          <div className={SkillCSS.slide}>
            <div className={SkillCSS.banner}>
              <div data-index={1}></div>
              <div data-index={2}></div>
              <div data-index={3}></div>
              <div data-index={4}></div>
            </div>
          </div>
        </div>
        <div className={SkillCSS.secondBox}>
          <div className={SkillCSS.git}>
            Version Control
            <div>
              <img src="static/images/깃.png" alt="로고" />
            </div>
          </div>
          <div className={SkillCSS.else}>
            else..
            <div>
              <img src="static/images/어도비.png" alt="로고" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;

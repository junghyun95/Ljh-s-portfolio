import ProjectCSS from "./Project.module.css";

function Project() {
  return (
    <>
      <div className={ProjectCSS.firstBox}>
        <div className={ProjectCSS.title}>PROJECT</div>
        <div className={ProjectCSS.projectBox}>
          <div className={ProjectCSS.projectBox1}>
            {/* 프로젝트1 부분 */}
            <div className={ProjectCSS.project1}>
              <div className={ProjectCSS.project1Box}>
                <img src="static/images/프로젝트1.gif" alt="프로젝트1" />
              </div>
              <div className={ProjectCSS.projectTitle}>
                &nbsp; ☕ 하이스 커피
              </div>
              <div className={ProjectCSS.projectDate}>
                &nbsp; 기간 : 2022.09.13 ~ 2022.10.17
              </div>
              <div className={ProjectCSS.projectGit}>
                <a
                  href="https://github.com/sme1029/semi_front_door"
                  target="_blank"
                >
                  &nbsp; 💻 GitHub
                </a>
              </div>
              <div className={ProjectCSS.projectDev}>
                <img src="static/images/플젝개발환경1.png" alt="개발환경1" />
              </div>
              <div className={ProjectCSS.projectRole}>
                <div className={ProjectCSS.projectRole1}>📝 작업 부분</div>
                <div className={ProjectCSS.projectRole2}>
                  레이아웃 구성, 메인페이지, 이벤트페이지, 전체적인 팀원들 CSS
                </div>
              </div>
            </div>

            {/* 프로젝트3 부분 */}
            <div className={ProjectCSS.project3}>
              <div className={ProjectCSS.project3Box}>
                <img src="static/images/프로젝트3.gif" alt="프로젝트3" />
              </div>
              <div className={ProjectCSS.projectTitle}>&nbsp; 🍀 산책 어때</div>
              <div className={ProjectCSS.projectDate}>
                &nbsp; 기간 : 2022.10.27 ~ 2022.11.01
              </div>
              <div className={ProjectCSS.projectGit}>
                <a
                  href="https://github.com/song-dain/WouldYouWalk"
                  target="_blank"
                >
                  &nbsp; 💻 GitHub
                </a>
              </div>
              <div className={ProjectCSS.projectDev}>
                <img src="static/images/개발환경3.png" alt="개발환경3" />
              </div>
              <div className={ProjectCSS.projectRole}>
                <div className={ProjectCSS.projectRole1}>📝 작업 부분</div>
                <div className={ProjectCSS.projectRole2}>
                  레이아웃 구성, 컴포넌트 세팅, 공원API 리스트페이지
                </div>
              </div>
            </div>

            {/* 프로젝트2 부분 */}
            <div className={ProjectCSS.project2}>
              <div className={ProjectCSS.project2Box}>
                <img src="static/images/프로젝트2.gif" alt="프로젝트2" />
              </div>
              <div className={ProjectCSS.projectTitle}>
                &nbsp; 🗽 New Worker
              </div>
              <div className={ProjectCSS.projectDate}>
                &nbsp; 기간 : 2022.11.04 ~ 2022.12.09
              </div>
              <div className={ProjectCSS.projectGit}>
                <a
                  href="https://github.com/song-dain/Back-End_NewWorker"
                  target="_blank"
                >
                  &nbsp; 💻 GitHub1
                </a>

                <a
                  href="https://github.com/song-dain/Front-End_NewWorker"
                  target="_blank"
                >
                  &nbsp; 💻 GitHub2
                </a>
              </div>
              <div className={ProjectCSS.projectDev}>
                <img src="static/images/개발환경2.png" alt="개발환경2" />
              </div>
              <div className={ProjectCSS.projectRole}>
                <div className={ProjectCSS.projectRole1}>📝 작업 부분</div>
                <div className={ProjectCSS.projectRole2}>
                  레이아웃 구성, 메뉴바, 전체적인 CSS, 이벤트페이지,
                  공지사항페이지
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;

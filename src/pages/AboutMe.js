import AboutMeCSS from "./AboutMe.module.css";

function AboutMe() {


    return(
        <>
        <div className={AboutMeCSS.firstBox}>
            
            <div className={AboutMeCSS.title}>
                About Me
            </div>
            <div className={AboutMeCSS.info}>
                <table>
                    <thead>
                        <tr>
                            <th className={AboutMeCSS.txt}>
                                이름
                            </th>
                            <th className={AboutMeCSS.txt1}>
                                이정현
                            </th>
                        </tr>
                        <tr>
                            <th className={AboutMeCSS.txt}>
                                주소지
                            </th>
                            <th className={AboutMeCSS.txt1}>
                                경기도 고양시 덕양구
                            </th>
                        </tr>
                        <tr>
                            <th className={AboutMeCSS.txt}>
                                이메일
                            </th>
                            <th className={AboutMeCSS.txt1}>
                                leehut0207@naver.com
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                    <tr>
                            <th className={AboutMeCSS.txt}>
                                생년월일
                            </th>
                            <th className={AboutMeCSS.txt1}>
                                95.02.07
                            </th>
                        </tr>
                        <tr>
                            <th className={AboutMeCSS.txt}>
                                연락처
                            </th>
                            <th className={AboutMeCSS.txt1}>
                                +82 10-9978-4457
                            </th>
                        </tr>
                        <tr>
                            <th className={AboutMeCSS.txt}>
                                학력
                            </th>
                            <th className={AboutMeCSS.txt1}>
                                서영대학교(경영학과)
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={AboutMeCSS.title1}>
                History
            </div>
            <div className={AboutMeCSS.info}>
                <table>
                    <thead>
                        <tr>
                            <th className={AboutMeCSS.txt}>
                                고등학교
                            </th>
                            <th className={AboutMeCSS.txt1}>
                                2010.03 ~ 2013.02
                            </th>
                        </tr>
                        <tr>
                            <th className={AboutMeCSS.txt}>
                                대학교
                            </th>
                            <th className={AboutMeCSS.txt1}>
                                2013.02 ~ 2016.02
                            </th>
                        </tr>
                        <tr>
                            <th className={AboutMeCSS.txt}>
                                군대
                            </th>
                            <th className={AboutMeCSS.txt1}>
                                2014.12 ~ 2016.09
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                    <tr>
                            <th className={AboutMeCSS.txt}>
                                미르마케팅
                            </th>
                            <th className={AboutMeCSS.txt1}>
                                2016.10 ~ 2018.12
                            </th>
                        </tr>
                    <tr>
                        <th className={AboutMeCSS.txt}>
                            D&T
                        </th>
                        <th className={AboutMeCSS.txt1}>
                            2019.03 ~ 2019.09
                        </th>
                    </tr>
                        <tr>
                            <th className={AboutMeCSS.txt}>
                                JS컴퍼니
                            </th>
                            <th className={AboutMeCSS.txt1}>
                                2019.10 ~ 2022.01
                            </th>
                        </tr>
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th className={AboutMeCSS.txt2}>
                                하이미디어 종로 인재개발원
                            </th>
                            <th className={AboutMeCSS.txt3}>
                                2022.06 ~ 2022.12
                            </th>
                        </tr>
                    </tfoot>
                    
                </table>
            </div>
            
        </div>
        </>
        
    );
}

export default AboutMe; 
import ContactCSS from "./Contact.module.css";

function Contact() {
  const onClickmailhandler = () => {
    alert("아직 개발중인 단계입니다.");
  };

  return (
    <>
      <div className={ContactCSS.firstBox}>
        <div className={ContactCSS.title}>CONTACT</div>
        <div className={ContactCSS.logoBox}>
          <div className={ContactCSS.logoBox1}>
            <div className={ContactCSS.kakao}>
              <a href="https://open.kakao.com/o/s2cVW3We" target="_blank">
                <img src="static/images/카카오톡.png" alt="카카오톡" />
              </a>
            </div>
            <div className={ContactCSS.instagram}>
              <a href="https://www.instagram.com/j_hy__un/" target="_blank">
                <img src="static/images/인스타그램1.png" alt="인스타그램" />
              </a>
            </div>
            <div className={ContactCSS.mail}>
              <img
                src="static/images/메일2.png"
                alt="메일"
                onClick={onClickmailhandler}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

import ProjectCSS from "./Project.module.css";

function Project() {


    return(
        <>
        <div className={ProjectCSS.firstBox}>
            
            <div className={ProjectCSS.title}>
                PROJECT
            </div>
            <div className={ProjectCSS.projectBox}>
                <div className={ProjectCSS.projectBox1}>
                    <div className={ProjectCSS.project1}>
                        
                        <div className={ProjectCSS.project1Box}>
                            <img src="static/images/프로젝트1.gif" alt="프로젝트1" />
                        </div>
                    </div>
                    <div className={ProjectCSS.project2}>
                    <div className={ProjectCSS.project2Box}></div>
                    </div>
                    <div className={ProjectCSS.project3}>
                    <div className={ProjectCSS.project3Box}></div>
                    </div>
                </div>
            </div>
            
            
            
            
        </div>
        </>
        
    );
}

export default Project; 
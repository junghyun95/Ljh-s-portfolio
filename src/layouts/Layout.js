import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import LayoutCSS from "./Layout.module.css";



/* Outlet: 라우팅 되는 컴포넌트를 대체하기 위한 마커 역할 */
function Layout() {

    return (
   
        <>
            <div>

                <Header />
                
            
                <main>
                    <Outlet />
                </main> 
            </div>
        </>

    );
}

export default Layout;
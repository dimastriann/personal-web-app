import React from "react";
import { Menu } from "./Menu";

// interface HeaderProps {
//     activeMenu: boolean
// }

const Header: React.FC = () => {
    return (
        <header className="header sticky bottom-0 md:top-0">
            {/* <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between"> */}
            {/* <a href="/" className="">
                <img src="/img/my-logo.png" className="logo-img" alt="" style={{borderRadius: 15}}/>
                    <h1 className="sitename">DimasTN</h1>
                </a> */}
            <Menu />
            {/* </div> */}
        </header>
    );
};

export default Header;

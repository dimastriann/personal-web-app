import React from "react";
import {Menu} from "./Menu";

const Header: React.FC = () => {
    return (
        <header className="header d-flex align-items-center sticky-top bg-primary">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center">
                    {/* <img src="assets/img/logo.png" alt=""> */}
                    <h1 className="sitename">DimasTN</h1>
                </a>
                <Menu/>
            </div>
        </header>
    )
}

export default Header;
import React from "react";
import {Link} from "react-router-dom"
import appData from "../data/my_data.json";


interface MenuItemProps {
    title: string,
    link: string
}


export const MenuItem: React.FC<MenuItemProps> = ({title, link}) => {
    return (
        <li title={title}>
            <Link to={link}>{title}</Link>
        </li>
    )
}

export const Menu = () => {
    return (
        <nav id="navmenu" className="navmenu">
            <ul>
                {appData["menus"].map( (menu) => 
                    <MenuItem title={menu.title} link={menu.route} key={menu.id}/>)
                }
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
    )
}

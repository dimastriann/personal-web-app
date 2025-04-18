import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import appData from "../data/my_data.json";

type MenuItemType = {
    id: string;
    title: string;
    route: string;
    icon: string;
}

interface MenuItemProps {
    id: string;
    title: string;
    link: string;
    icon: string;
    activeMenu: boolean;
    setActiveMenu: (val: string) => void;
}


export const MenuItem: React.FC<MenuItemProps> = ({id, title, link, icon, activeMenu, setActiveMenu}) => {
    return (
        <li title={title} className={activeMenu ? "active" : ""}>
            <Link to={link} onClick={() => setActiveMenu(id)}>
                <i className={`me-2 menu-icon ${icon}`}></i>
                <span className="menu-label">{title}</span>
            </Link>
        </li>
    )
}

export const Menu: React.FC = () => {
    const [menuId, setActiveMenu] = useState<string>("");

    const defaultMenuItem: MenuItemType = {
        id: "home",
        title: "Home",
        route: "/",
        icon: "bi bi-house-door",
    }

    useEffect(() => {
        const activeMenu: MenuItemType = appData["menus"]
            .find((menu) => menu.route === window.location.pathname) || defaultMenuItem;
        setActiveMenu(activeMenu.id)
    }, [])

    return (
        <nav id="navmenu" className="navmenu">
            <ul>
                {appData["menus"].map( (menu) => 
                    <MenuItem 
                        id={menu.id}
                        title={menu.title} 
                        link={menu.route} 
                        icon={menu.icon} 
                        key={menu.id}
                        activeMenu={menu.id === menuId}
                        setActiveMenu={() => setActiveMenu(menu.id)} />
                    )
                }
            </ul>
        </nav>
    )
}

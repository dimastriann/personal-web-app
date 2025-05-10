import React, { useState, useEffect, JSX } from "react";
import { Home, User, Laptop, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import appData from "../data/my_data.json";

type MenuItemType = {
    id: string;
    title: string;
    route: string;
    icon: string;
};

interface MenuItemProps {
    id: string;
    title: string;
    link: string;
    icon: string;
    activeMenu: boolean;
    setActiveMenu: (val: string) => void;
}

const MenuIcon: Record<string, JSX.Element> = {
    home: <Home className="w-6 h-6 mb-1" />,
    user: <User className="w-6 h-6 mb-1" />,
    profile: <Laptop className="w-6 h-6 mb-1" />,
    contact: <Phone className="w-6 h-6 mb-1" />,
};

export const MenuItem: React.FC<MenuItemProps> = ({
    id,
    title,
    link,
    icon,
    activeMenu,
    setActiveMenu,
}) => {
    return (
        <Link to={link} onClick={() => setActiveMenu(id)}>
            <button
                className={`flex flex-col items-center text-xs p-3 rounded-xl transition-all w-[3.5rem] ${
                    activeMenu
                        ? "bg-[#FDB913] text-[#004D98]"
                        : "hover:bg-[#A50044]"
                } cursor-pointer`}
                onClick={() => setActiveMenu("home")}
            >
                {MenuIcon[icon]}
                {title}
            </button>
        </Link>
    );
};

export const Menu: React.FC = () => {
    const [menuId, setActiveMenu] = useState<string>("");

    const defaultMenuItem: MenuItemType = {
        id: "home",
        title: "Home",
        route: "/",
        icon: "home",
    };

    useEffect(() => {
        const activeMenu: MenuItemType =
            appData["menus"].find(
                (menu) => menu.route === window.location.pathname
            ) || defaultMenuItem;
        setActiveMenu(activeMenu.id);
    }, []);

    return (
        <nav
            id="navmenu"
            className="right-0 z-10 flex justify-center gap-10 py-4 bg-[#004D98]/90 backdrop-blur-md shadow-lg border-b border-[#002F6C] text-white"
        >
            {appData["menus"].map((menu) => (
                <MenuItem
                    id={menu.id}
                    title={menu.title}
                    link={menu.route}
                    icon={menu.icon}
                    key={menu.id}
                    activeMenu={menu.id === menuId}
                    setActiveMenu={() => setActiveMenu(menu.id)}
                />
            ))}
        </nav>
    );
};

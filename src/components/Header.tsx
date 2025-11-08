'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, User, Laptop, Contact } from 'lucide-react';

import appData from '../data/my_data.json';

export default function Header() {
  const [isNotFound, setIsNotFound] = useState(false);
  const pathname = usePathname();
  const { menus } = appData;

  useEffect(() => {
    const notFound = document.getElementById('not-found')!;
    setIsNotFound(!!notFound);
  }, [pathname]);

  return (
    <header
      className="header fixed w-full md:top-0 z-50 max-md:bottom-0"
      style={{ display: isNotFound ? 'none' : 'unset' }}
    >
      <nav
        id="navmenu"
        className="right-0 z-10 flex justify-center gap-10 py-3 bg-[#004D98] backdrop-blur-md shadow-lg border-b border-[#002F6C] text-white"
      >
        {menus.map((menu) => (
          <MenuItem
            key={menu.id}
            id={menu.id}
            title={menu.title}
            icon={menu.icon}
            link={menu.route}
            isActiveMenu={menu.route === pathname}
          />
        ))}
      </nav>
    </header>
  );
}

type MenuItemProps = {
  id: string;
  title: string;
  link: string;
  icon: string;
  isActiveMenu: boolean;
};

const MenuIcon: Record<string, React.JSX.Element> = {
  home: <Home className="me-1" />,
  user: <User className="me-1" />,
  profile: <Laptop className="me-1" />,
  contact: <Contact className="me-1" />,
};

export function MenuItem({
  id,
  title,
  link,
  icon,
  isActiveMenu,
}: MenuItemProps) {
  return (
    <>
      <Link
        id={id}
        href={link}
        className={`flex hover:bg-blue-400 p-2 rounded-md ${isActiveMenu ? 'active bg-blue-500' : ''}`}
      >
        {MenuIcon[icon]}
        {title}
      </Link>
    </>
  );
}

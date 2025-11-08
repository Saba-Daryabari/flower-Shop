import { useState, useEffect } from "react";
import type { MenuNode } from "./types";

interface MenuProps {
  menuData: MenuNode[];
}

function Menu({ menuData }: MenuProps) {
  const [activeMenu, setActiveMenu] = useState<MenuNode | null>(null);
  const [activeChild, setActiveChild] = useState<MenuNode | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    let timeoutId: number;

    if (isClosing && activeMenu) {
      timeoutId = setTimeout(() => {
        setActiveMenu(null);
        setIsClosing(false);
      }, 150);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isClosing, activeMenu]);

  const handleMouseEnterMenu = (item: MenuNode) => {
    setIsClosing(false);
    setActiveMenu(item);
  };

  const handleMouseLeaveMenu = () => {
    setIsClosing(true);
  };

  const handleMouseEnterDropdown = () => {
    setIsClosing(false);
  };

  const handleMouseLeaveDropdown = () => {
    setIsClosing(true);
  };

  return (
    <ul className="mainMenu">
      {menuData.map((item, index) => {
        const hasChildren = !!item.links?.length;

        return (
          <li
            key={index}
            className="mainMenuItem"
            onMouseEnter={() => hasChildren && handleMouseEnterMenu(item)}
            onMouseLeave={handleMouseLeaveMenu}
          >
            <a href={item.url}>{item.title}</a>

            {/* Dropdown */}
            {hasChildren && activeMenu === item && (
              <div
                className="megaDropdown"
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                {/* Left column — submenu */}
                <ul className="submenuColumn">
                  {item.links?.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      onMouseEnter={() => setActiveChild(sub)}
                      className={`submenuItem ${
                        activeChild === sub ? "active" : ""
                      }`}
                    >
                      {sub.title}
                    </li>
                  ))}
                </ul>

                {/* Right column — child items */}
                <ul className="childColumn">
                  {activeChild?.links?.map((child, childIndex) => (
                    <li key={childIndex}>
                      <a href={child.url}>{child.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;

import { useState } from "react";
import type { MenuNode } from "./types";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
interface MenuProps {
  menuData: MenuNode[];
}

function MobileMenu({ menuData }: MenuProps) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  function toggleMenu(index: number) {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  }
  return (
    <ul className="mobileMenuList">
      {menuData.map((item: MenuNode, index: number) => (
        <li key={index}>
          <div className="mobileMenuItems">
            <a href={item.url} className="mobileMenuTitle">
              {item.title}
            </a>
            {item.links && item.links.length > 0 && (
              <span className="menuItemArrow" onClick={() => toggleMenu(index)}>
                {openItems[index] ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowRight />
                )}
              </span>
            )}
          </div>
          {openItems[index] && item.links && (
            <MobileMenu menuData={item.links} />
          )}
        </li>
      ))}
    </ul>
  );
}
export default MobileMenu;

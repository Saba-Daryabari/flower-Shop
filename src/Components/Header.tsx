import { useState } from "react";
import logo from "../assets/logo.svg";
import "../styles/header.scss";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import { IoIosMenu, IoIosSearch, IoMdPerson } from "react-icons/io";
import SearchBar from "./SearchBar";
import type { MenuNode } from "./types";
function Header() {
  const [openMobile, setOpenMobile] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const MenuItems: MenuNode[] = [
    {
      title: "Furniture",
      url: "/furniture",
      level: 0,
      links: [
        {
          title: "Living",
          url: "/furniture/living",
          level: 1,
          links: [
            { title: "Sofas", url: "/furniture/living/sofas", level: 2 },
            {
              title: "Sectionals",
              url: "/furniture/living/sectionals",
              level: 2,
            },
            {
              title: "Coffee Tables",
              url: "/furniture/living/coffee-tables",
              level: 2,
            },
            {
              title: "TV Stands",
              url: "/furniture/living/tv-stands",
              level: 2,
            },
          ],
        },
        {
          title: "Dining",
          url: "/furniture/dining",
          level: 1,
          links: [
            {
              title: "Dining Tables",
              url: "/furniture/dining/tables",
              level: 2,
            },
            {
              title: "Dining Chairs",
              url: "/furniture/dining/chairs",
              level: 2,
            },
            {
              title: "Bar Stools",
              url: "/furniture/dining/bar-stools",
              level: 2,
            },
          ],
        },
        {
          title: "Bedroom",
          url: "/furniture/bedroom",
          level: 1,
          links: [
            { title: "Beds", url: "/furniture/bedroom/beds", level: 2 },
            {
              title: "Dressers & Chests",
              url: "/furniture/bedroom/dressers",
              level: 2,
            },
            {
              title: "Nightstands",
              url: "/furniture/bedroom/nightstands",
              level: 2,
            },
            {
              title: "Benches & Stools",
              url: "/furniture/bedroom/benches",
              level: 2,
            },
          ],
        },
        {
          title: "Office",
          url: "/furniture/office",
          level: 1,
          links: [
            { title: "Desks", url: "/furniture/office/desks", level: 2 },
            {
              title: "Office Chairs",
              url: "/furniture/office/chairs",
              level: 2,
            },
            {
              title: "Bookcases",
              url: "/furniture/office/bookcases",
              level: 2,
            },
          ],
        },
        {
          title: "Outdoor",
          url: "/furniture/outdoor",
          level: 1,
          links: [
            {
              title: "Outdoor Sofas",
              url: "/furniture/outdoor/sofas",
              level: 2,
            },
            {
              title: "Dining Sets",
              url: "/furniture/outdoor/dining-sets",
              level: 2,
            },
            {
              title: "Lounge Chairs",
              url: "/furniture/outdoor/lounge-chairs",
              level: 2,
            },
          ],
        },
      ],
    },
    {
      title: "Décor",
      url: "/decor",
      level: 0,
      links: [
        {
          title: "Lighting",
          url: "/decor/lighting",
          level: 1,
          links: [
            {
              title: "Table Lamps",
              url: "/decor/lighting/table-lamps",
              level: 2,
            },
            {
              title: "Floor Lamps",
              url: "/decor/lighting/floor-lamps",
              level: 2,
            },
            {
              title: "Ceiling Lights",
              url: "/decor/lighting/ceiling-lights",
              level: 2,
            },
          ],
        },
        {
          title: "Wall Art",
          url: "/decor/wall-art",
          level: 1,
          links: [
            { title: "Prints", url: "/decor/wall-art/prints", level: 2 },
            { title: "Mirrors", url: "/decor/wall-art/mirrors", level: 2 },
          ],
        },
        {
          title: "Rugs",
          url: "/decor/rugs",
          level: 1,
          links: [
            { title: "Area Rugs", url: "/decor/rugs/area-rugs", level: 2 },
            {
              title: "Outdoor Rugs",
              url: "/decor/rugs/outdoor-rugs",
              level: 2,
            },
          ],
        },
      ],
    },
    {
      title: "Beds",
      url: "/beds",
      level: 0,
    },
    {
      title: "Collections",
      url: "/collections",
      level: 0,
    },
    {
      title: "Gallery",
      url: "/gallery",
      level: 0,
    },
  ];

  function toggleMenu() {
    setOpenMobile(!openMobile);
  }

  return (
    <div className="navigation">
      <div className="header">
        {isSearchOpen ? (
          <SearchBar
            isVisible={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            menuData={MenuItems}
          />
        ) : (
          <>
            <a href="#" className="logo">
              <img src={logo} alt="logo" />
            </a>
            <div className="desktopHeader">
              <Menu menuData={MenuItems} />
            </div>
            <div className="searchIcon" onClick={() => toggleSearch()}>
              <IoIosSearch />
            </div>
            <div className="loginIcon">
              <IoMdPerson />
            </div>
            <div onClick={() => toggleMenu()} className="menuIcon">
              <IoIosMenu />
            </div>
          </>
        )}
      </div>
      <div className={`${openMobile && "mobileHeader"}`}>
        {openMobile && <MobileMenu menuData={MenuItems} />}
      </div>
    </div>
  );
}

export default Header;

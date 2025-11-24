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
    title: "Home",
    url: "/",
    level: 0,
    links: [
      {
        title: "Bouquets",
        url: "/flowers/bouquets",
        level: 1,
        items: [
          { title: "Roses", url: "/flowers/bouquets/roses", level: 2 },
          { title: "Tulips", url: "/flowers/bouquets/tulips", level: 2 },
          { title: "Lilies", url: "/flowers/bouquets/lilies", level: 2 },
          { title: "Mixed Bouquets", url: "/flowers/bouquets/mixed", level: 2 },
        ],
      },
      {
        title: "Plants",
        url: "/flowers/plants",
        level: 1,
        items: [
          { title: "Indoor Plants", url: "/flowers/plants/indoor", level: 2 },
          { title: "Outdoor Plants", url: "/flowers/plants/outdoor", level: 2 },
          { title: "Succulents", url: "/flowers/plants/succulents", level: 2 },
        ],
      },
      {
        title: "Gifts",
        url: "/flowers/gifts",
        level: 1,
        items: [
          { title: "Vases", url: "/flowers/gifts/vases", level: 2 },
          { title: "Greeting Cards", url: "/flowers/gifts/cards", level: 2 },
          { title: "Chocolates", url: "/flowers/gifts/chocolates", level: 2 },
        ],
      },
    ],
  },
  {
    title: "About Us",
    url: "/about-us",
    level: 0,
    links: [
      {
        title: "Our Story",
        url: "/about/story",
        level: 1,
        items: [
          { title: "History", url: "/about/story/history", level: 2 },
          { title: "Team", url: "/about/story/team", level: 2 },
        ],
      },
      {
        title: "Services",
        url: "/about/services",
        level: 1,
        items: [
          { title: "Delivery", url: "/about/services/delivery", level: 2 },
          { title: "Custom Orders", url: "/about/services/custom-orders", level: 2 },
        ],
      },
    ],
  },
  {
    title: "Shop",
    url: "/shop",
    level: 0,
  },
  {
    title: "Blog",
    url: "/blog",
    level: 0,
  },
  {
    title: "Contact",
    url: "/contact",
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

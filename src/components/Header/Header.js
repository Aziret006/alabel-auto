import React, { useState } from "react";
import Logo from "../Logo/Logo";
import NavigationBlock from "./NavigationBlock/NavigationBlock";
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState(false);

  const actionMenu = () => {
    setActive(!active);
    document.body.style.overflowY = active ? "auto" : "hidden";
  };

  return (
    <header className="header">
      <div className="container header_con">
        <div className="header_in">
          <div className={`page ${active ? "page_active" : null}`}>
            <div className={`menu ${active ? "menu_active" : null}`}>
              <div>
                <NavigationBlock active={active} actionMenu={actionMenu} />
                <div className="menu_info_block">
                  <p className="menu_info_phone">Phone</p>
                  <a href={`tel:${+14316888484}`}>+1 431 688 8484</a>
                </div>
                <div className="menu_info_block">
                  <p className="menu_info_jps">Main Office</p>
                  <span>1600-2300 YONGE ST TORONTO ON M4P 1E4 CANADA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="header_logo">
            <Logo />
          </div>
          <div className="header_nav">
            <NavigationBlock />
          </div>
          <div className="header_contacts">
            <a className="header_contact" href={`tel:${+14316888484}`}>
              +1 431 688 8484
            </a>
            <a className="contacts_whatsapp" href="#" />
            <span className="contacts_instagram">
              <a href="#" />
            </span>
            <a className="contacts_fc" href="#" />
            <a className="contacts_telegram" href="#" />
          </div>
          <div
            className={`burger ${active ? "burger_active" : ""}`}
            onClick={actionMenu}
          >
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

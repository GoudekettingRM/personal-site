import React, { useState } from "react";
import "./fullscreen.css";
import { Link } from "react-router-dom";

export const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pages = ["home", "about", "contact", "projects"];
  return (
    <div>
      {open && (
        <div className="FullscreenMenu">
          <div className="menuItems">
            {pages.map((page, i) => {
              const capitalized =
                page.charAt(0).toUpperCase() + page.substring(1);
              const adjustedPage = page === "home" ? "" : page;
              const name = i % 2 === 0 ? "itemEven" : "itemUneven";
              return (
                <Link
                  key={i}
                  to={`/${adjustedPage}`}
                  className={name}
                  style={{ animationDelay: `${50 * i}ms` }}
                  onClick={() => setOpen(!open)}>
                  {capitalized}
                </Link>
              );
            })}
          </div>
        </div>
      )}
      <button
        className="FullscreenMenuToggler"
        style={{ color: open ? "white" : "black" }}
        onClick={() => setOpen(!open)}>
        <svg width="2rem" height="2rem" viewBox="0 0 24 24">
          <g stroke="currentColor" strokeWidth={2}>
            <line x1="0" y1="4" x2="24" y2="4" />
            <line x1="0" y1="12" x2="24" y2="12" />
            <line x1="0" y1="20" x2="24" y2="20" />
          </g>
        </svg>
      </button>
    </div>
  );
};

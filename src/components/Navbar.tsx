import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import hamburderIcon from "../assets/hamburger.svg";
import { useTheme } from "../hooks/useTheme";
import { pageConfigs } from "../pages/pageConfigs";
import "./Navbar.css";

export default function Navbar() {
  const { themeColor, setThemeColor } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const prevPathnameRef = useRef(location.pathname);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Update theme color when route changes
  useEffect(() => {
    const currentPageColor =
      pageConfigs[location.pathname]?.themeColor || "salmon";
    setThemeColor(currentPageColor);
  }, [location.pathname, setThemeColor]);

  useEffect(() => {
    if (prevPathnameRef.current !== location.pathname) {
      prevPathnameRef.current = location.pathname;
      const timeoutId = setTimeout(() => {
        setIsMenuOpen(false);
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (backgroundRef.current) {
      if (isMenuOpen) {
        backgroundRef.current.style.backgroundColor = themeColor || "salmon";
        backgroundRef.current.style.opacity = "1";
      } else {
        backgroundRef.current.style.opacity = "0";
      }
    }
  }, [isMenuOpen, themeColor]);

  const navItems = [
    { label: "Taipei", path: "/" },
    { label: "101", path: "/101" },
    { label: "Long Shan Temple", path: "/longshan-temple" },
    { label: "Night Market", path: "/night-market" },
  ];

  return (
    <nav>
      <h2>Made by xxx</h2>
      <h2>Taipei.</h2>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <img
          src={hamburderIcon}
          width={20}
          height={20}
          fetchPriority="high"
          alt="Menu"
        />
      </button>

      <div
        ref={backgroundRef}
        className={`menu-background ${isMenuOpen ? "open" : ""}`}
      />

      <div ref={menuRef} className={`menu-content ${isMenuOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} onClick={closeMenu} viewTransition>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

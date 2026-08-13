import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import {
  CategoriesContext,
  useCategories,
} from "../../contexts/CategoriesContext";

// Icons
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";

const navLinks = [
  { key: 0, title: "Home", link: "/" },
  { key: 1, title: "About", link: "/about" },
  { key: 2, title: "Accessories", link: "/accessories" },
  { key: 3, title: "Blog", link: "/blog" },
  { key: 4, title: "Contact", link: "/contact" },
];

export default function BottomHeader() {
  const [openCategories, setOpenCategories] = useState(false);
  const location = useLocation();
  const { categories, isLoading } = useCategories(CategoriesContext);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenCategories(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bottom-header">
      <div className="container">
        <nav>
          <div className="category-map" ref={dropdownRef}>
            <div
              className="category-button"
              onClick={() => {
                setOpenCategories(!openCategories);
              }}
            >
              <IoMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>
            <div
              className={`category-nav-list ${openCategories ? "active" : ""}`}
            >
              {categories.map((category) => (
                <Link key={category._id} to={category.slug}>
                  {" "}
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="nav-links">
            {navLinks.map((link) => (
              <li
                key={link.key}
                className={location.pathname === link.link ? "active" : ""}
              >
                <Link to={link.link}>{link.title}</Link>
              </li>
            ))}
          </div>
        </nav>
        <div className="sign-regs-icon">
          <FaSignInAlt />
          <FaUserPlus />
        </div>
      </div>
    </div>
  );
}

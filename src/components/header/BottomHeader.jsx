import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://shop-two-zeta-25.vercel.app/api/v1/categories",
        );
        const data = response.data.data;
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);
  return (
    <div className="bottom-header">
      <div className="container">
        <nav>
          <div className="category-map">
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

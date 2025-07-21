import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import Logo from '@assets/images/header/Header1.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'company', 'services', or null

  const toggleDropdown = (menu) => (e) => {
    e.stopPropagation();
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.open : ''}`}>
          <ul>
            <li onClick={closeMobileMenu}>
              <Link to="/">Home</Link>
            </li>

            <li className={openDropdown === 'company' ? styles.showDropdown : ''}>
              <span className={styles.dropdownToggle} onClick={toggleDropdown('company')}>
                Company <FiChevronDown size={14} />
              </span>
              <div className={styles.dropdown}>
                <Link to="/about-us" onClick={closeMobileMenu}>About Us</Link>
                <Link to="/career" onClick={closeMobileMenu}>Career</Link>
              </div>
            </li>

            <li className={openDropdown === 'services' ? styles.showDropdown : ''}>
              <span className={styles.dropdownToggle} onClick={toggleDropdown('services')}>
                Services <FiChevronDown size={14} />
              </span>
              <div className={styles.dropdown}>
                <Link to="/web-development" onClick={closeMobileMenu}>Web Development</Link>
                <Link to="/app-development" onClick={closeMobileMenu}>App Development</Link>
              </div>
            </li>

            <li onClick={closeMobileMenu}>
              <Link to="/portfolio">Portfolio</Link>
            </li>

            {/* <li onClick={closeMobileMenu}>
              <Link to="/blog">Blog</Link>
            </li> */}

            <li onClick={closeMobileMenu}>
              <Link to="/contact">
                <button className={styles.contactBtn}>Contact Us</button>
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
}

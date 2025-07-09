import { useState } from 'react';
import styles from './Header.module.scss';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import Logo from '@assets/images/header/header_logo.webp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.open : ''}`}>
          <ul>
            <li onClick={closeMobileMenu}>Home</li>

            <li
              className={`${dropdownOpen ? styles.showDropdown : ''}`}
              onClick={toggleDropdown}
            >
              <span className={styles.dropdownToggle}>
                Company <FiChevronDown size={14} />
              </span>
              <div
                className={`${styles.dropdown}`}
                style={{
                  maxHeight: dropdownOpen ? '500px' : '0',
                  opacity: dropdownOpen ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>Menu 1</div>
                <div>Menu 2</div>
              </div>
            </li>

            <li onClick={closeMobileMenu}>
              Services
            </li>
            <li onClick={closeMobileMenu}>Blog</li>
            <li>
              <button className={styles.contactBtn}>Contact Us</button>
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

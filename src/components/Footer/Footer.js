// Footer.js
import React from 'react';
import styles from './Footer.module.scss';
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
} from 'react-icons/fa6';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import Logo from '@assets/images/header/Footer2.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <img src={Logo} alt="Logo" className={styles.logo} />
          <p>
            DGMTech Solutions is a Surat-based IT company <br />specializing in custom web development,<br /> mobile app development, and UI/UX design.
          </p>
          <div className={styles.socialIcons}>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
          </div>
        </div>

        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/about-us">About</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">SEO Services</a></li>
            <li><a href="#">SMO Service</a></li>
            <li><a href="#">Facebook Ads</a></li>
            <li><a href="/web-development">Web Development</a></li>
            <li><a href="/app-development">App Development</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Contact Us</h4>
          <ul>
            <li><MdEmail />  Write to us :<br />dgmtechsolution@gmail.com</li>
            <li><BsTelephoneFill /> +91 982580-5271</li>
            <li>
              <MdLocationOn />
              119 Rise on plaza,<br /> Sarthana Jakatnaka,<br /> Surat, Gujarat-395008
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2024 DGM, All Right Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

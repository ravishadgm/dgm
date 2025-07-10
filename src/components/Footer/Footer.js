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

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <img src="/logo.svg" alt="IndyLogix" className={styles.logo} />
          <p>
            IndyLogix is a one stop Digital Marketing Agency in Ahmedabad. <br />
            Let’s Talk, Join Hands & take your business to new heights.
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
            <li><a href="#">About</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">SEO Services</a></li>
            <li><a href="#">SMO Service</a></li>
            <li><a href="#">Facebook Ads</a></li>
            <li><a href="#">WordPress Development</a></li>
            <li><a href="#">Shopify Development</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Contact Us</h4>
          <ul>
            <li><MdEmail /> info@indylogix.com</li>
            <li><BsTelephoneFill /> Sales : +91 75748 16161</li>
            <li><BsTelephoneFill /> HR : +91 96877 16161</li>
            <li>
              <MdLocationOn />
              406-408, Devnandan Mega Mall, <br /> Opp. Sanyas Ashram, Ashram Rd,<br />
              Ellisbridge, Ahmedabad, Gujarat 380006
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2011–2025 — IndyLogix Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

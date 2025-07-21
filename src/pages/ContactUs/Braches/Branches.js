import React from 'react';
import styles from './Branches.module.scss';
import { FaLandmark, FaGem, FaBuilding, FaUser, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Branches() {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.card} style={{ backgroundColor: '#f5e9ff' }}>
                    <FaLandmark className={styles.topIcon} />
                    <h3>H.O. : <span>Ahmedabad</span></h3>
                    <p><FaMapMarkerAlt /> 406-408 Devnandan Mega Mall, Opp. Sanyas Ashram, Ashram Road, Ellis Bridge, Ahmedabad, Gujarat – 380006</p>
                    <p><FaPhoneAlt /> +91 75748 16161</p>
                    <p><FaEnvelope /> info@indylogix.com</p>
                </div>

                <div className={styles.card} style={{ backgroundColor: '#fff2de' }}>
                    <FaGem className={styles.topIcon} />
                    <h3>B.O. : <span>Surat</span></h3>
                    <p><FaMapMarkerAlt /> 1027, 3rd Floor, West Field Shopping Complex, Near ST Xaviers School, Ghoddod Road, Surat, Gujarat – 395007</p>
                    <p><FaPhoneAlt /> +91 75748 16161</p>
                    <p><FaEnvelope /> info@indylogix.com</p>
                </div>

                <div className={styles.card} style={{ backgroundColor: '#e6fcfc' }}>
                    <FaBuilding className={styles.topIcon} />
                    <h3>B.O. : <span>Vadodara</span></h3>
                    <p><FaMapMarkerAlt /> 418, Pinnacle Plaza, Near Tulsidham Char Rasta, Manjalpur, Vadodara, Gujarat – 390011</p>
                    <p><FaPhoneAlt /> +91 75748 16161</p>
                    <p><FaEnvelope /> info@indylogix.com</p>
                </div>

                <div className={styles.card} style={{ backgroundColor: '#ffecec' }}>
                    <FaUser className={styles.topIcon} />
                    <h3>B.O. : <span>V.V Nagar</span></h3>
                    <p><FaMapMarkerAlt /> 105, Sigma Complex, Above D-Mart, Nr. Sardar Patel Statue, Vallabh Vidyanagar, Gujarat – 388120</p>
                    <p><FaPhoneAlt /> +91 75748 16161</p>
                    <p><FaEnvelope /> info@indylogix.com</p>
                </div>
            </div>
        </section>
    );
}

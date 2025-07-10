import React, { useState } from "react";
import styles from "./Technology.module.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiJquery,
  SiPhp,
  SiOpenjdk,
  SiGo,
  SiDotnet,
  SiApple,
  SiAndroid,
  SiFlutter,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiCodeigniter,
  SiLaravel,
  SiSpring,
  SiIonic,
  SiCoronaengine,
  SiGooglecloud,
  SiGodaddy,
  SiHostinger,
  SiCpanel,
  SiGoogleanalytics,
  SiPlausibleanalytics,
} from "react-icons/si";
import { FaShoePrints, FaGlobe, FaInternetExplorer } from "react-icons/fa";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Mobile",
  "Databases",
  "Framework",
  "Cloud",
  "Domain | Hosting",
  "Analytics",
];

const techIcons = [
  { icon: <SiHtml5 color="#e34f26" />, category: "Frontend" },
  { icon: <SiCss3 color="#1572b6" />, category: "Frontend" },
  { icon: <SiJavascript color="#f7df1e" />, category: "Frontend" },
  { icon: <SiBootstrap color="#7952b3" />, category: "Frontend" },
  { icon: <SiJquery color="#0769ad" />, category: "Frontend" },

  { icon: <SiPhp color="#8892be" />, category: "Backend" },
  { icon: <SiOpenjdk color="#007396" />, category: "Backend" },
  { icon: <SiGo color="#00add8" />, category: "Backend" },
  { icon: <SiDotnet color="#512bd4" />, category: "Backend" },

  { icon: <SiApple color="#000000" />, category: "Mobile" },
  { icon: <SiAndroid color="#3ddc84" />, category: "Mobile" },
  { icon: <SiFlutter color="#02569b" />, category: "Mobile" },

  { icon: <SiMysql color="#4479a1" />, category: "Databases" },
  { icon: <SiPostgresql color="#336791" />, category: "Databases" },
  { icon: <SiFirebase color="#ffca28" />, category: "Databases" },

  { icon: <SiCodeigniter color="#ee4623" />, category: "Framework" },
  { icon: <SiLaravel color="#ff2d20" />, category: "Framework" },
  { icon: <SiSpring color="#6db33f" />, category: "Framework" },
  { icon: <SiIonic color="#3880ff" />, category: "Framework" },
  { icon: <SiCoronaengine color="#f96f0b" />, category: "Framework" },

  { icon: <FaShoePrints color="#ff9900" />, category: "Cloud" },
  { icon: <SiGooglecloud color="#4285f4" />, category: "Cloud" },

  { icon: <SiGodaddy color="#7db701" />, category: "Domain | Hosting" },
  { icon: <SiHostinger color="#673de6" />, category: "Domain | Hosting" },
  { icon: <FaGlobe color="#4285f4" />, category: "Domain | Hosting" },
  { icon: <SiCpanel color="#ff6c2c" />, category: "Domain | Hosting" },

  { icon: <SiGoogleanalytics color="#f9ab00" />, category: "Analytics" },
  { icon: <SiPlausibleanalytics color="#5850ec" />, category: "Analytics" },
  { icon: <FaInternetExplorer color="#1ebbee" />, category: "Analytics" },
];

const Technology = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredIcons =
    selectedCategory === "All"
      ? techIcons
      : techIcons.filter((item) => item.category === selectedCategory);

  return (
    <section className={styles.technology}>
      <div className={styles.container}>
        <h2>We Are A Technology Services Partner</h2>

        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? styles.active : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredIcons.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;

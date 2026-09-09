import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.clubLogo}>
        <Image
          src="/assets/logo.png"
          alt="cp"
          width={48}
          height={41}
          className={styles.clubLogoImg}
        />
        <h1>CyberPhoenix</h1>
      </div>

      <div className={styles.part2}>
        <div>CSE Department</div>
        <div>GJUST, Hisar</div>
      </div>

      <div className={styles.copyrightInfo}>
        &copy; {new Date().getFullYear()} CyberPhoenix
      </div>
    </footer>
  );
}

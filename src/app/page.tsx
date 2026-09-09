import Button from "@/components/ui/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.section1}>
        <h1 className={styles.heroHeading}>
          <span className={styles.highlightText}>SECURING TOMORROW&apos;S</span>
          <span>WORLD TODAY.</span>
        </h1>
        <div className={styles.heroSubtext}>
          <span>Every realm needs guardians—cyberspace is no exception.</span>
          <span>Thus we rise to shatter myths, conquer cybersecurity,</span>
          <span>and help forge the defenders of cyberspace!</span>
        </div>
        <div style={{ marginTop: "3rem" }}>
          <Button href="https://chat.whatsapp.com/C62gD1n4QmGAUMtuj9B4KR" target="_blank" rel="noopener noreferrer">
            Join Us on Whatsapp
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section2}>
        <h2 className={styles.sectionTitle}>
          <span>WHO WE </span>
          <span className={styles.highlightText}>ARE?</span>
        </h2>
        <div className={styles.sectionContent}>
          <p>
            The digital realm is engulfed in mystery, with evil lurking around every corner ready to hunt the innocent souls who remain oblivious to this world.
          </p>
          <p>
            But there are those who refuse to let innocent souls fall prey to the dangers of the digital world. They fight cyber threats, and empower safe exploration. They are here to teach the ways of this realm, empowering everyone to explore its wonders safely and without fear. Meet these guardians below.
          </p>
          <Button href="/about">About Us</Button>
        </div>
      </section>
    </main>
  );
}

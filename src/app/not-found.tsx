import { ShieldAlert } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <ShieldAlert size={80} strokeWidth={1.5} />
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.title}>Breach Detected: Page Not Found</h2>
      <p className={styles.description}>
        The sector you are trying to access does not exist in our mainframe. 
        It may have been moved, deleted, or never existed.
      </p>
      <Button href="/">Return to Base</Button>
    </main>
  );
}

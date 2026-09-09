import { ShieldAlert } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <ShieldAlert size={80} strokeWidth={1.5} />
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.title}>Page Not Found</h2>
      <p className={styles.description}>
        The requested resource could not be located in our system. It may have been moved or deleted.
      </p>
      <Button href="/">Go to Home</Button>
    </main>
  );
}

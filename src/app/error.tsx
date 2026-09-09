"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { AlertOctagon } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./not-found.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className={styles.container}>
      <AlertOctagon size={80} strokeWidth={1.5} />
      <h1 className={styles.errorCode}>500</h1>
      <h2 className={styles.title}>System Failure</h2>
      <p className={styles.description}>
        A critical error occurred in the mainframe. Our guardians have been notified.
      </p>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <Button onClick={() => reset()}>Retry Sequence</Button>
        <Button href="/">Return to Base</Button>
      </div>
    </main>
  );
}

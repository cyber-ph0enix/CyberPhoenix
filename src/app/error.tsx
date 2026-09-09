"use client";

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
    console.error(error);
  }, [error]);

  return (
    <main className={styles.container}>
      <AlertOctagon size={80} strokeWidth={1.5} />
      <h1 className={styles.errorCode}>500</h1>
      <h2 className={styles.title}>System Error</h2>
      <p className={styles.description}>
        An unexpected error occurred while processing your request. 
      </p>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <Button onClick={() => reset()}>Retry</Button>
        <Button href="/">Go to Home</Button>
      </div>
    </main>
  );
}

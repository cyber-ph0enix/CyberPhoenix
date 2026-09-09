"use client";

import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
}

export default function Button({ href, children, className, ...props }: ButtonProps) {
  const customClass = `${styles.btn} ${className || ""}`.trim();

  if (href) {
    return (
      <Link href={href} className={customClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={customClass} {...props}>
      {children}
    </button>
  );
}

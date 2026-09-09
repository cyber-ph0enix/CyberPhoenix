import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CyberPhoenix",
  description: "Securing Tomorrow's World Today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

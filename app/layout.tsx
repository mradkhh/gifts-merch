import type { Metadata } from "next";
import "./globals.css";
import "./(assets)/fonts/stylesheet.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-gilroy antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

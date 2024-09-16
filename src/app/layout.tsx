import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";

import Navbar from "@/components/Navbar";

import ThemeProvider from "@/context/ThemeProvider";
import "./globals.css";

const fonts = Comic_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Johnson Mwakazi",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fonts.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

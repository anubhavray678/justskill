"use client";
import "./globals.css";
import { Lato } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Head from "./Head";
import SplashScreen from "@/components/SplashScreen";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);
  return (
    <html lang="en">
      <body className={lato.className}>
        <Head />
        <main>
          {isLoading && isHome ? (
            <SplashScreen finishLoading={() => setIsLoading(false)} />
          ) : (
            <>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Header />
                <div className="max-w-7xl mx-auto p-6 min-h-screen">
                  {children}
                </div>
                <Footer />
              </ThemeProvider>
            </>
          )}
        </main>
      </body>
    </html>
  );
}

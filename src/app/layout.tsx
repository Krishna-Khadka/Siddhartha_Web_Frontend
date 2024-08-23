import type { Metadata } from "next";
import "./globals.css";

import NextTopLoader from "nextjs-toploader";
import Navbar from "@/global/Nabvar";
import TopNav from "@/global/TopNavbar";
import Footer from "@/global/Footer";
import { Roboto_Condensed } from "@next/font/google";
import CustomCursor from "@/components/CustomCursor";
import AOSInitializer from "@/components/AOSInitializer";
import NoticePopup from "@/components/NoticePopup ";
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siddhartha School",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <NextTopLoader color="#EA062B" showSpinner={true} height={5} />
        <NoticePopup />
        <CustomCursor>
          <AOSInitializer />
          <TopNav />
          <Navbar />
          {children}
          <Footer />
        </CustomCursor>
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ClashGroteskRegular = localFont({
  src: "./fonts/ClashGrotesk-Regular.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const ClashGroteskSemibold = localFont({
  src: "./fonts/ClashGrotesk-Semibold.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "FooFest",
  description: "Generated Daniela and Marie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ClashGroteskRegular.variable} ${ClashGroteskSemibold.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

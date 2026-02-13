import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import{ ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "BuyUp - Your Ultimate Online Shopping Destination",
  description: "BuyUp is a platform that allows users to buy and sell products online. It provides a seamless shopping experience with a wide range of products and secure payment options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="font-poppins antialiased">
      <div className="min-h-screen flex flex-col">
        <Header/>
       <main className="flex-1">{children}</main>
        <Footer/>
      </div>
        </body>
    </html>
    </ClerkProvider>
  );
}

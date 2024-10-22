import ClientLayout from "@/components/ClientLayout";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const sen = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Cow Milk | Organic Cow Milk Store",
  description: "Get fresh and organic cow milk delivered to your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={sen.className}
      >
          <ClientLayout>
            <Navbar />
            {children}
          </ClientLayout>
      </body>
    </html>
  );
}

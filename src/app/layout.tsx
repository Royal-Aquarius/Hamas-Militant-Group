import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto ({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamas Militant Group",
  description: "فلسطين حركة المقاومة الإسلامية حماس",
  icons:{
    icon:{url: '/logo.png' , type: 'image/png'}
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Header/>
        <div>{children}</div>
      <Footer/>
      </body>
    </html>
  );
}

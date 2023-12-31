import Navbar from "./components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./provide";
import Loginmodel from "./authui/Login";
import Registermodal from "./authui/Registration";
import  { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Loginmodel/>
          <Registermodal/>
          <Navbar />
          <Toaster/>
          {children}
        </Providers>
      </body>
    </html>
  );
}

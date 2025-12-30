import { Geist, Geist_Mono , Roboto_Slab} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Expense Tracker",
  description: "Track your expenses easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={robotoSlab.className}
      >
        {children}
      </body>
    </html>
  );
}

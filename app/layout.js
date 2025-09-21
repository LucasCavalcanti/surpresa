import { Geist, Geist_Mono } from "next/font/google";
import "./css/globals.css";
import MusicaPlayer from "./components/MusicaPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Minha pituxinha <3",
  description: "TE AMO MAIS DO QUE PALAVRAS PODEM DIZER!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div>
        <MusicaPlayer />
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}


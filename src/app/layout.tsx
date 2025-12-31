import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./context/LanguageContext";
import { CursorTrail } from './components/CursorTrail';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arnold Kouevi | Systems & Network Engineer | Cloud & DevOps | Cybersecurity",
  description: "Portfolio of Arnold Kouevi, specialized in Cloud, DevOps and Cybersecurity, based on his CV.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <CursorTrail />
        <div className="aurora-background"></div>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Le LanguageProvider doit envelopper TOUT ce qui utilisera la traduction */}
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
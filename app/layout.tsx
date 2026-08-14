import { inter, monomaniac } from "@/src/Theme/core/typography"; 
import ThemeProvider from "@/src/Theme/ThemeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game watcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.className} ${monomaniac.className}`}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

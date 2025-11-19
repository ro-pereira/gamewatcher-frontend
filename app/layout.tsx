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
    <html lang="pt-en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

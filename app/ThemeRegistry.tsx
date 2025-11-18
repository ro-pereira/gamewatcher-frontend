"use client";

import ThemeProvider from "@/src/Theme/ThemeProvider";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

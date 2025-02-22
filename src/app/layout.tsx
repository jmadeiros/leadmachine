import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import FirebaseProvider from "@/components/firebase-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lead Machine - Automate Your Lead Generation",
  description: "Transform your lead generation process with Lead Machine. Automate, optimize, and scale your business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-screen bg-gradient-to-b from-white via-white to-blue-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <FirebaseProvider>{children}</FirebaseProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}

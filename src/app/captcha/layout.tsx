import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
const inter = Noto_Sans_Thai({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Captchas",
  description: "Demo of captchas in Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

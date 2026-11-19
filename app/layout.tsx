
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eagle AI | Intelligence Without Limits",
  description: "Your personal intelligent AI assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}

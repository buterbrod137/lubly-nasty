import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "люблю настеньку <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={ {overflow: `hidden`} }>
        
        <div>
          {children}
        </div>

      </body>
    </html>
  );
} 
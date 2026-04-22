import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./custom.scss";

export const metadata: Metadata = {
  title: "CEPI - Blog",
  description: "Blog CEPI — Lab 4 Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Google Fonts : Lora pour les titres, Open Sans pour le contenu */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark text-white d-flex flex-column min-vh-100">
        {children}
      </body>
    </html>
  );
}

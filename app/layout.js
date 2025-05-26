// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Shaping Team - Expert HR Consultancy Services",
  description: "Discover professional HR solutions including recruitment, payroll, compliance, and more. Empower your business with tailored, efficient, and scalable HR services from SmartHR.",
  manifest: "/manifest.json", // Path to the PWA manifest file
};

export const viewport = {
  themeColor: "#69C8C7",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="theme-color" content={metadata.themeColor} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* PWA Manifest */}
        <link rel="manifest" href={metadata.manifest} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
        <meta property="og:url" content="https://www.plixon.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/assets/images/twitter-image.jpg" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

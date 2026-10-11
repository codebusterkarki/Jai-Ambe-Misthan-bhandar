import "./globals.css";

export const metadata = {
  title:
    "Jai Ambe Sweets | जय अम्बे मिष्ठान भण्डार - 100% Shudh Desi Ghee Mithai",
  description:
    "Authentic Indian Sweets & Namkeen since 1984. Prepared in 100% Pure Desi Ghee with daily fresh chhena, Kashmiri kesar, and premium dry fruits.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF7F0] text-stone-800 antialiased">
        {children}
      </body>
    </html>
  );
}

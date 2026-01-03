import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "LD Holdings",
  description: "Sitio inspirado en Apple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import { useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import LogoIntro from "../components/LogoIntro/LogoIntro";
import { imageData } from "../data/imageData";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function HomePage() {
  const { index } = useParams();

  const BRAND = "It's fine";
  const image =
    index !== undefined
      ? imageData.filter((image) => image.category === "japan")[parseInt(index)]
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);

    const timeoutId = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 2000);

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <Navigation brand={BRAND} />

      <main>
        <AnimatePresence>
          <LogoIntro text={BRAND} />
          <Gallery imageItem={image || null} />
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}

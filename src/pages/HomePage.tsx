import React from "react";
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
  const image = index
    ? imageData.filter((image) => image.category === "japan")[parseInt(index)]
    : null;

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

import "./App.scss";
import Gallery from "./components/Gallery/Gallery";
import LogoIntro from "./components/LogoIntro/LogoIntro";
import Footer from "./components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const BRAND = "It's fine";

  return (
    <>
      <Navigation brand={BRAND} />

      <main>
        <AnimatePresence>
          <LogoIntro text={BRAND} />
          <Gallery />
        </AnimatePresence>
      </main>

      <Footer />
    </>

    // </AnimatePresence>
  );
}

export default App;

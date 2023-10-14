import React, { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { imageData } from "../../data/imageData";

const images = imageData.filter((image) => image.category === "japan");

type ImageItem = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  location: string;
  date: string;
  by: string;
  link: string;
  category: string;
  src: string;
};

type ImageContext = {
  selectedImage: ImageItem | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageItem | null>>;
};

const ImageContext = createContext({} as ImageContext);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  return (
    <ImageContext.Provider value={{ selectedImage, setSelectedImage }}>
      <motion.div
        layout="position"
        className="gallery-wrapper"
        transition={{
          type: "spring",
          opacity: { duration: 1, delay: 2 },
        }}
      >
        {images.map((image, index) => (
          <GalleryItem key={image.id} image={image} index={index} />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div>
            <div className="shade" onClick={() => setSelectedImage(null)} />
            <div className="wrapper">
              <motion.img
                layout
                layoutId={selectedImage?.src}
                className=""
                src={selectedImage?.src}
                alt=""
              />
              <button onClick={() => setSelectedImage(null)}>close</button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ImageContext.Provider>
  );
}

type GalleryItemProps = {
  index: number;
  image: ImageItem;
};

function GalleryItem({ index, image }: GalleryItemProps) {
  const { selectedImage, setSelectedImage } = useContext(ImageContext);

  return (
    <>
      <motion.div
        className="gallery-item"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          selectedImage?.id === image.id
            ? { duration: 0 }
            : { duration: 1, delay: 2 + index * 0.1 }
        }
        onClick={() => setSelectedImage(image)}
      >
        <motion.img
          layout
          layoutId={selectedImage?.id}
          className="thumbnail"
          src={image.src}
          alt=""
        />
        <div>
          <p className="description">{image.location}</p>
        </div>
      </motion.div>
    </>
  );
}

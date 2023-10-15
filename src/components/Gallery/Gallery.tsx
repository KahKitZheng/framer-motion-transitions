import React, { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { imageData } from "../../data/imageData";
import { Link } from "react-router-dom";

const images = imageData.filter((image) => image.category === "japan");

type ImageItem = {
  id: string;
  location: string;
  date: string;
  by: string;
  link: string;
  category: string;
  src: string;
};

type GalleryProps = {
  imageItem: ImageItem | null;
};

export default function Gallery({ imageItem }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(
    imageItem
  );

  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  return (
    <LayoutGroup>
      <motion.div className="gallery-wrapper">
        {images.map((image, index) => (
          <GalleryItem
            key={image.src}
            image={image}
            index={index}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage ? (
          <ImagePopup image={selectedImage} onClose={handleCloseClick} />
        ) : null}
      </AnimatePresence>
    </LayoutGroup>
  );
}

type GalleryItemProps = {
  index: number;
  image: ImageItem;
  onClick: () => void;
};

function GalleryItem(props: GalleryItemProps) {
  const { index, image, onClick } = props;

  return (
    <motion.div
      className="gallery-item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 + index * 0.1 }}
    >
      <Link to={`/image/${index}`} className="link" onClick={onClick}>
        <motion.img
          layout
          layoutId={image?.src}
          className="thumbnail"
          src={image.src}
          alt=""
        />
        <div className="description">
          <small>{image.by}</small>
          <small>{image.date}</small>
        </div>
      </Link>
    </motion.div>
  );
}

type ImagePopupProps = {
  image: ImageItem | null;
  onClose: () => void;
};

export function ImagePopup(props: ImagePopupProps) {
  const { image, onClose } = props;

  return (
    <div>
      <div className="shade" onClick={onClose} />
      <motion.div className="wrapper" layout layoutId={image?.src}>
        <img src={image?.src} alt="" />
        <div className="comments">
          <button onClick={onClose}>close</button>
        </div>
      </motion.div>
    </div>
  );
}

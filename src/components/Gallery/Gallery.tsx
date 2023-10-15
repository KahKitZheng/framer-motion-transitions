import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { imageData } from "../../data/imageData";
import { Link, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
    navigate("/");
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

  const navigate = useNavigate();

  return (
    <motion.div
      className="gallery-item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 + index * 0.1 }}
    >
      <div
        className="link"
        onClick={() => {
          onClick();
          navigate(`/image/${index}`);
        }}
      >
        <motion.img
          layout
          layoutId={image?.src}
          className="thumbnail"
          src={image.src}
          alt=""
        />
        <div className="description">
          <a
            className="author"
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {image.by}
          </a>
          <small className="date">{image.date}</small>
        </div>
      </div>
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
      <motion.div
        className="shade"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div className="wrapper" layout layoutId={image?.src}>
        <img src={image?.src} alt="" />
        {/* <div className="comments">
          <button onClick={onClose}>close</button>
        </div> */}
      </motion.div>
    </div>
  );
}

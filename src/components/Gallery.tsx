import { useState } from "react";
import { CloseButton, GridImage, GridSection, ModalImage, ModalOverlay, NavButton } from "../styles/Gallery.styles";

const images = [
  "/sea_01.jpg",
  "/sea_02.jpg",
  "/sea_03.jpg",
  "/park_01.jpg",
  "/park_02.jpg",
  "/park_03.jpg",
  "/flower_01.jpg",
  "/flower_02.jpg",
  "/flower_03.jpg",
  "/room_01.jpg",
  "/room_02.jpg",
  "/room_03.jpg",
  "/bridge_01.jpg",
  "/bridge_02.jpg",
  "/bridge_03.jpg",
];

export default function ImageGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex(null);
  };

  return (
    <>
      <GridSection>
        {images.map((src, index) => (
          <GridImage
            key={index}
            src={src}
            alt={`gallery_${index + 1}`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </GridSection>

      {selectedIndex !== null && (
        <ModalOverlay onClick={handleClose}>
          <CloseButton onClick={handleClose}>×</CloseButton>
          <NavButton onClick={handlePrev} position="left">‹</NavButton>
          <ModalImage src={images[selectedIndex]} alt="selected" />
          <NavButton onClick={handleNext} position="right">›</NavButton>
        </ModalOverlay>
      )}
    </>
  );
}

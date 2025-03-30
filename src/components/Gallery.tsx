import { useState } from "react";
import { CloseButton, GridImage, GridSection, ModalImage, ModalOverlay } from "../styles/Gallery.styles";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <GridSection>
        {images.map((src, index) => (
          <GridImage
            key={index}
            src={src}
            alt={`gallery_${index + 1}`}
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </GridSection>

      {selectedImage && (
        <ModalOverlay onClick={() => setSelectedImage(null)}>
          <CloseButton onClick={() => setSelectedImage(null)}>×</CloseButton>
          <ModalImage src={selectedImage} alt="selected" />
        </ModalOverlay>
      )}
    </>
  );
}

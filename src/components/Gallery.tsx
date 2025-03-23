import { useState } from "react";
import { CloseButton, GridImage, GridSection, ModalImage, ModalOverlay } from "../styles/Gallery.styles";

const images = [
  "/sea_01.JPG",
  "/sea_02.JPG",
  "/sea_03.JPG",
  "/park_01.JPG",
  "/park_02.JPG",
  "/park_03.JPG",
  "/flower_01.JPG",
  "/flower_02.JPG",
  "/flower_03.JPG",
  "/room_01.JPG",
  "/room_02.JPG",
  "/room_03.JPG",
  "/bridge_01.JPG",
  "/bridge_02.JPG",
  "/bridge_03.JPG",
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

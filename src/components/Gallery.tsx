import { useState, useRef } from "react";
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
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleNext = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const handleClose = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setSelectedIndex(null);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 50) {
        // 왼쪽으로 스와이프 → 다음 사진
        handleNext();
      } else if (distance < -50) {
        // 오른쪽으로 스와이프 → 이전 사진
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
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
        <ModalOverlay
          onClick={handleClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <CloseButton onClick={handleClose}>×</CloseButton>
          <NavButton onClick={handlePrev} position="left">‹</NavButton>
          <ModalImage src={images[selectedIndex]} alt="selected" />
          <NavButton onClick={handleNext} position="right">›</NavButton>
        </ModalOverlay>
      )}
    </>
  );
}

import { useRef, useState } from "react";

export const useProductSlider = (length: number)=> {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollLeft = () => {
    setCurrentIndex((prev) => (prev > length -1 ? prev + 1 : 0));
  };
  const scrollRight = () => {
    setCurrentIndex((prev => (prev >  0 ? prev - 1 :length - 1)));
  };
  return {sliderRef, currentIndex, scrollLeft, scrollRight}
}
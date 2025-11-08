import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  // FIX: Made `children` prop optional to resolve a TypeScript error where it was incorrectly reported as missing.
  children?: React.ReactNode;
  overlay?: boolean;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialImageLoaded, setIsInitialImageLoaded] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Effect to load the initial image and start the slider
  useEffect(() => {
    if (images && images.length > 0) {
      const img = new Image();
      img.src = images[0];
      img.onload = () => {
        setIsInitialImageLoaded(true);
      };
      img.onerror = (error) => {
        console.error("Failed to load initial slider image", error);
        // still render the slider, even if the first image is broken, so children are visible
        setIsInitialImageLoaded(true); 
      }
    }
  }, [images]);

  // Effect to preload the next image for a smooth transition
  useEffect(() => {
    if (isInitialImageLoaded && images.length > 1) {
      const nextImageIndex = (currentIndex + 1) % images.length;
      const img = new Image();
      img.src = images[nextImageIndex];
    }
  }, [currentIndex, images, isInitialImageLoaded]);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: any;
    // Start autoplay only after the first image has loaded
    if (autoplay && isInitialImageLoaded) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious, isInitialImageLoaded]);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        // FIX: Add 'as const' to ensure TypeScript infers the cubic-bezier array as a tuple, which is the type expected by framer-motion's `ease` property.
        ease: [0.645, 0.045, 0.355, 1.0] as const,
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = isInitialImageLoaded;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-sidi-black/60 z-10", overlayClassName)}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};

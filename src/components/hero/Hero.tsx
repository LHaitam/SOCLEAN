import React, { useEffect, useRef } from "react";
import { FiArrowDown } from "react-icons/fi";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Essayer de lire la vidéo automatiquement
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay bloqué, démarrage manuel nécessaire :", error);
          video.muted = true;
          video.play();
        });
      }
    }
  }, []);

  const scrollToSection = () => {
    const nextSection = document.getElementById("logos");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center px-12 pb-48 pt-12 md:pt-24 min-h-screen"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Scroll Down Icon */}
      <FiArrowDown
        className="absolute bottom-12 z-[2] cursor-pointer text-6xl text-white hover:text-gray-300 animate-bounce"
        onClick={scrollToSection}
      />
    </section>
  );
};

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Hero3D.css';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 63;

export default function Hero3D({ children }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    contextRef.current = context;

    // Set canvas sizes scaled by device pixel ratio for high resolution (Retina/4K)
    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for performance
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      renderFrame(currentFrame.frame);
    };

    // Frame tracking object for GSAP animation starting from Frame 2 (skip Frame 1)
    const currentFrame = { frame: 2 };

    // Pad frame numbers to 3 digits (e.g. 2 -> "002")
    const formatFrame = (index) => {
      return String(index).padStart(3, '0');
    };

    let loadedCount = 0;
    const images = [];

    const renderFrame = (frameIndex) => {
      const imgIndex = Math.max(2, Math.min(TOTAL_FRAMES, Math.round(frameIndex)));
      const img = images[imgIndex - 2]; // Map Frame 2 to index 0
      if (img && img.complete) {
        // Enable high quality image scaling
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';

        // Enhance rendering details and metallic contours of the mechanical parts
        context.filter = 'contrast(1.16) brightness(1.03)';

        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw image keeping aspect ratio (cover style)
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imgWidth = img.width;
        const imgHeight = img.height;
        
        const imgRatio = imgWidth / imgHeight;
        const canvasRatio = canvasWidth / canvasHeight;
        
        let drawWidth = canvasWidth;
        let drawHeight = canvasHeight;
        let offsetX = 0;
        let offsetY = 0;
        
        const isMobile = canvasWidth < canvasHeight; // Portrait mode

        if (isMobile) {
          // Cinematic mobile composition: 
          // Scale it so it's large and overflows naturally, but not massively over-cropped.
          // Set height to ~65% of the screen height to maintain the premium cinematic depth.
          drawHeight = canvasHeight * 0.65;
          drawWidth = drawHeight * imgRatio;
          
          // Shift it to the right side of the screen by pushing the image slightly left
          // Using a slight offset bias to keep the front wheel visible
          offsetX = (canvasWidth - drawWidth) * 0.6; 
          
          // Push it toward the bottom half
          offsetY = canvasHeight - drawHeight + (canvasHeight * 0.1);
        } else {
          // Desktop cover logic
          if (canvasRatio > imgRatio) {
            drawHeight = canvasWidth / imgRatio;
            offsetY = (canvasHeight - drawHeight) / 2;
          } else {
            drawWidth = canvasHeight * imgRatio;
            offsetX = (canvasWidth - drawWidth) / 2;
          }
        }
        
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // Preload all frames starting from Frame 2
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/benz-scroll/ezgif-frame-${formatFrame(i)}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
          // Render first frame immediately
          renderFrame(2);
        }
        if (loadedCount === (TOTAL_FRAMES - 1)) {
          // All frames loaded
          renderFrame(2);
        }
      };
      img.onerror = (err) => {
        console.error(`Failed to load frame ${i}`, err);
      };
      images.push(img);
    }
    imagesRef.current = images;

    // Handle sizing and resize events
    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();

    // Wrap GSAP code in gsap.context for React StrictMode cleanup safety
    const ctx = gsap.context(() => {
      // GSAP ScrollTrigger timeline to pin the container, animate the assembly, and hold at the end
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1500', // Pinned and scroll smoothly for 1500px of scrolling (more time to enjoy the animation)
          scrub: 0.1,    // Responsive scrub to ensure frame updates match scrollbar instantly and avoid unpin lag
          pin: true,
          pinSpacing: true, // Pushes down content so the user sees the full animation!
        }
      });

      // 1. Animate the assembly of the car from frame 2 to TOTAL_FRAMES
      tl.to(currentFrame, {
        frame: TOTAL_FRAMES,
        snap: 'frame',
        ease: 'none',
        duration: 0.8,
        onUpdate: () => {
          renderFrame(currentFrame.frame);
        }
      }, 0);

      // Only for mobile resolution: cinematic text fade and parallax
      let mm = gsap.matchMedia(containerRef);
      mm.add("(max-width: 767px)", () => {
        // Cinematic Parallax: move the canvas slightly up while scrolling
        tl.to(canvasRef.current, {
          y: '-10%',
          ease: 'none',
          duration: 1
        }, 0);

        // Cinematic Fade/Slide: text smooth transition
        tl.to('.hero-text-content', {
          y: -80,
          opacity: 0,
          ease: 'power1.in',
          duration: 0.5
        }, 0);
      });

      // 2. Hold at TOTAL_FRAMES (fully assembled car) for the remaining 20% of the timeline
      // This guarantees the user sees the fully assembled car stationary before unpinning/scrolling up.
      tl.to(currentFrame, {
        frame: TOTAL_FRAMES,
        ease: 'none',
        duration: 0.2,
        onUpdate: () => {
          renderFrame(TOTAL_FRAMES);
        }
      });
    }, containerRef); // Scope selectors to the container

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      ctx.revert(); // Properly kills and reverts only the ScrollTrigger and tweens in this context
    };
  }, []);

  return (
    <div className="scroll-container bg-[#eaeaea]" ref={containerRef}>
      <div className="canvas-sticky-wrapper">
        <canvas ref={canvasRef} className="car-canvas-container absolute inset-0 z-0 w-full h-full" />
        <div className="absolute inset-y-0 left-0 w-full md:w-[45%] bg-gradient-to-r from-[#eaeaea] via-[#eaeaea]/85 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="pointer-events-auto h-full w-full hero-text-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

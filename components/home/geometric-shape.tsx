'use client';

import { motion } from 'framer-motion';

export function GeometricShape() {
  return (
    <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
      {/* Rotating container */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="relative h-full w-full"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        {/* Octahedron faces */}
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `rotateX(${index * 45}deg) rotateY(${index * 45}deg)`,
              background: `linear-gradient(45deg, 
                rgba(59, 130, 246, ${0.1 + (index * 0.1)}) 0%,
                rgba(147, 51, 234, ${0.1 + (index * 0.1)}) 100%)`,
              borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(5px)',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
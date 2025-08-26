// // import * as React from 'react';
// // import { useTheme } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';


// // export default function CategoryCard() {
// //   const theme = useTheme();

// //   return (
// //     <Card sx={{ display: 'flex' }}>
// //       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
// //         <CardContent sx={{ flex: '1 0 auto' }}>
// //           <Typography component="div" variant="h5">
// //             Live From Space
// //           </Typography>
// //           <Typography
// //             variant="subtitle1"
// //             component="div"
// //             sx={{ color: 'text.secondary' }}
// //           >
// //             Mac Miller
// //           </Typography>
// //         </CardContent>
       
// //       </Box>
// //       <CardMedia
// //         component="img"
// //         sx={{ width: 151 }}
// //         image="/static/images/cards/live-from-space.jpg"
// //         alt="Live from space album cover"
// //       />
// //     </Card>
// //   );
// // }

// // const CategoryCard = ({ icon, title, subtitle }) => {
// //   return (
// //     <div className="flex flex-col items-start bg-white rounded-xl shadow-sm p-4 w-[120px] hover:shadow-md transition-all cursor-pointer">
// //       <div className="text-3xl mb-3">{icon}</div>
// //       <h3 className="text-sm font-semibold">{title}</h3>
// //       <p className="text-[10px] text-gray-500">{subtitle}</p>
// //     </div>
// //   );
// // };

// // export default CategoryCard;

// const CategoryCard = ({ name, label, img }) => {
//   return (
//     <div className="w-auto h-full bg-white rounded-xl shadow-sm p-3 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3">
//       {/* Text content on the left */}
//       <div className="flex flex-col">
//         <h3 className="text-sm font-semibold">{name}</h3>
//         {label && <p className="text-[11px] text-gray-500">{label}</p>}
//       </div>

//       {/* Image on the right */}
//       <img
//         src={img}
//         alt={name}
//         className="w-10 h-10 object-contain"
//       />
//     </div>
//   );
// };

// export default CategoryCard;

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';



const CategoryCard = ({ name, label, img, index, mouseX, mouseY }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  // Smooth spring configurations
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Smooth magnetic and tilt effect
  useEffect(() => {
    const handleMouseMove = () => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseXPos = mouseX.get();
      const mouseYPos = mouseY.get();
      
      const distance = Math.sqrt(
        Math.pow(mouseXPos - centerX, 2) + Math.pow(mouseYPos - centerY, 2)
      );
      
      if (distance < 150) {
        const strength = (150 - distance) / 150;
        const deltaX = (mouseXPos - centerX) * strength * 0.15;
        const deltaY = (mouseYPos - centerY) * strength * 0.15;
        
        x.set(deltaX);
        y.set(deltaY);
        
        // Subtle 3D tilt
        const tiltStrength = strength * 0.3;
        rotateY.set((mouseXPos - centerX) * tiltStrength * 0.1);
        rotateX.set(-(mouseYPos - centerY) * tiltStrength * 0.1);
      } else {
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
      }
    };

    const unsubscribeX = mouseX.onChange(handleMouseMove);
    const unsubscribeY = mouseY.onChange(handleMouseMove);
    
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, x, y, rotateX, rotateY]);

  return (
    <motion.div
      ref={cardRef}
      className="relative cursor-pointer"
      style={{
        x: springX,
        y: springY,
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          background: `linear-gradient(135deg, 
            rgba(59, 130, 246, 0.3) 0%, 
            rgba(147, 51, 234, 0.3) 50%, 
            rgba(236, 72, 153, 0.3) 100%)`,
          filter: "blur(20px)",
          zIndex: -1
        }}
      />

      {/* Main card */}
      <motion.div
        className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 flex items-center justify-between gap-4 overflow-hidden"
        initial={{ scale: 1 }}
        animate={{
          scale: isHovered ? 1.03 : 1,
          boxShadow: isHovered 
            ? "0 20px 40px rgba(0,0,0,0.1), 0 0 30px rgba(59, 130, 246, 0.2)"
            : "0 4px 6px rgba(0,0,0,0.05)"
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 rounded-xl"
          animate={{
            opacity: isHovered ? 0.05 : 0,
            background: isHovered ? [
              "linear-gradient(45deg, #3b82f6 0%, transparent 50%)",
              "linear-gradient(135deg, #8b5cf6 0%, transparent 50%)",
              "linear-gradient(225deg, #ec4899 0%, transparent 50%)",
              "linear-gradient(315deg, #06b6d4 0%, transparent 50%)",
              "linear-gradient(45deg, #3b82f6 0%, transparent 50%)"
            ] : "transparent"
          }}
          transition={{
            opacity: { duration: 0.4 },
            background: { duration: 4, repeat: Infinity, ease: "linear" }
          }}
        />

        {/* Text content */}
        <div className="flex flex-col relative z-10">
          <motion.h3 
            className="text-sm font-semibold text-gray-900"
            animate={{
              color: isHovered ? "#3b82f6" : "#111827"
            }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.h3>
          {label && (
            <motion.p 
              className="text-xs text-gray-500 mt-1"
              animate={{
                opacity: isHovered ? 0.8 : 0.6,
                y: isHovered ? -1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {label}
            </motion.p>
          )}
        </div>

        {/* Image container */}
        <motion.div 
          className="relative"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Image glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              opacity: isHovered ? 0.4 : 0,
              scale: isHovered ? 1.3 : 1
            }}
            transition={{ duration: 0.4 }}
            style={{
              background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
              filter: "blur(8px)"
            }}
          />
          
          <motion.img
            src={img}
            alt={name}
            className="w-12 h-12 object-contain relative z-10"
            animate={{
              filter: isHovered ? "brightness(1.1) saturate(1.2)" : "brightness(1) saturate(1)"
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Floating dots */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: `hsl(${220 + i * 20}, 70%, 60%)`,
                    left: `${20 + i * 12}%`,
                    top: `${30 + Math.sin(i) * 20}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [0, -20, -40],
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default CategoryCard;
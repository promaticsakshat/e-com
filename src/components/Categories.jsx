// import CategoryCard from "./Card";


// const Categories = () => {

//     const items = [
//         {
//             id: 1,
//             name: "Vegetables",
//             label: "Local market",
//             img: "https://www.pngall.com/wp-content/uploads/5/Vegetables-PNG-File.png"
//         },
//         {
//             id: 2,
//             name: "Snacks & Breads",
//             label: "In store delivery",
//             img: "https://www.pngall.com/wp-content/uploads/5/Bread-PNG-Free-Download.png"
//         },
//         {
//             id: 3,
//             name: "Fruits",
//             label: "Comical free",
//             img: "https://www.pngall.com/wp-content/uploads/4/Fruits-PNG-Free-Image.png"
//         },
//         {
//             id: 4,
//             name: "Chicken legs",
//             label: "Frozen Meal",
//             img: "https://www.pngall.com/wp-content/uploads/4/Chicken-Leg-PNG-Image.png"
//         },
//         {
//             id: 5,
//             name: "Milk & Dairy",
//             label: "Process food",
//             img: "https://www.pngall.com/wp-content/uploads/6/Milk-PNG-Image.png"
//         },
//         {
//             id: 6,
//             name: "See all",
//             label: "",
//             img: "https://cdn-icons-png.flaticon.com/512/32/32336.png"
//         }
//     ];


//     // return (
//     //     <div className="w-full min-h-[150px] border mt-4">
//     //         <div className="w-full h-full grid grid-cols-2 md:grid-cols-6 gap-4 p-4">
//     //             {items.map((item) => (
//     //                 <CategoryCard
//     //                     key={item.id}
//     //                     name={item.name}
//     //                     label={item.label}
//     //                     img={item.img}
//     //                 />
//     //             ))}


//     //         </div>

//     //     </div>
//     // )

//     return (
//   <div className="w-full min-h-[150px] border mt-4">
//     <div className="grid grid-cols-12 gap-4 p-4">
//       {items.map((item) => (
//         <div
//           key={item.id}
//           className="col-span-6 md:col-span-2 border"
//         >
//           <CategoryCard
//             name={item.name}
//             label={item.label}
//             img={item.img}
//           />
//         </div>
//       ))}
//     </div>
//   </div>
// );


// }

// export default Categories;
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import CategoryCard from "./Card";
const Categories = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef(null);

  const items = [
    {
      id: 1,
      name: "Vegetables",
      label: "Local market",
      img: "https://www.pngall.com/wp-content/uploads/5/Vegetables-PNG-File.png"
    },
    {
      id: 2,
      name: "Snacks & Breads",
      label: "In store delivery",
      img: "https://www.pngall.com/wp-content/uploads/5/Bread-PNG-Free-Download.png"
    },
    {
      id: 3,
      name: "Fruits",
      label: "Comical free",
      img: "https://www.pngall.com/wp-content/uploads/4/Fruits-PNG-Free-Image.png"
    },
    {
      id: 4,
      name: "Chicken legs",
      label: "Frozen Meal",
      img: "https://www.pngall.com/wp-content/uploads/4/Chicken-Leg-PNG-Image.png"
    },
    {
      id: 5,
      name: "Milk & Dairy",
      label: "Process food",
      img: "https://www.pngall.com/wp-content/uploads/6/Milk-PNG-Image.png"
    },
    {
      id: 6,
      name: "See all",
      label: "",
      img: "https://cdn-icons-png.flaticon.com/512/32/32336.png"
    }
  ];

  const handleMouseMove = (event) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[150px] mt-4 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ 
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)"
      }}
    >
      {/* Subtle animated background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 50%, rgba(147, 51, 234, 0.03) 0%, transparent 50%)",
            "radial-gradient(ellipse at 50% 20%, rgba(236, 72, 153, 0.03) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)"
          ]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="grid grid-cols-12 gap-4 p-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="col-span-6 md:col-span-2"
            variants={itemVariants}
          >
            <CategoryCard
              name={item.name}
              label={item.label}
              img={item.img}
              index={index}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Categories;
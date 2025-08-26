// // const Hero = () => {
// //     return (
// //         <div className="w-full h-[250px] bg-[#064c4e] flex items-center justify-center rounded-3xl mt-4">
// //             {/* left content */}
// //             <div className="w-[40%] text-white h-full flex flex-col justify-center p-20 ">
// //                 <h1 className="text-3xl font-bold">We bring the store</h1>
// //                 <h1 className="text-3xl font-bold my-2">to your door</h1>
// //                 <p className="text-xs mb-4 mt-4 p">Experience the convenience of shopping from home with our fast delivery service.</p>
// //                 <button className="bg-[#b2e273] text-black px-4 py-2 rounded  w-32">Shop Now</button>

// //             </div>

// //             {/* right content */}

// //             <div className="w-[60%] h-full flex items-center justify-center ">

// //                 <img
// //                 src="https://images.jdmagicbox.com/quickquotes/images_main/grocery-bag-2217775810-sb5ozcco.jpg"
// //                 className="h-full object-cover"
// //                  />

// //             </div>
// //         </div>
// //     );
// // }

// // export default Hero;
// import mainImage from '../assets/main.png';

// const Hero = () => {
//     return (
//         <div className="w-full h-[250px] bg-[#0c544e] rounded-3xl mt-4 flex flex-col md:flex-row overflow-hidden p-14">

//             {/* Left content */}
//             <div className="w-full md:w-[40%] text-white flex flex-col justify-center px-6 md:px-10">
//                 <h1 className="text-xl md:text-2xl font-bold">We bring the store</h1>
//                 <h1 className="text-xl md:text-2xl font-bold my-1">to your door</h1>
//                 <p className="text-xs md:text-sm mt-2 mb-4">
//                     Experience the convenience of shopping from home with our fast delivery service.
//                 </p>
//                 <button className="bg-[#b2e273] text-black px-4 py-2 rounded w-fit text-sm">
//                     Shop Now
//                 </button>
//             </div>

//             {/* Right content */}
//             <div className=" w-full md:w-[60%] h-full flex items-center justify-center"
//                 style={{ position: 'relative'}}>
//                 <img
//                     src={mainImage}
//                     alt="Grocery"
//                     className="w-[500px] h-[300px] object-contain"
//                     style={{ position: 'absolute',bottom: "-133px", width: "300px", height: "315px" }}
//                 />
//             </div>
//         </div>

//     );
// };

// export default Hero;


import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import mainImage from '../assets/main.png';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        setIsLoaded(true);
        // Generate floating particles
        const newParticles = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 6 + 2,
            delay: Math.random() * 2
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="relative">
            {/* Magical Particles Background */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-20"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.6, 0.2]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Main Hero Container with INSANE Animation */}
            <motion.div 
                className="w-full h-[250px] bg-gradient-to-br from-[#0c544e] via-[#0a4942] to-[#083d3a] rounded-3xl mt-4 flex flex-col md:flex-row overflow-hidden p-14 relative"
                initial={{ 
                    scale: 0,
                    rotateY: -180,
                    rotateX: 45,
                    opacity: 0,
                    filter: "blur(20px) hue-rotate(180deg)"
                }}
                animate={{ 
                    scale: 1,
                    rotateY: 0,
                    rotateX: 0,
                    opacity: 1,
                    filter: "blur(0px) hue-rotate(0deg)"
                }}
                transition={{ 
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                    duration: 2.5,
                    ease: [0.6, 0.01, -0.05, 0.95]
                }}
                style={{
                    transformStyle: "preserve-3d",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(11, 84, 78, 0.3)"
                }}
            >
                {/* Animated Gradient Overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                        duration: 3,
                        delay: 1.5,
                        ease: "easeInOut"
                    }}
                />

                {/* Left content with CRAZY text animations */}
                <motion.div 
                    className="w-full md:w-[40%] text-white flex flex-col justify-center px-6 md:px-10 relative z-10"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                        duration: 1.2, 
                        delay: 0.8,
                        type: "spring",
                        stiffness: 100
                    }}
                >
                    {/* Mind-blowing text reveal */}
                    <motion.h1 
                        className="text-xl md:text-2xl font-bold mb-2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 1, 
                            delay: 1.2,
                            type: "spring",
                            stiffness: 120
                        }}
                    >
                        {"We bring the store".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: 1.4 + index * 0.03,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.h1 
                        className="text-xl md:text-2xl font-bold my-1 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 1, 
                            delay: 1.6,
                            type: "spring",
                            stiffness: 120
                        }}
                    >
                        {"to your door".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: 1.8 + index * 0.03,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p 
                        className="text-xs md:text-sm mt-2 mb-4"
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1, delay: 2.5 }}
                    >
                        Experience the convenience of shopping from home with our fast delivery service.
                    </motion.p>

                    {/* INSANE Button Animation */}
                    <motion.button 
    className="bg-gradient-to-r from-[#b2e273] to-[#9dd65a] text-black px-4 py-2 rounded w-fit text-sm font-semibold relative z-10"
    initial={{ 
        opacity: 0, 
        scale: 0.5,
        y: 20
    }}
    animate={{ 
        opacity: 1, 
        scale: 1,
        y: 0
    }}
    transition={{ 
        duration: 0.8, 
        delay: 2.5,
        type: "spring",
        stiffness: 150,
        damping: 15
    }}
    whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(178, 226, 115, 0.4)",
        transition: { duration: 0.2 }
    }}
    whileTap={{ 
        scale: 0.95,
        filter: "brightness(1.1)"
    }}
>
    <span className="relative z-10">Shop Now</span>
</motion.button>
                </motion.div>

                {/* Right content with UNBELIEVABLE image animation */}
                <motion.div 
                    className="w-full md:w-[60%] h-full flex items-center justify-center"
                    style={{ position: 'relative'}}
                    initial={{ opacity: 0, x: 300, rotateY: 90 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ 
                        duration: 2, 
                        delay: 1,
                        type: "spring",
                        stiffness: 80
                    }}
                >
                    {/* Floating rings around image */}
                    <motion.div
                        className="absolute inset-0 border-2 border-emerald-400/30 rounded-full"
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />
                    <motion.div
                        className="absolute inset-4 border border-blue-400/20 rounded-full"
                        animate={{
                            rotate: -360,
                            scale: [1.1, 1, 1.1]
                        }}
                        transition={{
                            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                            scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                        }}
                    />

                    <motion.img
                        src={mainImage}
                        alt="Grocery"
                        className="w-[500px] h-[300px] object-contain filter drop-shadow-2xl"
                        style={{ position: 'absolute', bottom: "-133px", width: "300px", height: "315px" }}
                        initial={{ 
                            opacity: 0, 
                            scale: 0,
                            y: 100,
                            rotateY: 180,
                            filter: "blur(20px) brightness(2)"
                        }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1,
                            y: 0,
                            rotateY: 0,
                            filter: "blur(0px) brightness(1)"
                        }}
                        transition={{ 
                            duration: 2,
                            delay: 1.5,
                            type: "spring",
                            stiffness: 100,
                            damping: 12
                        }}
                        whileHover={{
                            scale: 1.1,
                            rotateY: 10,
                            rotateX: -5,
                            filter: "brightness(1.1) drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
                            transition: { duration: 0.4, type: "spring", stiffness: 200 }
                        }}
                    />

                    {/* Magical sparkles */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                            style={{
                                left: `${20 + i * 10}%`,
                                top: `${30 + (i % 3) * 20}%`
                            }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 2,
                                delay: 2.5 + i * 0.2,
                                repeat: Infinity,
                                repeatDelay: 3
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
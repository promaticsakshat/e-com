import { useState, useEffect, useRef } from "react";
import { Search, ShoppingCart, User, Menu, Clock, Star, Heart, BarChart3, Flame } from 'lucide-react';
import { motion, useAnimation, useInView } from "framer-motion";
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpeg';

const productImages = [p1, p2, p1, p2];

const ProductInfo = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  // For animation controls
  const controls = useAnimation();
  const textControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Animate on scroll in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      textControls.start("visible");
    } else {
      controls.start("hidden");
      textControls.start("hidden");
    }
  }, [isInView, controls, textControls]);

  // Scroll event to change image based on scroll progress inside the component
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress relative to this component (0 to 1)
      const scrollProgress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);

      // Map scrollProgress to an image index
      const imageIndex = Math.floor(scrollProgress * productImages.length);
      setSelectedImage(imageIndex >= productImages.length ? productImages.length - 1 : imageIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
  };

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <motion.div 
          className="space-y-4"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <div className="relative bg-white rounded-3xl p-8 shadow-lg">
            {/* Discount Badge */}
            <div className="absolute top-4 left-4 bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold">70%</div>
                <div className="text-xs">DISCOUNT</div>
              </div>
            </div>

            <div className="aspect-square flex items-center justify-center overflow-hidden rounded-2xl">
              <motion.img
                key={selectedImage}
                src={productImages[selectedImage]}
                alt="Bob's Red Mill Whole Wheat Flour"
                className="w-full h-full object-cover rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-4 justify-center">
            {productImages.map((img, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 cursor-pointer ${
                  selectedImage === index ? 'border-emerald-500' : 'border-gray-200'
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={img}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate={textControls}
          variants={textVariants}
        >
          {/* Timer */}
          <div className="flex items-center gap-2 text-red-500 font-mono text-lg">
            {/* <Clock className="w-5 h-5" /> */}
            <span>270 : 13 : 10 : 32</span>
          </div>

          <div>
            <p className="text-emerald-600 font-medium mb-2">Buying grocery</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Bobs red mill whole wheat
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-4 h-4 text-gray-300" />
              </div>
              <span className="text-yellow-600 font-medium">4.5 Rating</span>
              <span className="text-gray-500">(15 reviews)</span>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-gray-900">429.</span>
              <span className="text-2xl font-bold text-gray-900">12$</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-white border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
              🛒 Add to bucket
            </button>
            <button className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
              Buy with 💳 tamara
            </button>
          </div>

          {/* Additional Options */}
          <div className="flex gap-6 text-gray-600">
            <button className="flex items-center gap-2 hover:text-emerald-600">
              <Heart className="w-4 h-4" />
              ADD TO WISHLIST
            </button>
            <button className="flex items-center gap-2 hover:text-emerald-600">
              <BarChart3 className="w-4 h-4" />
              Compare with other vendor
            </button>
          </div>

          {/* Color Options */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-red-600 rounded-full border-2 border-gray-300 cursor-pointer"></div>
            <div className="w-8 h-8 bg-blue-600 rounded-full border-2 border-blue-600 cursor-pointer"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-300 cursor-pointer"></div>
          </div>

          {/* Sales Info */}
          <div className="flex items-center gap-2 text-red-600">
            <Flame className="w-4 h-4" />
            <span className="font-medium">100 sold in last 35 hour</span>
          </div>

          {/* Product Details */}
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">SKU:</span> MB3442</p>
            <p><span className="font-medium">Categories:</span> Fruits, Noodles, Juice, snacks, Tshirts</p>
            <p className="text-gray-600 leading-relaxed">
              Coconut Oil is a great-tasting, nutritious alternative to use when cooking
              or baking. Coconut Oil is a naturally rich source of medium chain.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductInfo;


// import { useNavigate } from "react-router-dom";

// const ProductCard = ({ 
//   name, 
//   subtitle,
//   weight, 
//   price, 
//   img,  
//   id,
//   quantity,
//   loading,
//   addToCart,
//   removeFromCart
// }) => {
//   const navigate = useNavigate();
//   let qty = quantity.get(id) || 0;
//   let isLoading = loading.has(id);
  
//   return (
//     <div
//      className="row-span-2 bg-white rounded-xl border shadow-sm p-4 flex flex-col items-center justify-between hover:shadow-md transition-all">
//       <img
//       onClick={() => navigate('/product')}
//         src={img}
//         alt={name}
//         className="w-20 h-20 object-contain mb-3 pointer-cursor"
//       />
//       <div className="text-center">
//         <h3 className="text-sm font-semibold">{name}</h3>
//         {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
//         <p className="text-xs text-gray-500 mt-1">{weight}</p>
//         <p className="text-md font-semibold mt-2">${price}</p>
//       </div>


//       <div className={`flex items-center ${qty === 0 ? 'justify-center' : 'justify-between'} w-full mt-2`}>

//       <button
//       onClick={() => addToCart(id)} 
//       disabled={isLoading}
//       className="border mt-3 bg-[#e8f5e9] text-green-800 rounded-full w-8 h-8 text-xl font-bold flex items-center justify-center pointer-cursor">
//         +
//       </button>

//       {qty > 0 && <span className="font-semibold">{qty}</span>}

//       {qty > 0 && <button 
//       disabled={isLoading || qty === 0}
//       onClick={() => removeFromCart(id)}
//       className="border mt-3 bg-[#e8f5e9] text-green-800 rounded-full w-8 h-8 text-xl font-bold flex items-center justify-center">
//         -
//       </button>}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ 
  name, 
  subtitle,
  weight, 
  price, 
  img,  
  id,
  quantity,
  loading,
  addToCart,
  removeFromCart
}) => {
  const navigate = useNavigate();
  let qty = quantity.get(id) || 0;
  let isLoading = loading.has(id);

  let [priceInt, priceDec] = price.split(".");

  return (
    <div className="row-span-2 bg-white rounded-xl  shadow-sm p-4 flex flex-col items-center justify-between hover:shadow-md transition-all card-bottom-curve">
      <img
        onClick={() => navigate('/product')}
        src={img}
        alt={name}
        className="w-20 h-20 object-contain mb-3 cursor-pointer"
      />
      <div className="text-center">
        <h3 
        style={{fontFamily: 'Poppins, sans-serif', color:"#0c544e"}}
        className="text-[14px] font-semibold">{name}</h3>
        {subtitle && <p 
        style={{fontFamily: 'Poppins, sans-serif', color:"#0c544e"}}
        className="text-[15px] ">{`(${subtitle})`}</p>}
        <p 
        
        className="text-xs text-gray-500 mt-1">{weight}</p>
        {/* <p className="text-2xl font-semibold mt-2">${price}</p> */}
        <p 
        style={{fontFamily: 'Poppins, sans-serif', color:"#0c544e"}}
        className="text-3xl font-bold text-gray-900 mt-2">
          {priceInt}.<span className="text-xl align-super">{`${priceDec}$`}</span>
        </p>
      </div>
{/* concave-top-convex-bottom */}
      {/* ANIMATED BUTTONS */}
      <motion.div
        layout
        className={` concave-both-edges   flex items-center ${qty === 0 ? 'justify-center bg-[#f4f6f6]' : 'justify-between bg-[#bef873]'} w-full mt-2`}
      >
        <AnimatePresence initial={false}>
          {qty > 0 && (
            <motion.button
              key="remove"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              disabled={isLoading}
              onClick={() => removeFromCart(id)}
              className="border bg-[#e8f5e9] text-green-800 rounded-full w-8 h-8 text-xl font-bold flex items-center justify-center"
            >
              -
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {qty > 0 && (
            <motion.span
              key="qty"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="font-semibold"
            >
              {qty}
            </motion.span>
          )}
        </AnimatePresence>

        <motion.button
          layout
          onClick={() => addToCart(id)} 
          disabled={isLoading}
          className="border bg-[#e8f5e9] text-green-800 rounded-full w-8 h-8 text-xl font-bold flex items-center justify-center"
        >
          +
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProductCard;

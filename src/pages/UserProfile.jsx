// import { useState } from "react";

// const UserProfile = () => {
//   // Initial user data
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "+1 (555) 123-4567",
//     address: "1234 Elm Street, Springfield, USA",
//     avatar: "https://i.pravatar.cc/150?img=12",
//     joined: "January 15, 2023",
//   });

//   const [editMode, setEditMode] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   // Save changes and exit edit mode
//   const handleSave = () => {
//     // In real apps: make API call here
//     setEditMode(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
//       <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl">
//         {/* Avatar and header */}
//         <div className="flex flex-col items-center text-center mb-6">
//           <img
//             src={user.avatar}
//             alt="User avatar"
//             className="w-24 h-24 rounded-full border-4 border-amber-400 shadow-sm mb-4"
//           />
//           <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
//           <p className="text-gray-500">Joined: {user.joined}</p>
//         </div>

//         {/* Form / display section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {/* Name */}
//           <div>
//             <label className="text-gray-600 font-medium mb-1 block">Name</label>
//             {editMode ? (
//               <input
//                 type="text"
//                 name="name"
//                 value={user.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded bg-gray-50 focus:outline-none"
//               />
//             ) : (
//               <p className="bg-gray-50 px-4 py-2 rounded border text-gray-800">{user.name}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label className="text-gray-600 font-medium mb-1 block">Email</label>
//             {editMode ? (
//               <input
//                 type="email"
//                 name="email"
//                 value={user.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded bg-gray-50 focus:outline-none"
//               />
//             ) : (
//               <p className="bg-gray-50 px-4 py-2 rounded border text-gray-800">{user.email}</p>
//             )}
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="text-gray-600 font-medium mb-1 block">Phone</label>
//             {editMode ? (
//               <input
//                 type="tel"
//                 name="phone"
//                 value={user.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded bg-gray-50 focus:outline-none"
//               />
//             ) : (
//               <p className="bg-gray-50 px-4 py-2 rounded border text-gray-800">{user.phone}</p>
//             )}
//           </div>

//           {/* Address */}
//           <div>
//             <label className="text-gray-600 font-medium mb-1 block">Address</label>
//             {editMode ? (
//               <textarea
//                 name="address"
//                 value={user.address}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded bg-gray-50 focus:outline-none"
//                 rows={2}
//               />
//             ) : (
//               <p className="bg-gray-50 px-4 py-2 rounded border text-gray-800">{user.address}</p>
//             )}
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="mt-8 text-center space-x-4">
//           {editMode ? (
//             <>
//               <button
//                 onClick={handleSave}
//                 className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 shadow-md"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => setEditMode(false)}
//                 className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 shadow-md"
//               >
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => setEditMode(true)}
//               className="bg-[#0c544e] text-white px-6 py-2 rounded hover:bg-teal-700 shadow-md"
//             >
//               Edit Profile
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "1234 Elm Street, Springfield, USA",
    avatar: "https://i.pravatar.cc/150?img=12",
    joined: "January 15, 2023",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setEditMode(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const cardFlip = {
    hidden: { rotateY: 180, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 flex justify-center items-center py-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        layout
        className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-2xl relative overflow-hidden"
      >
        {/* Avatar */}
        <motion.div
          className="flex flex-col items-center text-center mb-6"
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
        >
          <motion.img
            src={user.avatar}
            alt="User avatar"
            className="w-24 h-24 rounded-full border-4 border-amber-400 shadow-md mb-4"
            whileHover={{ scale: 1.1 }}
          />
          <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">Joined: {user.joined}</p>
        </motion.div>

        {/* Fields */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 perspective"
        >
          {["name", "email", "phone", "address"].map((field) => (
            <motion.div
              key={field}
              className="relative"
              variants={cardFlip}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <label className="text-gray-600 font-medium mb-1 block capitalize">
                {field}
              </label>
              <AnimatePresence mode="wait">
                {editMode ? (
                  <motion.input
                    key={`input-${field}`}
                    name={field}
                    value={user[field]}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded bg-gray-50 focus:outline-none`}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : (
                  <motion.p
                    key={`view-${field}`}
                    className="bg-gray-50 px-4 py-2 rounded border text-gray-800"
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {user[field]}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <div className="mt-10 text-center space-x-4">
          <AnimatePresence mode="wait">
            {editMode ? (
              <>
                <motion.button
                  key="save"
                  onClick={handleSave}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 shadow-md"
                  initial={{ y: 20, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 20, opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  Save
                </motion.button>
                <motion.button
                  key="cancel"
                  onClick={() => setEditMode(false)}
                  className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 shadow-md"
                  initial={{ y: 20, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 20, opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  Cancel
                </motion.button>
              </>
            ) : (
              <motion.button
                key="edit"
                onClick={() => setEditMode(true)}
                className="bg-[#0c544e] text-white px-6 py-2 rounded hover:bg-teal-700 shadow-md"
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Edit Profile
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UserProfile;

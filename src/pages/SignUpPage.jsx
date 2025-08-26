// src/pages/Signup.jsx
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../api/services/authservice";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", gender:"" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    // TODO: Send signup API request
    let res = await signup(form)
    console.log(res)
    navigate("/profile"); // navigate on success
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-[#0c544e]">Create an Account</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0c544e]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0c544e]"
            required
          />
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0c544e]"
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nonbinary">Non-binary</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0c544e]"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#0c544e] text-white py-2 rounded hover:bg-[#08443f] transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#0c544e] font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Signup;

// src/pages/Login.jsx
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/services/authservice";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // TODO: Send login API request
    console.log(form)

    const data = await login(form)

    console.log(data)




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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-[#0c544e]">Login to ShopMate</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0c544e]"
            required
          />
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
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#0c544e] font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Login;

import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { LogIn } from "../pages/LogIn/LogIn";
import { Register } from "../pages/Register/Register";
import { Blogs } from "../pages/Blogs/Blogs";
import { BlogDetails } from "../pages/BlogDetails/BlogDetails";



export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<LogIn />} />

      <Route path="/about" element={<Home />} />

      <Route path="/blogs" element={<Blogs />} />

      <Route path="/blog/:slug" element={<BlogDetails />} />

      <Route path="*" element={<Home />} />
    </Routes>
  )
}
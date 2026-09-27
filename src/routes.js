import { index, route } from "@react-router/dev/routes";



export default [
    index("pages/Home/Home.jsx"),
    route("about", "pages/About/About.jsx"),
    route("register", "pages/Register/Register.jsx"),
    route("login", "pages/LogIn/LogIn.jsx"),
    route("blogs", "pages/Blogs/Blogs.jsx"),
    route("blog/:slug", "pages/BlogDetails/BlogDetails.jsx"),
    route("*", "pages/PageNotFound/PageNotFound.jsx")
];
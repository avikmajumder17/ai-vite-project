import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../api/axios";



export const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await api.get("/blogs");

                setBlogs(response?.data?.data?.blogs);
            } catch (err) {
                console.log(err);
            } finally {
                console.log("Blog is fetched successfully");
            }
        };

        fetchBlogs();
    }, []);



    return (
        <section className="container py-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold">Latest Blogs</h1>
                <p className="text-secondary">
                    Stay updated with the latest AI news and technology.
                </p>
            </div>

            <div className="row g-4">
                {blogs.map((blog) => (
                    <div className="col-lg-4 col-md-6" key={blog?._id}>
                        <div className="card bg-dark border-secondary h-100 text-light shadow">
                            {/* <img
                                src={blog.image}
                                className="card-img-top"
                                alt={blog.title}
                            /> */}

                            <div className="card-body d-flex flex-column">
                                <span className="badge bg-primary mb-2">
                                    {blog?.blogCategory}
                                </span>

                                <h4>{blog?.blogTitle}</h4>

                                <p className="text-secondary">
                                    {blog?.blogDescription}
                                </p>

                                <Link
                                    to={`/blog/${blog?._id}`}
                                    className="btn btn-primary mt-auto"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
